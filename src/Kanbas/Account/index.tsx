import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Profile from "./Profile";
import Edit from "./Profile/Edit";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import "./index.css";
import { HiMiniBars3 } from "react-icons/hi2";
import UserTable from "../../Kanbas/Account/Users/table";

import AccountNavigation from "../Account/Navigation/index";
import RegisterScreen from "./Users/register";
import LoginScreen from "./Users/login";

function Account() {
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  const lastPath = location.pathname.split("/").pop();

  return (
    <div className="container-fluid">
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ marginRight: "3px" }}
      >
        <h3>
          <HiMiniBars3 /> Anh Hoang - {lastPath}
        </h3>
      </div>
      <hr />
      <AccountNavigation />
      <div className="d-none d-md-block">
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "75px" }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="login" />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/Admin/Users" element={<UserTable />} />
            <Route path="/Settings" element={<h2>Settings</h2>} />
            <Route path="/profile/edit" element={<Edit />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/Notifications" element={<h2>Notifications</h2>} />
            <Route path="/Privacy" element={<h2>Files</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Account;
