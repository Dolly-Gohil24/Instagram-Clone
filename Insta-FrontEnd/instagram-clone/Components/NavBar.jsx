import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="flex h-full shadow-md fixed px-1 border-r border-white/60 bg-black/5 justify-center  w-16  lg:w-56 2xl:w-96">
        <div className="flex flex-col ">
          <ul className="px-1 space-y-2">
            <li>
              <a href="#" className="flex items-center mt-16 pt-1  text-white ">
                <img
                  src="../src/assets/icon.png"
                  className="text-white w-8 h-8 "
                  alt="Flowbite Logo"
                />
                <span className="hidden lg:block pl-4">Instagram</span>
              </a>
            </li>
            <li>
              <Link
                className="flex items-center mt-16 pt-1 text-lg overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-blue-600  transition duration-300 ease-in-out"
                to="/postHome"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary"
              >
                <svg
                  // style={{color white}}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-house-fill text-white"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                    fill="white"
                  ></path>{" "}
                  <path
                    fillRule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                    fill="white"
                  ></path>{" "}
                </svg>
                <span className="hidden  lg:block pl-4">Home</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center mt-8 pt-1 text-lg overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-blue-600  transition duration-300 ease-in-out"
                to="/home"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="currentColor"
                  className="bi bi-person-fill text-white text-xl w-5 h-5 mr-1"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                    fill="white"
                  ></path>{" "}
                </svg>
                <span className="hidden  lg:block pl-4">Profile</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center mt-8 pt-1 text-lg overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-purple-800"
                to="/logout"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-log-out text-white text-xl w-5 h-5 mr-1"
                >
                  <path
                    d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                    fill="currentColor"
                  ></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>

                <span className="hidden  lg:block pr-3.5 pl-4">Log Out</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center mt-8 pt-1 text-lg overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-white"
                to="/createPost"
                // href="#"
                // onClick={handleImg}
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary"
                data-modal-target="popup-modal"
                data-modal-toggle="popup-modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-grid-3x3-gap-fill text-white text-xl w-5 h-5 mr-1 "
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"
                    fill="white"
                  ></path>{" "}
                </svg>

                <span className="hidden  lg:block pr-3.5 pl-4">
                  Create Post
                </span>
                {/* <CreatePost /> */}
                {/* {changeImg && <CreatePost handleImg={handleImg} />} */}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
