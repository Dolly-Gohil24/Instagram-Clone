import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
// import axios from "axios";

const LogIn = () => {
  // const navigate = useNavigate();
  const context = useContext(UserContext);
  const { getLogInUser } = context;
  const [login, setLogin] = useState({ username: "", password: "" });

  const handleInput = (e) => {
    e.preventDefault();
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  const loginbutton = (e) => {
    e.preventDefault();
    getLogInUser(login.username, login.password);
  };
  // const loginbutton = () => {
  //   axios
  //     .post(
  //       "http://localhost:5000/api/user/login",
  //       {
  //         username: login.username,
  //         password: login.password,
  //       },
  //       config
  //     )
  //     .then((res) => {
  //       localStorage.setItem("auth-token", res.data.authToken);
  //       localStorage.setItem(
  //         "user-detail",
  //         JSON.stringify(res.data.userDetail)
  //       );
  //       navigate("/home");
  //     });
  // };
  return (
    <>
      <section className="h-screen flex justify-center items-center gradient-form  md:h-screen  bg-white">
        <div className="container flex justify-center items-center flex-wrap py-12 px-6 h-screen  bg-white">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-11/12">
              <div className="block bg-white rounded-lg ">
                <div className="lg:flex lg:flex-wrap g-0 justify-center  ">
                  <div className="lg:w-6/12 px-4 md:px-0 ">
                    <div className="md:p-12 md:mx-6 shadow-2xl rounded-2xl">
                      <div className="flex flex-row flex-wrap justify-center my-6">
                        <img
                          className="flex w-20"
                          src="../src/assets/icon.png"
                          alt="logo"
                        />
                        <h4 className="flex text-xl font-cursive font-semibold mt-5 px-4 ">
                          InstaGram
                        </h4>
                      </div>
                      <form className="mx-4 lg:mx-0">
                        <p className="mb-4 text-center font-bold">
                          Please login to your account
                        </p>
                        <div className="mb-4">
                          <input
                            type="text"
                            name="username"
                            value={login.username}
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Username"
                            onChange={handleInput}
                          />
                        </div>
                        <div className="mb-4 ">
                          <input
                            type="password"
                            value={login.password}
                            name="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                            id="exampleFormControlInput2"
                            placeholder="Password"
                            onChange={handleInput}
                          />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="inline-block  px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="button"
                            onClick={loginbutton}
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            style={{
                              background:
                                "linear-gradient(to right,  #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                          >
                            Log in
                          </button>
                          <a
                            className="text-gray-500 hover:text-rose-700 touch-pinch-zoom"
                            href="#!"
                          >
                            Forgot password?
                          </a>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 ">Don't have an account?</p>
                          <button
                            type="button"
                            className="inline-block px-6 py-2 ml-6 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-red-600 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            <Link to="/signup"> Sign Up</Link>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="lg:w-4/12  flex items-center my-6  lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                    style={{
                      background:
                        "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                    }}
                  >
                    <div className="hidden lg:block text-white px-4 py-6 md:p-12 md:mx-6">
                      <h4 className="text-xl font-semibold mb-6">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogIn;
