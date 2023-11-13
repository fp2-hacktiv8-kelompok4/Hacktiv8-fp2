import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { InfinitySpin } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/ProductsSlice";
import { getProductDetail } from "../../api";
import Header from "../../components/Header";
import SectionHeader from "../../components/SectionHeader";

const ProductDetail = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const products = useSelector((state) => state.products.products);

    const [data, setData] = useState(null);

    const [quantity, setQuantity] = useState(1);

    const handleAdd = (e, data) => {
        e.preventDefault();

        const product = products.filter((item) => item.id === data.id)[0];

        const auth = JSON.parse(localStorage.getItem("auth"));

        if (!auth) {
            navigate("/login");
        } else {
            if (auth.roles === "admin") {
                Swal.fire({
                    title: "You are an admin!",
                    icon: "error"
                });
            } else {
                if (quantity) {
                    dispatch(addCart({ cartData: product, qty: quantity, isCart: false }));
                    Swal.fire({
                        title: "Added to Cart",
                        icon: "success"
                    });
                } else {
                    Swal.fire({
                        title: "Quantity must a number",
                        icon: "error"
                    });
                }
            }
        }
    };

    useEffect(() => {
        getProductDetail(id).then(res => setData(res.data));
    }, [id]);

    return (
        <>
            <Header />
            <SectionHeader title="Product Detail" />
            {
                data ?
                <div className="min-w-screen min-h-screen  flex items-center p-5 lg:p-10 overflow-hidden relative">
                <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                  <div className="md:flex items-center -mx-10">
                    <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                      <div className="relative">
                        <img
                          src={data.image}
                          className="w-full relative z-10"
                          alt={data.image}
                        />
                        <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-10">
                      <div className="mb-10">
                        <h1 className="font-bold uppercase text-2xl mb-5">
                          {data.title}
                        </h1>
                        <p className="text-sm">
                          {data.description}
                        </p>
                        <p>{data.category}</p>
                      </div>
                      <div>
                        <div className="inline-block align-bottom mr-5">
                          <span className="text-2xl leading-none align-baseline">
                            $
                          </span>
                          <span className="font-bold text-5xl leading-none align-baseline">
                            {data.price}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-row justify-end pt-2">
                                 <Form.Control
                                     type="number"
                                     value={quantity}
                                     min={1}
                                     style={{ width: "75px", marginRight: "0.5rem" }}
                                     onChange={(e) => setQuantity(e.target.value)}
                                 />
                                 <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded" onClick={(e) => handleAdd(e, data)}>
                                        Add To Cart
                                 </button>
                            </div>
                      </div>
                    </div>
                  </div>
                </div>
                    // <Card style={{ width: "90%", margin: "2rem auto", display: "flex", flexDirection: "row" }}>
                    //     <Card.Img
                    //         variant="top"
                    //         src={data.image}
                    //         style={{ width: "450px", height: "450px", margin: "2rem" }}
                    //     />
                    //     <Card.Body style={{ textAlign: "center", padding: "3rem" }}>
                    //         <Card.Title style={{ marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid gray" }}>
                    //             {data.title}
                    //         </Card.Title>
                    //         <Card.Subtitle>Category : {data.category}</Card.Subtitle><br />
                    //         <Card.Text>Price : ${data.price}</Card.Text>
                    //         <Card.Text>Rating : {data.rating.rate}</Card.Text>
                    //         <Card.Text>Description : </Card.Text>
                    //         <Card.Text>{data.description}</Card.Text>
                    //         <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
                    //             <Form.Control
                    //                 type="number"
                    //                 value={quantity}
                    //                 min={1}
                    //                 style={{ width: "75px", marginRight: "0.5rem" }}
                    //                 onChange={(e) => setQuantity(e.target.value)}
                    //             />
                    //             <Button variant="success" onClick={(e) => handleAdd(e, data)}>Add to Cart</Button>
                    //         </div>
                    //     </Card.Body>
                    // </Card>
                    :
                    <InfinitySpin color="black" />
            }
        </>
    );
};

export default ProductDetail;