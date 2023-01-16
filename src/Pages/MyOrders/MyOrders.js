import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
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

  const handleCancel = (id) => {
    const confirm = window.confirm("Are you sure, you want to cancel this?");
    if (confirm) {
      fetch(`http://localhost:5005/deleteOrder/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            console.log("myOrder", myOrder);
            alert("Your Order deleted successfully");
            const newOrders = myOrder.filter((order) => order._id !== id);
            setMyOrder(newOrders);
          }
        });
    }
  };

  return (
    <div>
      <Navigation></Navigation>
      <section className="max-w-7xl mx-auto p-10 md:p-0 mt-3 mb-8">
        <h3 className="text-3xl  text-center">My Orders : {myOrder.length} </h3>

        {myOrder.length ? (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-3">
            {myOrder.map((order) => (
              <SingleMyOrder
                key={order._id}
                order={order}
                handleCancel={handleCancel}
              ></SingleMyOrder>
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
      <Footer></Footer>
    </div>
  );
};

export default MyOrders;
