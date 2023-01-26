import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import SingleServices from "../SingleServices/SingleServices";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://trip-to-paradise-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section
      name="services"
      className="max-w-7xl mx-auto p-10 md:p-0 my-4 md:my-7 "
    >
      <h3 className="text-2xl md:text-3xl ">
        Trending, <span className="font-bold">Best Selling Tours</span> and
      </h3>
      <h3 className="text-2xl md:text-3xl my-3">Fun Destinations</h3>

      {services.length > 0 ? (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <SingleServices
              key={service._id}
              service={service}
            ></SingleServices>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{ display: "inline-block" }}
            wrapperClass="blocks-wrapper"
            colors={["#b8c480", "#B2A3B5", "#F4442E", "#51E5FF", "#429EA6"]}
          />
        </div>
      )}
    </section>
  );
};

export default Services;
