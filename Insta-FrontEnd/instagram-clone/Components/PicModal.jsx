import React, { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import UserContext from "../Context/UserContext";

const PicModal = ({ handleImg }) => {
  const hiddenFileInput = useRef(false);

  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const context = useContext(UserContext);
  const { editProfile } = context;

  const profileDetail = JSON.parse(localStorage.getItem("user-detail"));
  // posting image to cloudinary
  const postDetails = async () => {
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
  const postPic = () => {
    editProfile(profileDetail._id, "", url);

    handleImg();
  };

  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  useEffect(() => {
    if (image) {
      postDetails();
    }
  }, [image]);
  useEffect(() => {
    if (url) {
      postPic();
    }
  }, [url]);
  return (
    <>
      <div className="fixed bg-gray-600 bg-opacity-50 insert-0 z-50 bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
        {/* <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div> */}
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="bg-black/90 p-6 sm:p-10">
            <div className="flex flex-col items-center text-white justify-center text-2xl">
              <h2>Change Profile Photo</h2>
            </div>
            <div className="flex flex-col items-center border-t  border-white justify-center m-6">
              <button
                className="bg-none cursor-pointer border-none text-lg mt-6 font-semibold"
                style={{ color: "#1EA1F7" }}
                onClick={handleClick}
              >
                Upload Photo
              </button>
              <input
                type="file"
                ref={hiddenFileInput}
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
              <button
                className="bg-none cursor-pointer border-none mt-6 text-lg text-red-600 font-semibold"
                onClick={handleImg}
              >
                Clear
              </button>
              {/* <input
                type="file"
                name="myImage"
                className=" m-10 ml-32"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  //   setPic(URL.createObjectURL(event.target.files[0]));
                }}
              /> */}
            </div>
          </div>

          {/* <div className="bg-gray-50 p-6 rounded-b-lg">
            <div className="flex items-center">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={handleImg}
              >
                Clear
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 ml-auto"
                // onClick={handleUpdate}
              >
                Save
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PicModal;
