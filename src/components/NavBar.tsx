import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMenuOutline } from "react-icons/io5";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="border-gray-200 px-4 py-5 flex items-center justify-center">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="/" className="text-[#D98E73] font-bold text-4xl">
          Aroha
        </a>
        {/* Categories */}
        <div className="hidden md:flex items-center justify-center mx-auto ms-8">
          <IoMenuOutline className="text-xl" />
          <span className="ml-2 text-lg font-medium">Categories</span>
        </div>
        <div className="hidden md:flex flex-grow mx-16 lg:mx-24 relative items-center ">
          <input
            type="text"
            className="w-full border-2 border-[#D2B48C] text-gray-900 text-sm rounded-full p-2 pl-5"
            placeholder="Search for anything"
          />
          <div className="absolute  right-1 flex items-center justify-center  bg-[#D98E73] h-8 w-8 rounded-full">
            <FiSearch className="text-white" />
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </button>
        <div className="hidden md:flex justify-between items-center space-x-5">
          <a href="#" className="text-2xl">
            <IoIosHeartEmpty />
          </a>
          <a href="#" className="text-2xl">
            <BsCart2 />
          </a>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden ps-3 py-2 flex flex-row items-center justify-end gap-5">
          <a href="#" className="text-2xl">
            <IoIosHeartEmpty />
          </a>
          <a href="#" className="text-2xl">
            <BsCart2 />
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
