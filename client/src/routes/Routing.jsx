import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/Dashboard";
import ControlPanel from "../pages/dash/ControlPanel";
import UserManagement from "../pages/dash/UserManagement";
import CreateUser from "../pages/dash/CreateUser";
import DkgAdmin from "../pages/dash/DkgAdmin";
import DkgControl from "../pages/dash/DkgControl";
import DkgDetails from "../pages/dash/DkgDetails";
import DkgCreate from "../pages/dash/DkgCreate";
import DndExample from "../pages/dash/DndExample";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dndexample" element={<DndExample />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/overview" element={<ControlPanel />} />
          <Route path="/dashboard/user" element={<UserManagement />} />
          <Route path="/dashboard/create-user" element={<CreateUser />} />
          <Route path="/dashboard/dkg-management" element={<DkgAdmin />} />
          <Route path="/dashboard/dkg-control" element={<DkgControl />} />
          <Route path="/dashboard/domain/group-details/:id" element={<DkgDetails />} />
          <Route path="/dashboard/create-dkg" element={<DkgCreate />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
