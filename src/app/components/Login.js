import React from "react";

const Login = () => {
  return (
    <div className="w-full sm:w-3/5 md:w-2/6 shadow-[0_3px_7px_rgba(0,0,0,0.5)] p-6 sm:p-10 flex flex-col gap-2 bg-white/90 z-50 min-w-[280px] sm:min-w-[350px] mt-6 sm:mt-12">
      <h1 className="uppercase text-5xl sm:text-7xl text-[#095F59D6] font-semibold mb-2">
        Login
      </h1>

      <div className="flex flex-col gap-3 sm:gap-5">
        <input
          type="text"
          placeholder="Username"
          className="py-2 px-3 border-[1px] border-[#0000004F] text-lg sm:text-xl rounded-lg text-black placeholder-[#101A1CD6]"
        />
        <input
          type="Password"
          placeholder="Password"
          className="py-2 px-3 border-[1px] border-[#0000004F] text-lg sm:text-xl rounded-lg text-black placeholder-[#101A1CD6]"
        />
        <button className="uppercase rounded-lg py-2 sm:py-3 px-4 bg-[#095F59D6] text-white w-3/5 sm:w-2/5 font-semibold text-lg sm:text-2xl mx-auto">
          Login
        </button>
      </div>

      <div className="flex items-center mt-4">
        <hr className="flex-grow border border-black/25" />
        <span className="uppercase px-2 font-semibold text-lg sm:text-2xl">
          or
        </span>
        <hr className="flex-grow border border-black/25" />
      </div>

      <div className="flex justify-around w-3/5 sm:w-1/2 mx-auto my-4">
        <a href="#" className="">
          <img src="/google.png" alt="google link" className="w-6 sm:w-8" />
        </a>
        <a href="#" className="">
          <img src="/facebook.png" alt="facebook link" className="w-6 sm:w-8" />
        </a>
      </div>

      <p className="font-semibold text-center text-[#095F59BF] text-lg sm:text-xl">
        Not registered yet? Click <a href="#">here to sign up</a>
      </p>
    </div>
  );
};

export default Login;
