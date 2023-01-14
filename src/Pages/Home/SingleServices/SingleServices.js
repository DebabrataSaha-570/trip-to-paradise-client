import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleServices = ({ service }) => {
  const { placeName, placeDescription, price, image, _id } = service;
  console.log("service", service);
  return (
    <div>
      <div className="bg-white shadow-lg border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg"
          src={`data:image/png;base64,${image}`}
          alt="travel_image"
        />

        <div className="p-5">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
            {placeName}
          </h5>

          <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
            {placeDescription.split(" ").splice(0, 20).join(" ")}...
          </p>

          <div className="flex justify-between items-center mt-4">
            <h2 className="text-xl font-bold">${price}</h2>

            <Link
              to={`/serviceDetail/${_id}`}
              className="text-white bg-[#c29d59] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  p-3  text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Book Now
              <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServices;
