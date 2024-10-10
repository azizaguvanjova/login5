import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-[#095F59] flex justify-between p-4 items-center">
      <h2 className="font-bold text-2xl sm:text-4xl text-white">SHEY</h2>

      <div className="sm:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } sm:flex font-semibold text-lg text-white/85 gap-8`}
      >
        <a href="#" className="block py-2 sm:py-0">
          Home
        </a>
        <a href="#" className="block py-2 sm:py-0">
          Services
        </a>
        <a href="#" className="block py-2 sm:py-0">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
