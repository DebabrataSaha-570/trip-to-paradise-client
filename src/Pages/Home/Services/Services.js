import React, { useEffect, useState } from "react";
import SingleServices from "../SingleServices/SingleServices";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="max-w-7xl mx-auto p-10 md:p-0 my-10 ">
      <h3 className="text-3xl ">
        Trending, <span className="font-bold">Best Selling Tours</span> and
      </h3>
      <h3 className="text-3xl my-3">Fun Destinations</h3>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <SingleServices key={service._id} service={service}></SingleServices>
        ))}
      </div>
    </section>
  );
};

export default Services;