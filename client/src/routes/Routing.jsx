import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/Dashboard";
import ControlPanel from "../pages/dash/ControlPanel";
import UserManagement from "../pages/dash/UserManagement";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/overview" element={<ControlPanel />} />
          <Route path="/dashboard/user" element={<UserManagement />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
