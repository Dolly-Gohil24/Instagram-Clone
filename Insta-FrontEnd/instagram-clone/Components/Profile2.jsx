import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PicModal from "./PicModal";
import UserContext from "../Context/UserContext";
import { useEffect } from "react";

const Profile2 = () => {
  const profileDetail = JSON.parse(localStorage.getItem("user-detail"));
  const piclink =
    "https://cdn.vectorstock.com/i/preview-1x/13/04/male-profile-picture-vector-2041304.webp";
  const [changeImg, setChangeImg] = useState(false);
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { gallery, getUserWithToken } = context;

  const handleImg = () => {
    if (!changeImg) {
      setChangeImg(true);
    } else {
      setChangeImg(false);
    }
  };
  const handleEdit = () => {
    navigate("/editModal");
  };
  useEffect(() => {
    getUserWithToken();
  }, []);
  return (
    <>
      <div
        className="flex flex-col
       bg-black/90 w-10/12 ml-24 lg:ml-56 h-screen"
        // w-10/12 ml-24 lg:ml-56 // ml-16 lg:ml-56 2xl:justify-center 2xl:items-center  w-10/12 2xl:w-8/12 2xl:ml-96"
      >
        <div className="flex mt-10 w-full h-30 pb-16">
          <div className="flex w-4/5 justify-center items-center ">
            <img
              className=" w-full cursor-pointer rounded-full object-cover"
              src={
                profileDetail.profilepic ? profileDetail.profilepic : piclink
              }
              alt="Woman's Face"
              onClick={handleImg}
            />
            {changeImg && <PicModal handleImg={handleImg} />}
          </div>

          <div className="flex flex-row mt-10  w-full">
            <div className="flex flex-col ">
              <div className="inline-block flex-wrap">
                <span className="mx-16 lg:mx-0 inline-block text-2xl text-white ">
                  {profileDetail.username}
                </span>{" "}
                <span className="mx-0 lg:mx-14 px-0 ">
                  <div
                    className="inline-block px-4 lg:px-9 mx-4 cursor-pointer lg:mx-0 mt-9 lg:mt-0 text-2xl rounded-lg bg-white"
                    onClick={handleEdit}
                  >
                    Edit Profile
                  </div>
                </span>
              </div>

              <div className=" hidden lg:block mt-7 justify-evenly">
                <span className=" inline-block text-xl text-white ">
                  {" "}
                  {gallery.length} Posts
                </span>{" "}
                <span className=" inline-block text-xl text-white ml-16 ">
                  1M Follower
                </span>{" "}
                <span className=" inline-block text-xl text-white  ml-16 ">
                  100 Following
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-white w-9/12 ml-8 lg:ml-36" />
        <div className="flex w-full h-full">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="grid grid-cols-3 gap-4">
                {gallery.map((pics) => {
                  return (
                    <img
                      key={pics._id}
                      src={pics.photo}
                      className="h-40 relative lg:h-full w-full object-cover"
                      alt={pics.caption}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile2;
