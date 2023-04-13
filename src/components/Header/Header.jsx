import React from "react";
import "./Header.scss";
import data from "../../data";
import { Box } from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

const Header = () => {
  return (
    <div className="header" style={{ border: '1px solid red' }}>
      <div className="stories">
        <div className="img" style={{ height: '50px', width: '50px' }}>
          <AccountCircleRoundedIcon style={{ height: '100%', width: '100%', color: 'grey' }} />
        </div>
        <div className="name">
          <span >
            Story
          </span>

        </div>

      </div>

      {data.map((item) => (
        <div className="stories" key={item.id} >
          <Box boxShadow={3} className="img" >
            <img src={item.profile} alt={item.id} />
          </Box>
          <div className="name">
            <span>{item.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Header;
