import React from "react";
import Profile2 from "./Profile2";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <>
      <div className=" w-full h-full relative">
        <NavBar />
        {/* <Profile /> */}
        <Profile2 />
      </div>
    </>
  );
};

export default Home;
