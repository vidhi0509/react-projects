import React, { useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="bg-logo" />
      </div>
      <form className="p-12 absolute bg-gradient-to-br from-black w-4/12 my-36 mx-auto right-0 left-0 text-white ">
        <h1 className="font-bold py-4 m-2 text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && 
            (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full rounded-md bg-gray-700"
            />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-md bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-md bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm? "New to Netflix? Sign up now.": "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
