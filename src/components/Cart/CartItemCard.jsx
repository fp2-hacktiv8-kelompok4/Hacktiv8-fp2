import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
increaseQuantity,
decreaseQuantity,
removeFormCart,
} from "../../Features/Cart/CartSlice";

const CartItemCard = ({ item }) => {
//set the product info to state
const [product, setProduct] = useState({});

//import redux dispatch
const dispatch = useDispatch();

//increase quantity
const increaseItemQuantity = (e) => {
e.preventDefault();
dispatch(increaseQuantity(item));
};

//decrease the item quantity
const decreaseItemQunaity = (e) => {
e.preventDefault();
dispatch(decreaseQuantity(item));
};

//remove item form cart
const removeItem = (e) => {
e.preventDefault();
dispatch(removeFormCart(item));
};

useEffect(() => {
axios.get(`https://fakestoreapi.com/products/${item.id}`).then((res) => {
setProduct({ ...res.data, quantity: item.quantity });
});
}, [item]);
let content = "";


if (product) {
return (content = (
<Card className="my-2">
  {/*
  <!-- My Cart --> */}
  <div className="w-full flex flex-col h-fit gap-4 p-4 ">
    <p className="text-blue-900 text-xl font-extrabold">My cart</p>

    {/*
    <!-- Product --> */}
    <div className="flex flex-col p-4 text-lg font-semibold shadow-md border rounded-sm">
      <div className="flex flex-row justify-between ">
        {/*
        <!-- Product Information --> */}
        <Link to={`/product/${product.id}`}> <div className="flex flex-row gap-6 items-center">
        <div className="w-28 h-28">
          <img className="w-full h-full" src={product.image} alt="product" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-lg text-gray-800 font-semibold">{product.title}</p>
        </div>
      </div>
      </Link>
      {/*
      <!-- Price Information --> */}
      <div className="flex pe-5 items-center">

      </div>
      {/*
      <!-- Remove Product Icon --> */}
      <div className=" flex flex-col justify-center items-center pe-5 ">
        <span className="fs-5 py-2">
          $
          {product.price
          ? (product.price * product.quantity).toFixed(2)
          : ""}
        </span>

        <button className=" text-red-500" onClick={removeItem}>
          Remove
        </button>
      </div>
    </div>
    {/*
    <!-- Product Quantity --> */}
    <div className="flex flex-row self-center gap-1">
      <button className="btn btn-sm btn-dark fs-6 me-3 px-1 text-center" onClick={decreaseItemQunaity}>
        <FaMinus />
      </button>
      <span className="relative fs-4 justify-center items-center">{product.quantity}</span>
      <button className="btn btn-sm btn-dark fs-6 ms-3 px-1 text-center" onClick={increaseItemQuantity}>
        <FaPlus />
      </button>
    </div>
  </div>
  </div>
</Card>
));
}
return { content };
}

export default CartItemCard;