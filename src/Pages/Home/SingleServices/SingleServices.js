import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleServices = ({ service }) => {
  const { placeName, placeDescription, price, image, _id } = service;
  return (
    <div>
      <div className="bg-white shadow-lg border border-gray-200 rounded-lg max-w-sm ">
        <img className="rounded-t-lg" src={image} alt="travel_image" />

        <div className="p-5">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 ">
            {placeName}
          </h5>

          <p className="font-normal text-gray-700 mb-3 ">
            {placeDescription.split(" ").splice(0, 20).join(" ")}...
          </p>

          <div className="flex justify-between items-center mt-4">
            <h2 className="text-xl font-bold">${price}</h2>

            <Link
              to={`/serviceDetail/${_id}`}
              className="text-white bg-[#C29D59] hover:bg-[#CBAB71] font-medium rounded-lg text-sm  p-3  text-center inline-flex items-center "
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
