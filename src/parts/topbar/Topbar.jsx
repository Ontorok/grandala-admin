import { Language, NotificationsNone, Settings } from '@mui/icons-material';
import React from 'react';
import './topbar.css';

const Topbar = function () {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">Digi Shop</div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topbarIconBadge"> 2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/5769744/pexels-photo-5769744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
            className="topbarAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
