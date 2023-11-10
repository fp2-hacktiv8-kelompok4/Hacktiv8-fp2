import React,{Fragment} from 'react'
import Navbar from '../components/Header/Navbar'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Footer from '../components/Footer/index'
import { useSelector, useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import CartItemCard from "../components/Cart/CartItemCard";
import {
subTotalPrice,
totalPrice,

} from "../Features/Cart/CartSelector";
import { cartState, removeFormCart } from "../../src/Features/Cart/CartSlice";
import Swal from 'sweetalert2';





const cart = ({ item }) => {
// eslint-disable-next-line react-hooks/rules-of-hooks
const state = useSelector((state) => state);
const { carts } = useSelector(cartState);
const subTotal = subTotalPrice(state);
const totalAmmount = totalPrice(state);

const dispatch = useDispatch();

const checkout = (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Checkout Success",
    icon: "success",
  });
};
return (
<Fragment>
  <Navbar />
  <Container>
      {!carts.length && (
      <div className="w-100 my-5 text-center text-danger">
        <h3>
          You don't have any product in carts.{" "}
          <Link to="/" className="text-dark text-decoration-none">
          {" "}
          Go for shoping{" "}
          </Link>
        </h3>
      </div>
      )}
      {carts.length > 0 &&
      carts.map((c) => {
      return (
      <div key={c.id}>
        <CartItemCard item={c} />
      </div>
      );
      })}
    {carts.length > 0 && (
    <div className="my-3">
      <Card>
        <Card.Body>
          <div className="flex flex-col justify-center items-center h-full px-14 py-7">
            {/*
            <!-- Purchase Resume --> */}
            <div className="flex flex-col w-full md:w-2/3 h-fit gap-4 p-4">
              <p className="text-blue-900 text-xl font-extrabold">Purchase Resume</p>
              <div className="flex flex-col p-4 gap-4 text-lg font-semibold shadow-md border rounded-sm">
                <div className="flex flex-row justify-between">
                  <p className="text-gray-600">Subtotal </p>
                  <p className="text-end font-bold">${subTotal}</p>
                </div>
                <hr className="bg-gray-200 h-0.5" />
                <div className="flex flex-row justify-between">
                  <p className="text-gray-600">Total</p>
                  <div>
                    <p className="text-end font-bold">${totalAmmount.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    className="transition-colors text-sm bg-white border border-gray-600 p-2 rounded-sm w-full text-black text-hover shadow-md">
                    <Link to="/">
                    Add More Products
                    </Link>
                  </button>
                  <button
                    className="transition-colors text-sm  bg-blue-600 hover:bg-blue  p-2 rounded-sm w-full text-white text-hover shadow-md" onClick={checkout}>
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
    )}

  </Container>
  <Footer />

</Fragment>
);
}

export default cart