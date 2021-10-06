import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { CartItem } from "./CartItem";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/action/cartAction";

function Navbar() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state);

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  let totalPrice = 0;

  cartProducts.map((item) => (totalPrice += item.price));

  const uniqueIds = useMemo(
    () => [...new Set(cartProducts.map((item) => item.id))],
    [cartProducts]
  );

  const cartCount = useMemo(() => {
    let count = {};
    cartProducts.map((item) =>
      count[item.id] ? count[item.id]++ : (count[item.id] = 1)
    );
    return count;
  }, [cartProducts]);

  const navbarComponent =
    "bg-blue-500 rounded-2xl px-4 py-2 pb-5 font-semibold text-lg text-center hover:bg-blue-300 hover:-translate-y-1 transform transition";
  const menubarComponent =
    "bg-blue-500 w-48 rounded-2xl px-10 py-3 font-semibold text-lg text-center hover:bg-blue-400 hover:-translate-y-1 transform transition mr-auto";

  return (
    <div>
      <nav>
        <div className=" bg-blue-800 flex justify-between h-20">
          <div className="md:hidden">
            <button
              onClick={() => setMenuIsOpen(!menuIsOpen)}
              className=" ml-10 mt-2"
            >
              <i className="fa fa-bars pt-4 text-4xl "></i>
            </button>
          </div>

          <div className="md:w-20 md:h-20 flex md:ml-10 ml-0 w-44 h-16">
            <img
              className="rounded-full"
              src="https://cdn.pixabay.com/photo/2020/06/30/10/23/icon-5355893_960_720.png"
              alt="logo"
            />
            <p className="text-gray-400 italic pt-8 text-2xl">ShopNOW</p>
          </div>

          <div className=" md:flex space-x-5 px-5 py-5 hidden ">
            <Link to="/" className={navbarComponent}>
              <div> products</div>
            </Link>
            <Link to="/about" className={navbarComponent}>
              <div> about </div>
            </Link>
            <Link to="/contact" className={navbarComponent}>
              <div> contact</div>
            </Link>
          </div>

          <div className="flex flex-row mx-9">
            <button
              onClick={() => setModalIsOpen(true)}
              className="text-center"
            >
              <i className="fa fa-shopping-cart pt-4 text-4xl hover:text-7xl hover:-translate-y-1 transform transition"></i>
            </button>
            <p className="mx-1 pt-4 text-3xl text-gray-300">
              {cartProducts.length}
            </p>
          </div>
        </div>

        {menuIsOpen ? (
          <div className="flex px-5 py-5 items-baseline flex-col bg-blue-300 w-full space-y-2">
            <Link to="/" className={menubarComponent}>
              <div> products</div>
            </Link>
            <Link to="/about" className={menubarComponent}>
              <div> about </div>
            </Link>
            <Link to="/contact" className={menubarComponent}>
              <div> contact</div>
            </Link>
          </div>
        ) : (
          ""
        )}
      </nav>

      <div className="flex">
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          className="md:w-4/12 h-screen bg-blue-200 ml-auto "
        >
          <header className=" bg-blue-400 flex justify- justify-between h-16">
            <div className="text-gray-500 italic pt-3 text-4xl mx-3">Cart</div>
            <button onClick={() => setModalIsOpen(false)}>
              <i className="fa fa-close pt-4 text-4xl text-gray-500 mx-7 hover:-translate-y-1 transform transition focus:ring focus:ring-offset-2"></i>
            </button>
          </header>
          <p className="text-center font-semibold text-gray-600 mt-4 mb-5 text-2xl">
            You have
            <span className="font-bold text-gray-900">
              {" "}
              {cartProducts.length}{" "}
            </span>
            items in shopping cart
          </p>
          <div>
            <Scrollbars style={{ width: 500, height: 500 }}>
              {uniqueIds.map((id) => (
                <CartItem key={id} id={id} count={cartCount[id]} />
              ))}
            </Scrollbars>
            <div className="text-center font-bold text-2xl text-gray-600 mt-5 mb-5">
              <p>
                Total Cost = <span>{totalPrice.toFixed(2)}$</span>
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-around">
            <Link to={totalPrice > 0 ? "/checkout" : "/"}>
              <button
                onClick={() => {
                  setModalIsOpen(false);
                }}
                className="bg-blue-500 text-gray-50 w-32 pt-3 pb-3 rounded-2xl mb-5 hover:-translate-y-1 transform transition focus:ring focus:ring-offset-2"
              >
                Checkout
              </button>
            </Link>
            <button
              className="bg-red-500 text-gray-50 w-32 pt-3 pb-3 rounded-2xl mb-5 hover:-translate-y-1 transform transition focus:ring focus:ring-offset-2"
              onClick={() => dispatch(clearCart())}
            >
              Clear cart
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Navbar;
