import React, { Fragment, useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCarts } from "../../../Features/Cart/CartSlice";
import Navbar from "../../../components/Header/Navbar";
import Footer from "../../../components/Footer";
import Swal from "sweetalert2";

const SingleProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { products } = useSelector((state) => state.products);
  const auth = JSON.parse(localStorage.getItem("auth"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const increaseQuantity = (e) => {
    e.preventDefault();
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = (e) => {
    e.preventDefault();
    setQuantity((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : prevQuantity
    );
  };

  const addToCart = (e) => {
    if (!auth) {
      Swal.fire({
        title:"Please login first",
        icon:"error",
      })
      navigate("/login");
      return;
    }
    Swal.fire({
      title:"item add to cart",
      icon:"success",
    })
    e.preventDefault();
    const item = {
      id: parseInt(productId),
      quantity: quantity,
      price: product.price,
    };
    dispatch(addToCarts(item));
  };

  

  useEffect(() => {
    const selectedProduct = products.find(
      (product) => product.id === parseInt(productId)
    );
    setProduct(selectedProduct);
  }, [productId, products]);

  return (
    <Fragment>
      <Navbar />
      <Container>
        {product && (
          <div className="min-w-screen min-h-screen  flex items-center p-5 lg:p-10 overflow-hidden relative">
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
              <div className="md:flex items-center -mx-10">
                <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                  <div className="relative">
                    <img
                      src={product.image}
                      className="w-full relative z-10"
                      alt={product.image}
                    />
                    <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-10">
                  <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">
                      Men's Ragged <br /> Waterproof Jacket
                    </h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
                      Eos, voluptatum dolorum! Laborum blanditiis consequatur,
                      voluptates, sint enim fugiat saepe, dolor fugit, magnam
                      explicabo eaque quas id quo porro dolorum facilis...{" "}
                      <a
                        href="#"
                        className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                      >
                        MORE <i className="mdi mdi-arrow-right"></i>
                      </a>
                    </p>
                    <p>{product.description}</p>
                  </div>
                  <div>
                    <div className="inline-block align-bottom mr-5">
                      <span className="text-2xl leading-none align-baseline">
                        $
                      </span>
                      <span className="font-bold text-5xl leading-none align-baseline">
                        {product.price}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex mb-3 py-5">
                    <button
                      className="btn btn-sm btn-dark fs-6 me-3 text-center"
                      onClick={decreaseQuantity}
                    >
                      <FaMinus />
                    </button>
                    <input
                      type="number"
                      className="form-control text-center w-auto p-0 m-0"
                      value={quantity}
                      readOnly={true}
                      required={true}
                    />
                    <button
                      className="btn btn-sm btn-dark fs-6 ms-3 text-center"
                      onClick={increaseQuantity}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      className="flex w-full h-12 rounded-lg justify-center items-center bg-blue-500 hover:bg-blue-700 text-white"
                      onClick={addToCart}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
      <Footer />
    </Fragment>
  );
};

export default SingleProductDetails;
