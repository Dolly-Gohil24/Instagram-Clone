import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const nagivate = useNavigate();
  const [signup, setsignup] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
  });
  const handleInput = (e) => {
    e.preventDefault();
    setsignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupbutton = () => {
    axios
      .post("http://localhost:5000/api/user/createUser", {
        username: signup.username,
        password: signup.password,
        name: signup.name,
        email: signup.email,
      })
      .then((res) => {
        console.log(res);
        nagivate("/login");
      });
  };

  return (
    <>
      <div className="flex flex-wrap g-0 justify-center h-screen lg:h-full items-center bg-white">
        <div className="lg:w-4/12 px-16 md:px-0 ">
          <div className="md:p-12 md:mx-6 shadow-2xl rounded-2xl">
            <div className="flex flex-row justify-center my-6">
              <img
                className="flex w-20"
                src="../src/assets/icon.png"
                alt="logo"
              />
              <h4 className="flex text-xl font-cursive font-semibold mt-5 px-4 ">
                InstaGram
              </h4>
            </div>
            <form>
              <p className="mb-4 text-center font-bold">
                Please login to your account
              </p>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                  id="exampleFormControlInput"
                  placeholder="Email Id"
                  onChange={handleInput}
                  name="email"
                  value={signup.email}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Full Name"
                  onChange={handleInput}
                  name="name"
                  value={signup.name}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder="Username"
                  onChange={handleInput}
                  name="username"
                  value={signup.username}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                  id="exampleFormControlInput4"
                  placeholder="Password"
                  onChange={handleInput}
                  autoComplete="current-password"
                  name="password"
                  value={signup.password}
                />
              </div>
              <div className="text-center pt-1 mb-12 pb-1">
                <button
                  className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                  type="button"
                  onClick={signupbutton}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  style={{
                    background:
                      "linear-gradient(to right,  #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  Sign Up
                </button>
                <a
                  className="text-gray-500 hover:text-rose-700 touch-pinch-zoom"
                  href="#!"
                >
                  Forgot password?
                </a>
              </div>
              <div className="flex items-center justify-between pb-6">
                <p className="mb-0 ">Have an account?</p>
                <button
                  type="button"
                  className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-red-600 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <Link to="/login"> Log in </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
