import React, { useEffect, useState } from "react";
import Navigation from "../Shared/Navigation/Navigation";

const ContactUs = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5005/services")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);
  return (
    <div>
      <Navigation></Navigation>
      {/* {data.map((d) => (
        <div>
          <h3>{d.placeName}</h3>
          <img src={`data:image/png;base64,${d.image}`} alt="" />
        </div>
      ))} */}
    </div>
  );
};

export default ContactUs;
