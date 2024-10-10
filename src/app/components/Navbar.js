import React from "react";

React;
const Navbar = () => {
  return (
    <div className="w-full bg-[#095F59] flex justify-between p-4">
      <h2 className=" font-bold text-4xl text-white">SHEY</h2>
      <nav className="font-semibold text-lg text-white/85 flex justify-between gap-8">
        <a href="#"> Home</a>
        <a href="#"> Services</a>
        <a href="#"> Contact </a>
      </nav>
    </div>
  );
};
export default Navbar;
