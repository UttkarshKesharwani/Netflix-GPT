import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidLoginData } from "../Utils/validate";
import { checkValidSignUpData } from "../Utils/validate";

const Login = () => {
  const [isSignin, SetIsSignin] = useState(true);
  const [errMessage, SetErrMessage] = useState(null);

  const firstName = useRef(null);
  const lastName = useRef(null);
  const number = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const validatingData = () => {
    // console.log(email.current.value, password.current.value);

    const message = isSignin
      ? checkValidLoginData(email.current.value, password.current.value)
      : checkValidSignUpData(
          firstName.current.value,
          lastName.current.value,
          number.current.value,
          email.current.value,
          password.current.value
        );
    SetErrMessage(message);

    // const message = checkValidSignUpData(
    //   firstName.current.value,
    //   lastName.current.value,
    //   number.current.value,
    //   email.current.value,
    //   password.current.value
    // );

    // const message = checkValidLoginData(
    //   email.current.value,
    //   password.current.value
    // );

    // console.log(email.current.value);
    // console.log(password.current.value);
    // console.log(number.current.value);
    // console.log(firstName.current.value);
    // console.log(lastName.current.value);

    // console.log(message);

    // if (isSignin) {
    //   const message = checkValidLoginData(
    //     email.current.value,
    //     password.current.value
    //   );
    //   SetErrMessage(message);
    //   console.log(password.current.value);
    // } else {
    //   const message = checkValidSignUpData(
    //     firstName.current.value,
    //     lastName.current.value,
    //     number.current.value,
    //     email.current.value,
    //     password.current.value
    //   );
    //   SetErrMessage(message);
    // }
  };

  const handleSigninToggle = () => {
    SetIsSignin(!isSignin);
  };

  return (
    <div>
      <Header />
      <div className=" bg-gradient-to-b from-slate-950 absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
          className=" bg-gradient-to-b from-black "
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black  bg-opacity-70 w-4/12 absolute mx-auto top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] "
      >
        <div className="px-16 py-8">
          <h1 className="font-bold mb-7 text-white text-3xl">
            {isSignin ? "Sign In" : "Sign Up"}
          </h1>{" "}
          {!isSignin && (
            <div>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border-white border w-full mb-4 p-3 rounded-sm  bg-gray-500"
                  ref={firstName}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border-white border w-full mb-4 p-3 rounded-sm  bg-gray-500"
                  ref={lastName}
                />
              </div>
              <input
                type="text"
                ref={number}
                placeholder="Phone Number"
                className="border-white border w-full mb-4 p-3 rounded-sm  bg-gray-500"
              />
            </div>
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email Address"
            className="border-white border w-full mb-4 p-3 rounded-sm  bg-gray-500"
          />
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="border-white border w-full mb-4 p-3 rounded-sm bg-gray-500"
          />
          <p className="font-bold text-red-600 mb-4">{errMessage}</p>
          <button
            className="w-full bg-red-600 p-2 rounded-sm mb-4 text-white"
            onClick={validatingData}
          >
            {isSignin ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white text-center mb-10">Forget Password?</p>
          <input type="checkbox" className="p-20 mr-3 " />
          <span htmlFor="" className="text-white  mb-10 inline-block">
            Remeber me
          </span>
          <div className="text-white">
            <span>{isSignin ? "New to Netflix?" : "Already a Member?"} </span>
            <span className="cursor-pointer" onClick={handleSigninToggle}>
              {isSignin ? "Sign up now" : "Sign in now"}
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
