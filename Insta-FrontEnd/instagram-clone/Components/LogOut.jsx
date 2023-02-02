import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("user-detail");
    navigate("/login");
  }, []);
  return <>hello</>;
};

export default LogOut;
