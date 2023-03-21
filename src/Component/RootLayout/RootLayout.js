import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../ShearComponent/Footer/Footer";
import Navbar from "../../ShearComponent/Navbar/Navbar";

export default function RootLayout() {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
