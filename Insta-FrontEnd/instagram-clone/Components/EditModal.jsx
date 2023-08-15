import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";

const EditModal = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { editProfile } = context;

  const profileDetail = JSON.parse(localStorage.getItem("user-detail"));
  // console.log(profileDetail);
  const [text, setText] = useState(profileDetail.username);
  const [pic, setPic] = useState(profileDetail.profilepic);

  const handleUpdate = (e) => {
    e.preventDefault();
    editProfile(profileDetail._id, text, pic);
    navigate("/home");
  };

  const handleCancel = () => {
    navigate("/home");
  };

  return (
    <div className="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-40"></div>
      </div>
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="bg-white p-6 sm:p-10">
          <div className="flex flex-col items-center justify-center m-10">
            <img
              src={pic}
              alt="Modal Photo"
              className="w-32 h-32 m-8 rounded-full object-cover"
            />

            <input
              type="file"
              name="myImage"
              className=" m-10 ml-32"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setPic(URL.createObjectURL(event.target.files[0]));
              }}
            />
            <div>
              <label htmlFor="username" className="text-xl mb-4">
                Username{" "}
              </label>
              <input
                type="text"
                className="bg-gray-200 p-2 rounded-lg w-full"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-b-lg">
          <div className="flex items-center">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={handleCancel}
            >
              Clear
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 ml-auto"
              onClick={handleUpdate}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
