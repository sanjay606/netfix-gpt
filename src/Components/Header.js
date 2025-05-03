import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";


const Header = () => {
  const [btnChange, setbtnChange] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const {logedInUser} = useContext(UserContext);


  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)

  return (
    <div className="flex justify-between bg-pink-100 shadow-xl">
      <div className="w-40">
        <img className="nav-logo" src={LOGO_URL} alt="" />
      </div>
      <div className=" flex items-center">
        <ul className="flex p-3 m-4">
          <li>OnlineMode {onlineStatus ? "💚" : "❤️"} </li>
          <li className="mx-3">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-3">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="mx-3 ">
            <Link to="/cart" className="font-bold ">🛒({cartItems.length}items )</Link>
          </li>

          <li className="mx-3 font-bold ">
          <Link to=" ">{logedInUser}</Link>
        </li>
          <button
            className="bg-green-300 px-3 rounded-lg "
            onClick={() => {
              setbtnChange(btnChange === "Login" ? "Logout" : "Login");
            }}
          >
            {btnChange}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
