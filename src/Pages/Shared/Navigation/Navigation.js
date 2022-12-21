import {
  faBars,
  faEllipsisVertical,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="bg-[#2A2A2A] sticky top-0 ">
        <nav className="relative max-w-7xl mx-auto  px-4 py-3 flex justify-between items-center ">
          {/* logo  */}
          <Link
            to="/"
            className="text-xl font-bold leading-none flex items-center justify-between text-[#CBAB71]"
          >
            <FontAwesomeIcon icon={faLocationDot} />
            <p className="ml-1"> Trip to Paradise</p>
          </Link>

          {/* hamburger icon */}
          <div className="lg:hidden">
            <button
              onClick={handleClick}
              className="text-gray-400  hover:text-gray-500 p-3"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>

          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <Link
                to="/home"
                className="text-sm text-gray-400 hover:text-gray-500"
              >
                Home
              </Link>
            </li>

            {/* three dot icon  */}
            <li className="text-gray-300">
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </li>

            <li>
              <Link
                to="/myOrders"
                className="text-sm text-gray-400 hover:text-gray-500"
              >
                My Orders
              </Link>
            </li>

            {/* three dot icon  */}
            <li className="text-gray-300">
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </li>

            <li>
              <Link
                className="text-sm text-gray-400 hover:text-gray-500"
                to="/manageOrders"
              >
                Manage Orders
              </Link>
            </li>

            {/* three dot icon  */}
            <li className="text-gray-300">
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </li>

            <li>
              <Link
                to="/addService"
                className="text-sm text-gray-400 hover:text-gray-500"
              >
                Add Service
              </Link>
            </li>

            {/* three dot icon  */}
            <li className="text-gray-300">
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </li>

            <li>
              <Link
                to="/contactUs"
                className="text-sm text-gray-400 hover:text-gray-500"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <a
            className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-300 hover:bg-gray-400 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
            href="/"
          >
            Sign In
          </a>
          <a
            className="hidden lg:inline-block py-2 px-6 bg-[#CBAB71] hover:bg-[#C29D59] text-sm text-white font-bold rounded-xl transition duration-200"
            href="/"
          >
            Sign up
          </a>
        </nav>
      </div>

      {/* mobile menu  */}
      <div className={!nav ? "hidden sticky top-0 z-70" : " lg:hidden"}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-[#2A2A2A] border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            {/* logo  */}
            <Link
              to="/"
              className="mr-auto flex items-center justify-between text-xl font-bold leading-none text-[#CBAB71]"
            >
              <FontAwesomeIcon icon={faLocationDot} />
              <p className="ml-1"> Trip to Paradise</p>
            </Link>

            {/* close icon  */}
            <div className="">
              <button onClick={handleClick} className=" cursor-pointer">
                <FontAwesomeIcon
                  className="h-6 w-6 text-gray-400  hover:text-gray-500"
                  icon={faXmark}
                />
              </button>
            </div>
          </div>

          <div>
            <ul>
              <li className="mb-1">
                <Link
                  to="/home"
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-[#C29D59] rounded"
                >
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/myOrders"
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-[#C29D59] rounded"
                >
                  My Orders
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/manageOrders"
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-[#C29D59] rounded"
                >
                  Manage Orders
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/addService"
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-[#C29D59] rounded"
                >
                  Add Service
                </Link>
              </li>

              <li className="mb-1">
                <Link
                  to="/contactUs"
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-[#C29D59] rounded"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-300 hover:bg-gray-400 rounded-xl"
                href="/"
              >
                Sign in
              </a>
              <a
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-[#CBAB71] hover:bg-[#C29D59]  rounded-xl"
                href="/"
              >
                Sign Up
              </a>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2021</span>
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
