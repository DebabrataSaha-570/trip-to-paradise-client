import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-[#2A2A2A]">
      <section className="max-w-7xl mx-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-14 py-10 px-10 md:px-10 lg:px-0">
          {/* first part */}
          <div>
            <h1 className="text-3xl text-[#C29D59] font-medium my-4">
              Trip to Paradise
            </h1>
            <div className="text-gray-100">
              Trip to Paradise sit amet consectetur adipisicing elit.
              Perferendis sapiente tenetur officiis explicabo fugit, sit
              mollitia eum atque excepturi quaerat autem.
              <div className="flex items-stretch my-12 ">
                <input
                  className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-4 w-4/5 border-2  focus:outline-none focus:border-[#c29d59] "
                  type="email"
                  placeholder="Your Email"
                />
                <button className="w-32 rounded-l-none bg-[#c29d59] hover:bg-[#CBAB71] rounded text-base font-medium leading-none text-white p-4 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c29d59] ">
                  subscribe
                </button>
              </div>
            </div>
          </div>
          {/* second part  */}
          <div>
            <h1 className="text-3xl text-gray-100 my-2 md:my-4">Navigation</h1>
            <hr />
            <ul className="list-disc p-5 text-gray-400 space-y-4">
              <li className="hover:text-[#C29D59] ">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-[#C29D59]">
                <Link to="/">About</Link>
              </li>
              <li className="hover:text-[#C29D59]">
                <Link to="/">Destination</Link>
              </li>
              <li className="hover:text-[#C29D59]">
                <Link to="/">Tour</Link>
              </li>
              <li className="hover:text-[#C29D59]">
                <Link to="/">Blog</Link>
              </li>
              <li className="hover:text-[#C29D59]">
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          {/* third part */}
          <div>
            <h1 className="text-3xl text-gray-100 my-2 md:my-4">Need Help?</h1>
            <hr />
            <div className="border-l-4 border-[#CBAB71] px-4 my-4 md:my-3">
              <h5 className="text-gray-400 text-sm">Call Us</h5>
              <h3 className="text-gray-200 font-semibold">01623333333</h3>
            </div>

            <div className="border-l-4 border-[#CBAB71] px-4 my-4 md:my-3">
              <h5 className="text-gray-400 text-sm">Email for Us</h5>
              <h3 className="text-gray-200 font-semibold">
                triptoparadise@gmail.com
              </h3>
            </div>
            <div className="border-l-4 border-[#CBAB71] px-4 my-4 md:my-3">
              <h5 className="text-gray-400 text-sm">Location</h5>
              <h3 className="text-gray-200 font-semibold">
                221b Baker St, London
              </h3>
            </div>
            <div className="border-l-4 border-[#CBAB71] px-4 my-4 md:mt-3">
              <h5 className="text-gray-400 text-sm">Follow Us</h5>

              <div className="text-xl text-[#C29D59] space-x-4 mt-2">
                <a href="/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="/">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="/">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* copy right */}
        <section className="max-w-7xl mx-auto px-10 md:px-10 lg:px-0">
          <hr />
          <div className="text-gray-200 flex flex-col md:flex-row justify-between pt-6 pb-10 space-y-4 md:space-y-0">
            <p>
              Copyright &copy; 2023
              <span className="text-[#C29D59]"> Debabrata Saha. </span> All
              Rights Reserved.
            </p>

            <div>
              <span className="hover:text-[#C29D59] cursor-pointer">
                Privacy Policy
              </span>
              <span className="border-l-2 border-gray-200 h-[20px] mx-2"></span>

              <span className="hover:text-[#C29D59] cursor-pointer">
                Terms of Use
              </span>
              <span className="border-l-2 border-gray-200 h-[20px] mx-2"></span>
              <span className="hover:text-[#C29D59] cursor-pointer">
                Cookie Policy
              </span>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Footer;
