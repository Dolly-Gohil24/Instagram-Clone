// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import { Route, Routes } from "react-router-dom";
import EditModal from "../Components/EditModal";
import Home from "../Components/Home";
import LogIn from "../Components/LogIn";
import NavBar from "../Components/NavBar";
import SignUp from "../Components/SignUp";
import LogOut from "../Components/LogOut";
import UserState from "../Context/UserState";
import "./App.css";
import PicModal from "../Components/PicModal";
import CreatePost from "../Components/CreatePost";
import PostHome from "../Components/PostHome";
import Profile2 from "../Components/Profile2";

function App() {
  return (
    <>
      <UserState>
        <Routes>
          <Route exact path="/" element={<LogIn />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/login" element={<LogIn />}></Route>
          <Route exact path="/logout" element={<LogOut />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/editModal" element={<EditModal />}></Route>
          <Route exact path="/profile" element={<Profile2 />}></Route>
          <Route exact path="/picModal" element={<PicModal />}></Route>
          <Route exact path="/createPost" element={<CreatePost />}></Route>
          <Route exact path="/postHome" element={<PostHome />}></Route>
        </Routes>
      </UserState>
    </>
  );
}

export default App;
