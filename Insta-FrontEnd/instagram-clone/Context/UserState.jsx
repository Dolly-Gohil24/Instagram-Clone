import axios from "axios";
import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import Profile from "../Components/Profile";
import { useNavigate } from "react-router-dom";

const UserState = (props) => {
  const navigate = useNavigate();
  const [loguser, setLoguser] = useState([]);
  const [gallery, setGallery] = useState([]);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const editconfig = {
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("auth-token"),
    },
  };

  const getLogInUser = (username, password) => {
    axios
      .post(
        "http://localhost:5000/api/user/login",
        {
          username: username,
          password: password,
        },
        config
      )
      .then((res) => {
        // console.log(res);

        if (res.data.success) {
          localStorage.setItem("auth-token", res.data.authToken);
          localStorage.setItem(
            "user-detail",
            JSON.stringify(res.data.userDetail)
          );
          setLoguser(res.data.userDetail);
          navigate("/home");
        } else {
          console.log("test");
        }
      });
  };

  const editProfile = async (id, username, profilepic) => {
    await axios
      .put(
        `http://localhost:5000/api/user/editDetail/${
          JSON.parse(localStorage.getItem("user-detail"))._id
        }`,
        {
          username: username,
          profilepic: profilepic,
        },
        editconfig
      )
      .then((res) => {
        console.log("updated Details", res.data.updatedDetail);
        let updateUser = res.data.updatedDetail;
        for (let index = 0; index < updateUser.length; index++) {
          const element = updateUser[index];
          if (element._id === id) {
            updateUser[index].username = username;
            updateUser[index].profilepic = profilepic;

            break;
          }
        }
        localStorage.setItem(
          "user-detail",
          JSON.stringify(res.data.updatedDetail)
        );
        setLoguser(res.data.updatedDetail);
        window.location.reload();
      });
  };

  const createPost = async (caption, photo) => {
    await axios
      .post(
        "http://localhost:5000/api/post/createPost",
        {
          caption: caption,
          photo: photo,
          postedBy: localStorage.getItem("user-detail")._id,
        },
        editconfig
      )
      .then((res) => {
        console.log(res);
      });
  };

  const getUserWithToken = () => {
    axios
      .get(
        `http://localhost:5000/api/user/getuser/${
          JSON.parse(localStorage.getItem("user-detail"))._id
        }`,
        editconfig
      )
      .then((res) => {
        setGallery(res.data.post);
      });
  };

  // const uploadPic = (id, profilepic) => {
  //   axios
  //     .put(
  //       `http://localhost:5000/api/user/uploadPic/${
  //         JSON.parse(localStorage.getItem("user-detail"))._id
  //       }`,
  //       {
  //         profilepic: profilepic,
  //       },
  //       editconfig
  //     )
  //     .then((res) => {
  //       console.log("updated Details", res.data.updatedDetail);

  //       localStorage.setItem(
  //         "user-detail",
  //         JSON.stringify(res.data.updatedDetail)
  //       );
  //       setLoguser(res.data.updatedDetail);
  //       window.location.reload();
  //     });
  // };
  return (
    <div>
      <UserContext.Provider
        value={{
          loguser,
          getLogInUser,
          editProfile,
          createPost,
          getUserWithToken,
          gallery,
        }}
      >
        {props.children}
      </UserContext.Provider>
    </div>
  );
};

export default UserState;
