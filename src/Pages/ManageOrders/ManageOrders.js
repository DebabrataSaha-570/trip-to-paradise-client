import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { toast } from "react-toastify";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import SingleManageOrder from "./SingleManageOrder";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://trip-to-paradise-server.vercel.app/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  const handleDelete = (id) => {
    const success = window.confirm("Are you sure, you want to delete this?");
    if (success) {
      fetch(`https://trip-to-paradise-server.vercel.app/deleteOrder/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Order deleted successfully!", {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };

  const handleApproved = (id) => {
    fetch(`https://trip-to-paradise-server.vercel.app/order/${id}`, {
      method: "PUT",
      body: JSON.stringify({ status: "approved" }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Order approved successfully!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          fetch("https://trip-to-paradise-server.vercel.app/orders")
            .then((res) => res.json())
            .then((data) => {
              setOrders(data);
            });
        }
      });
  };

  return (
    <>
      <Navigation></Navigation>
      <section className="max-w-7xl mx-auto p-7 md:p-0 mt-3 mb-8">
        <h3 className="text-3xl text-center my-4">
          Manage Orders : {orders.length}{" "}
        </h3>

        {orders.length > 0 ? (
          <div>
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Name
                  </th>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Email
                  </th>

                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Date
                  </th>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Price
                  </th>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Status
                  </th>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <SingleManageOrder
                    key={order._id}
                    order={order}
                    handleDelete={handleDelete}
                    handleApproved={handleApproved}
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
              wrapperclassName="blocks-wrapper"
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
