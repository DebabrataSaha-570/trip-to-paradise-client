import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import { ColorRing } from "react-loader-spinner";
import { toast } from "react-toastify";

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const [user, setUser] = useState({
    name: "Debabrata Saha",
    email: "sahadebabrata570@gmail.com",
  });
  const [userPhone, setUserPhone] = useState(0);
  const [userTicketNumber, setUserTicketNumber] = useState(0);
  const [bookingDate, setBookingDate] = useState(new Date());
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5005/service/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);

  const handleNameChange = (e) => {
    const updatedName = e.target.value;
    const updatedUser = { ...user };
    updatedUser.name = updatedName;
    setUser(updatedUser);
  };

  const handleEmailChange = (e) => {
    const updatedEmail = e.target.value;
    const updatedUser = { ...user };
    updatedUser.email = updatedEmail;
    setUser(updatedUser);
  };

  const {
    placeName,
    placeDescription,
    image,
    price,
    placeDuration,
    dressCode,
  } = service;

  const handleBookNow = (e) => {
    e.preventDefault();

    const booking = {
      userName: user.name,
      userEmail: user.email,
      userPhone,
      userTicketNumber,
      bookingDate,
      status: "pending",
      service,
    };

    fetch("http://localhost:5005/booking", {
      method: "POST",
      body: JSON.stringify(booking),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          e.target.reset();
          toast.success("Tour booked successfully!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          navigate("/myOrders");
        } else {
          toast.error("Something Went Wrong! Try again later.", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
  };

  return (
    <div>
      <Navigation></Navigation>
      <section className="max-w-7xl mx-auto p-10 md:p-0 my-10">
        {Object.keys(service).length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* service detail */}
            <div>
              <div>
                <img src={image} alt="service_image" />
              </div>

              <h2 className="text-3xl  my-3"> {placeName} </h2>
              <p>{placeDescription}</p>

              <table class="border-collapse border my-3 border-black w-full">
                <tbody>
                  <tr>
                    <td class="border border-black p-2 font-bold">Price</td>
                    <td class="border border-black p-2">${price}</td>
                  </tr>
                  <tr>
                    <td class="border border-black p-2 font-bold">Duration</td>
                    <td class="border border-black p-2">
                      {placeDuration} Days
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-black p-2 font-bold">
                      Dress Code
                    </td>
                    <td class="border border-black p-2">{dressCode}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* service detail form */}
            <div className="px-8 py-3 shadow-2xl h-[35rem] lg:ml-5">
              <h3 className="text-center text-2xl font-semibold">
                Book This Tour
              </h3>

              <form onSubmit={handleBookNow}>
                {/* user name input */}
                <div>
                  <label
                    for="user_name"
                    className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    onChange={handleNameChange}
                    value={user.name}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:  dark: "
                    placeholder="Shuvo Saha"
                    required
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label
                    for="user_email"
                    className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    onChange={handleEmailChange}
                    value={user.email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                    placeholder="shuvo@gmail.com"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    for="user_phone"
                    className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id="user_phone"
                    onChange={(e) => setUserPhone(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                    placeholder="01999999999"
                    required
                  />
                </div>

                {/* pick a date  */}
                <div>
                  <label
                    for="user_date"
                    className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Pick a Date
                  </label>

                  <DatePicker
                    id="user_date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                    selected={bookingDate}
                    onChange={(date) => setBookingDate(date)}
                  ></DatePicker>
                </div>

                {/* Number of Tickets */}
                <div>
                  <label
                    for="user_ticket_number"
                    className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Number of Tickets
                  </label>
                  <input
                    type="number"
                    id="user_ticket_number"
                    onChange={(e) => setUserTicketNumber(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg     block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="2"
                    required
                  />
                </div>

                <input
                  type="submit"
                  className=" py-3 mt-3 px-6 bg-[#c29d59] hover:bg-[#CBAB71] text-sm text-white font-bold rounded-xl transition duration-200 my-3 uppercase cursor-pointer"
                  value="Book Now"
                />
              </form>
            </div>
          </section>
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

export default ServiceDetail;
