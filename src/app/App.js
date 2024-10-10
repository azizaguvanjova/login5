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

        <div className="min-w-[185px] min-h-[185px] rounded-full absolute bg-[#095F59D6] border-[23px] border-[#02B94B1A] left-36 bottom-[135px]"></div>

        <div className="min-w-[278px] min-h-[278px] border-[48px] border-[#02B94B1A] rounded-full bg-[#095F59D6] absolute -bottom-24 -right-16"></div>
      </div>
    </div>
  );
};
export default App;
