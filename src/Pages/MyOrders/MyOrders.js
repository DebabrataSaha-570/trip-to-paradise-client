import React, { useEffect, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import SingleMyOrder from "./SingleMyOrder";

const MyOrders = () => {
  const [myOrder, setMyOrder] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/order/sahadebabrata570@gmail.com")
      .then((res) => res.json())
      .then((data) => {
        setMyOrder(data);
      });
  }, []);
  return (
    <div>
      <Navigation></Navigation>
      <section className="max-w-7xl mx-auto p-10 md:p-0 mt-5 mb-8">
        <h3 className="text-3xl  text-center">My Orders {myOrder.length} </h3>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-3">
          {myOrder.map((order) => (
            <SingleMyOrder key={order._id} order={order}></SingleMyOrder>
          ))}
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default MyOrders;
