import React from "react";
import Navbar from "../modules/Navbar";
import Header from "../modules/Header";

const DashboardLeyaut = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex items-center ">
        <Navbar />
        <div className="w-[80%] h-[89vh] overflow-y-auto">{children}</div>
      </div>
    </>
  );
};

export default DashboardLeyaut;
