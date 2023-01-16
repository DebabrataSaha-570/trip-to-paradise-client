import { format, parse } from "date-fns";
import React from "react";

const SingleMyOrder = ({ order, handleCancel }) => {
  const { image, placeName, price, status } = order.service;
  const { _id, userName, userEmail, userPhone, userTicketNumber, bookingDate } =
    order;

  return (
    <div>
      <div className="bg-white shadow-lg border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={image} alt="travel_image" />

        <div className="p-5">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
            {placeName}
          </h5>

          <table class="border-collapse border my-3 border-black w-full">
            <tbody>
              <tr>
                <td class="border border-black p-2 font-bold">Name</td>
                <td class="border border-black p-2">{userName}</td>
              </tr>
              <tr>
                <td class="border border-black p-2 font-bold">Email</td>
                <td class="border border-black p-2">{userEmail}</td>
              </tr>
              <tr>
                <td class="border border-black p-2 font-bold">Phone</td>
                <td class="border border-black p-2">{userPhone}</td>
              </tr>
              <tr>
                <td class="border border-black p-2 font-bold">Ticket</td>
                <td class="border border-black p-2">{userTicketNumber}</td>
              </tr>
              <tr>
                <td class="border border-black p-2 font-bold">Book Date</td>
                <td class="border border-black p-2">
                  {format(new Date(bookingDate), "dd/MM/yyyy")}
                </td>
              </tr>
              <tr>
                <td class="border border-black p-2 font-bold">Price</td>
                <td class="border border-black p-2">
                  $ {price * userTicketNumber}
                </td>
              </tr>
              <tr>
                <td class="border border-black p-2 font-bold">Status</td>
                <td class="border border-black p-2 text-green-600 ">
                  {status}
                </td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={() => handleCancel(_id)}
            className=" py-2 px-6 bg-red-600 hover:bg-red-700 text-sm text-white font-bold rounded-xl transition duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleMyOrder;
