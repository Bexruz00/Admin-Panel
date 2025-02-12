import React from "react";
import Navbar from "../modules/Navbar";
import Header from "../modules/Header";
import getToken from '../hooks/GetToken'


const DashboardLeyaut = ({ children }) => {
  const {hideMenu} = getToken()
  return (
    <>
      <Header />
      <div className="flex items-center ">
        <Navbar />
        <div className={`${hideMenu ? "w-full" : "w-[80%]"} w-[80%] h-[89vh] overflow-y-auto`}>{children}</div>
      </div>
    </>
  );
};

export default DashboardLeyaut;
