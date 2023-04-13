import React from "react";
import "./Home.scss";
import Navbar from "../components/Navbar/Navbar";
import Contant from "../contents/Contant";
import FooterNavigate from "../components/FooterNavigate";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Contant />
      <br/><br/><br/><br/>
      <FooterNavigate/>
    </div>
  );
};

export default Home;
