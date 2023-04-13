import React from "react";
import "./Contant.scss";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Posts from "../components/Posts/Posts";

const Contant = () => {
  return (
    <div className="content" >
      <div className="left" >
        <Header />
        <Posts />
      </div>
      <div className="right">
        <Sidebar />
      </div>
    </div>
  );
};

export default Contant;
