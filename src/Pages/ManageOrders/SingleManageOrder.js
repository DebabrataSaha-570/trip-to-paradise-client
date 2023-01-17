import { format } from "date-fns";
import React from "react";

const SingleManageOrder = ({ order }) => {
  const { userName, userEmail, bookingDate, userTicketNumber } = order;
  const { price, status } = order.service;
  return (
    <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
      <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
          Name
        </span>
        {userName}
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800  border border-b text-center block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
          Email
        </span>
        {userEmail}
      </td>

      <td className="w-full lg:w-auto p-3 text-gray-800  border border-b text-center block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
          Date
        </span>
        {format(new Date(bookingDate), "dd/MM/yyyy")}
      </td>

      <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
          Price
        </span>
        $ {userTicketNumber * price}
      </td>

      <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
          Status
        </span>
        {status === "pending" ? (
          <span className="rounded bg-red-400 py-1 px-3 text-xs font-bold">
            {status}
          </span>
        ) : (
          <span className="rounded bg-green-400 py-1 px-3 text-xs font-bold">
            {status}
          </span>
        )}
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800  border border-b text-center block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
          Actions
        </span>
        <a href="/" className="text-blue-400 hover:text-blue-600 underline">
          Edit
        </a>
        <a
          href="/"
          className="text-blue-400 hover:text-blue-600 underline pl-6"
        >
          Remove
        </a>
      </td>
    </tr>
  );
};

export default SingleManageOrder;