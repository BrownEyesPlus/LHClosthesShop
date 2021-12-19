import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">LH SHOP ADMIN</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://scontent.fhan5-6.fna.fbcdn.net/v/t1.6435-9/186918453_528666221621977_769949589952212923_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=E7gOsFfb6RAAX-x6I6A&_nc_ht=scontent.fhan5-6.fna&oh=00_AT-SK6oGXZi3PScs985Z55MmTKLuxT3sdjuiGucaG5YxUA&oe=61E2250B" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
