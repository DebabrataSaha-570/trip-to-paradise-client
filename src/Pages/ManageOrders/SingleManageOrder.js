import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";

const SingleManageOrder = ({ order, handleDelete, handleApproved }) => {
  const { userName, userEmail, bookingDate, userTicketNumber, _id, status } =
    order;
  const { price } = order.service;

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
          <span className="rounded bg-red-300 py-1 px-3 text-xs font-bold">
            {status}
          </span>
        ) : (
          <span className="rounded bg-green-300 py-1 px-3 text-xs font-bold">
            {status}
          </span>
        )}
      </td>
      <td className="w-full lg:w-auto p-3 text-gray-800  border border-b text-center block lg:table-cell relative lg:static">
        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
          Actions
        </span>

        {status === "pending" && (
          <button
            onClick={() => handleApproved(_id)}
            className=" rounded py-1 px-3 bg-green-400 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 focus:bg-green-600 focus:text-gray-200
          disabled:opacity-25
          "
          >
            Approve
          </button>
        )}

        {status === "approved" && (
          <button
            type="button"
            class="px-3 py-1 rounded bg-green-500 focus:outline-none disabled:opacity-25"
            disabled
          >
            Approve
          </button>
        )}

        <i
          onClick={() => handleDelete(_id)}
          className="text-red-400 cursor-pointer hover:text-red-600 active:text-red-700 pl-6 "
        >
          <FontAwesomeIcon icon={faTrash} size="lg" />
        </i>
      </td>
    </tr>
  );
};

export default SingleManageOrder;
