import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import SingleManageOrder from "./SingleManageOrder";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);
  return (
    <>
      <Navigation></Navigation>
      <section className="max-w-7xl mx-auto p-10 md:p-0 mt-3 mb-8">
        <h3 className="text-3xl text-center my-4">
          Manage Orders : {orders.length}{" "}
        </h3>

        {orders.length > 0 ? (
          <div>
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr>
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Name
                  </th>
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Email
                  </th>

                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Date
                  </th>
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Price
                  </th>
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Status
                  </th>
                  <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <SingleManageOrder
                    key={order._id}
                    order={order}
                  ></SingleManageOrder>
                ))}
              </tbody>
            </table>
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
    </>
  );
};

export default ManageOrders;
