import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import store from "./store/store";
import { Provider } from "react-redux";

function Kanbas() {
  return (
    <Provider store={store}>
      <div className="d-flex">
        <div>
          <KanbasNavigation />
        </div>
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
