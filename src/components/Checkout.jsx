import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Checkout() {
  const cartProducts = useSelector((state) => state);

  let totalPrice = 0;

  cartProducts.map((item) => (totalPrice += item.price));

  return (
    <div className=" bg-blue-200 w-full h-screen">
      <div className="md:w-3/6 mx-auto p-8 sm:w-full">
        <div className="mb-8 italic text-2xl text-gray-700 text-center font-bold">
          Checkout Now
        </div>
        <form className="flex flex-col space-y-5">
          <input
            className="p-2 rounded-xl"
            type="text"
            name="firstName"
            placeholder="First Name"
          />
          <input
            className="p-2  rounded-xl"
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
          <input
            className="p-2  rounded-xl"
            type="number"
            name="phone"
            placeholder="Phone"
          />
          <input
            className="p-2  rounded-xl"
            type="email"
            name="email"
            placeholder="Email"
          />
          <textarea
            className="p-2  rounded-xl"
            name="Address"
            placeholder="Address"
          />
          <div className="flex py-3 px-6 bg-gray-50 rounded-xl">
            <h4 className="font-semibold italic">Total Items: </h4>
            <h6 className="flex-grow text-right">{cartProducts.length}</h6>
          </div>
          <div className="flex py-3 px-6 bg-gray-50 rounded-xl">
            <h4 className="font-semibold italic ">Total Cost: </h4>
            <h6 className="flex-grow text-right">{totalPrice.toFixed(2)}$</h6>
          </div>
          <div className="justify-between mx-4 grid sm:grid-col-1 lg:grid-cols-2 lg:space-y-0 space-y-3">
            <Link to="/success">
              <button
                className="bg-blue-500 px-10 py-3 rounded-xl hover:-translate-y-1 transform transition focus:ring focus:ring-offset-2"
                type="submit"
              >
                Confirm Order
              </button>
            </Link>
            <Link to="/">
              <button className="bg-red-500 px-16 py-3 rounded-xl hover:-translate-y-1 transform transition focus:ring focus:ring-offset-2">
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
