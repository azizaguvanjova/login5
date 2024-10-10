"use client";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import React from "react";
const App = () => {
  return (
    <div>
      <div className="h-screen relative overflow-hidden">
        <Navbar />

        <div className="inset-0 absolute flex justify-center items-center">
          <Login />
        </div>

        <div className="shape relative h-screen bottom-0 w-full -z-10 bg-[#095F59]"></div>

        <div className="min-w-[150px] sm:min-w-[185px] min-h-[150px] sm:min-h-[185px] rounded-full absolute bg-[#095F59D6] border-[15px] sm:border-[23px] border-[#02B94B1A] left-8 sm:left-36 bottom-[100px] sm:bottom-[135px]"></div>

        <div className="min-w-[200px] sm:min-w-[278px] min-h-[200px] sm:min-h-[278px] border-[30px] sm:border-[48px] border-[#02B94B1A] rounded-full bg-[#095F59D6] absolute -bottom-12 sm:-bottom-24 -right-8 sm:-right-16"></div>
      </div>
    </div>
  );
};
export default App;
