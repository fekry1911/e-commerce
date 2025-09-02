import React from "react";
import NavBarComponent from "../SharedComponent/NavBarComponents";
import { Outlet } from "react-router-dom";
import Footer from "../SharedComponent/FooterComponents";

export default function MainLayoutComponent() {
  return (
    <div>
      <NavBarComponent />
      <Outlet />
      <Footer />
    </div>
  );
}
