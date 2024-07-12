import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
  <div className="main">
    <Sidebar/>
    <Header/>
    <Outlet/>
  </div>
  );
};

export default Layout;
