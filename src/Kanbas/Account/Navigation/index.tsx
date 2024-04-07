import { Link, useLocation } from "react-router-dom";
import React from "react";
import "./index.css";

function AccountNavigation() {
  const links = ["Profile", "Settings", "Notifications", "Files"];
  const { pathname } = useLocation();
  return (
    <ul className="wd-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}

export default AccountNavigation;
