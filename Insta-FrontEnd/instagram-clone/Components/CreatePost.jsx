import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";

const CreatePost = () => {
  const navigate = useNavigate();
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");

  const [pic, setPic] = useState(
    "https://www.oberlo.com/media/1603954288-img0332-1.png?w=1824&fit=max"
  );
  const context = useContext(UserContext);
  const { createPost } = context;
  const [url, setUrl] = useState("");
  const [err, setErr] = useState("");

  // posting image to cloudinary
  const postDetails = async () => {
    console.log(caption, image);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "instaGram");
    data.append("cloud_name", "dollygohil");
    await fetch("https://api.cloudinary.com/v1_1/dollygohil/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => setUrl(data.url))
      .catch((err) => console.log(err));
    console.log(url);
  };

  useEffect(() => {
    if (url) {
      console.log("gello");
      createPost(caption, url);
      navigate("/home");
    }
  }, [url]);
  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("urll1", url);
    if (image && caption) {
      postDetails();
    } else {
      setErr("Please Add Caption or Pic ");
    }
  };

  const handleCancel = () => {
    navigate("/home");
  };
  return (
    <>
      <div
        id="popup-modal"
        tabIndex="-1"
        className="justify-center items-center flex overflow-x-hidden  bg-black bg-opacity-50 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="flex flex-row border-0 rounded-lg shadow-lg relative  w-full bg-white outline-none focus:outline-none">
            <div className="flex flex-col items-center">
              <img
                src={pic}
                alt="Modal Photo"
                className="w-96 h-96 relative m-8 object-cover"
              />

              <input
                type="file"
                name="myImage"
                accept="image/*"
                className=" m-10 ml-32"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setImage(event.target.files[0]);
                  setPic(URL.createObjectURL(event.target.files[0]));
                }}
              />
            </div>

            <div className="flex flex-col">
              <textarea
                type="text"
                className="bg-gray-200 p-4 rounded-lg m-9 text-black text-sm"
                value={caption}
                // value={text}
                required
                onChange={(e) => setCaption(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                placeholder="Enter Caption....."
              />
              <span className="text-red-700">{err}</span>

              <div className="flex flex-row">
                <button
                  data-modal-hide="popup-modal"
                  className="bg-none cursor-pointer border-none mx-auto bottom-0 mt-6 text-lg text-red-600 font-semibold"
                  onClick={handleCancel}
                >
                  Clear
                </button>
                <button
                  className=" bg-none cursor-pointer border-none mt-6 mx-auto text-lg text-blue-700 font-semibold"
                  onClick={handleUpdate}
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default CreatePost;
