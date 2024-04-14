import { useEffect, useState, useContext } from "react";
import Logo from "../assets/img/Logo.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import {useSelector} from 'react-redux';
import dummyLogo from "../mocks/dummyLogo";

// Title component for display logo
const Title = () => (
  <a href="/">
    {/* <img data-testid="logo" className="h-24 p-2" src={dummyLogo} alt="Food Villa Logo" /> */}
    <img className="h-24 p-2" src={Logo} alt="Food Villa Logo" />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { user } = useContext(UserContext);

  const cartItems = useSelector(store => store.cart.items)

  return (
    <>
      <div className="flex justify-between bg-pink-200 shadow-lg">
        <Title />
        <div className="nav-items">
          <ul className="flex py-10">
            <Link to="/" className="px-4">
              Home
            </Link>
            <Link to="/about" className="px-4 ">
              About
            </Link>
            <Link to="/contact" className="px-4 ">
              Contact
            </Link>
            <Link to="/mart" className="px-4 ">
              Mart
            </Link>
            <Link to="/cart" className="px-4 ">
              Cart
            </Link>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="flex items-center space-x-10"></div>
          <span className="p-10 font-bold">{user.name}</span>
          {isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn(false)}
              className="py-1 m-7 px-5 shadow-md bg-blue-400 rounded-md"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button
                onClick={() => setIsLoggedIn(true)}
                className="py-1 m-7 px-5 shadow-md bg-blue-400 rounded-md"
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
