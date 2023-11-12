import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Col } from "react-bootstrap";
import { addCart } from "../../redux/ProductsSlice";
import { useState } from "react";

const ProductCard = ({data}) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();


    const auth = JSON.parse(localStorage.getItem("auth"));

    const handleAdd = (e, data) => {
        e.preventDefault();

        if (!auth) {
            navigate("/login");
        } else {
            if (auth.roles === "admin") {
                Swal.fire({
                    title: "You are an admin!",
                    icon: "error"
                });
            } else {
                dispatch(
                    addCart({
                        cartData: data,
                        qty: 1,
                        isCart: false
                    })
                );
                Swal.fire({
                    title: "Added to Cart",
                    icon: "success"
                });
            }
        }
    };



    return (
<div className="flex flex-col items-center justify-center ">
  <div className="mx-auto my-3 px-3">
    <Link to={`/product-detail/${data.id}`} className="text-decoration-none">
    <div className="max-w-sm cursor-pointer rounded-lg bg-white p-5  shadow duration-150 hover:scale-105 hover:shadow-md">
      <img className="w-96 h-96 rounded-lg object-cover object-center" src={data.image} alt="product" />
      <p className="w-full h-32 my-5 pl-4 font-bold text-xl text-black">{data.title}</p>
      <p className=" ml-4 text-xl  text-gray-800">{data.category}</p>
      <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">${data.price}</p>
      <button 
      className="block w-full h-10 px-6 py-2.5 justify-center items-center bg-red-500 hover:bg-red-700 rounded-lg font-semibold text-white"
      type="button"
      onClick={(e) => handleAdd(e, data)}
    >
      Add To Cart
    </button>
    </div>
    </Link>
  </div>
</div>
        // <Col>
        //     <Card style={{ display: "flex", justifyContent: "space-around", minHeight: "28rem" }} className="m-2 mt-4">
        //         <Card.Img variant="top" src={data.image} alt="thumbnail" style={{ width: "65%", height: "12rem", padding: "1rem", margin: "0 auto" }} />
        //         <Card.Body style={{ flex: "none" }}>
        //             <Card.Title>{data.title}</Card.Title>
        //             <Card.Subtitle className="my-3">{data.category}</Card.Subtitle>
        //             <Card.Text style={{
        //                 whiteSpace: "nowrap",
        //                 overflow: "hidden",
        //                 textOverflow: "ellipsis"
        //             }}
        //             >
        //                 {data.description}
        //             </Card.Text>
        //             <div>
        //                 <Button variant="info" as={Link} to={`/product-detail/${data.id}`}>Detail</Button>{" "}
        //                 <Button as={Link} variant="success" onClick={(e) => handleAdd(e, data)}>Add to Cart</Button>
        //             </div>
        //         </Card.Body>
        //     </Card>
        // </Col>
    );
}

export default ProductCard;