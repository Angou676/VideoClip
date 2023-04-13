import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "../../assets/images/logo.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Profile from "../../assets/images/profile.jpg";
import ProfileCard from "../profileCard/ProfileCard";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar" >
      <div className="left" style={{ fontSize: '22px', fontWeight: 800 }}>
        Go Reels
      </div>
      <div className="center">
        <input type="text" placeholder="Search" />
      </div>
      <div className="right">

        <AddCircleOutlineRoundedIcon />
        <FavoriteBorderIcon />
      </div>
      {/* {open && <ProfileCard />} */}
    </div>
  );
};

export default Navbar;
