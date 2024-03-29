import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 ">
      <div className="header-top bg-[#329BEC] py-2">
        <h1 className="text-white font-bold text-center">
          OPENING FEBRUARY 2024
        </h1>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
