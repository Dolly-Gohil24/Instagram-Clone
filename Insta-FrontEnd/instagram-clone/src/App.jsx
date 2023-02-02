// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import { Route, Routes } from "react-router-dom";
import EditModal from "../Components/EditModal";
import Home from "../Components/Home";
import LogIn from "../Components/LogIn";
import NavBar from "../Components/NavBar";
import Profile from "../Components/Profile";
import SignUp from "../Components/SignUp";
import LogOut from "../Components/LogOut";
import UserState from "../Context/UserState";
import "./App.css";
import PicModal from "../Components/PicModal";
import CreatePost from "../Components/CreatePost";

function App() {
  // const [count, setCount] = useState(0);

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
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/picModal" element={<PicModal />}></Route>
          <Route exact path="/createPost" element={<CreatePost />}></Route>
        </Routes>
      </UserState>
    </>
  );
}

export default App;
