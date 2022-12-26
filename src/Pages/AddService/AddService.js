import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const AddService = () => {
  return (
    <>
      <Navigation></Navigation>

      <div className="max-w-2xl mx-auto bg-white   my-3">
        <div className="bg-[#F3F4F6] p-16">
          <h3 className="text-center text-2xl mb-3">Please Add a Service</h3>
          <form>
            <div className="grid gap-6 mb-6 lg:grid-cols-1">
              {/* place name input */}
              <div>
                <label
                  for="place_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Place name
                </label>
                <input
                  type="text"
                  id="place_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="New York"
                  required
                />
              </div>

              {/* place description text area */}
              <div>
                <label
                  for="place_description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Place Description
                </label>
                <textarea
                  id="place_description"
                  rows="4"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Description.."
                  required
                ></textarea>
              </div>

              {/* duration text-input */}
              <div>
                <label
                  for="duration"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Duration
                </label>
                <input
                  type="number"
                  id="duration"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="3 days"
                  required
                />
              </div>

              {/* price text-input */}
              <div>
                <label
                  for="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="$500"
                  required
                />
              </div>

              {/* dress code input  */}
              <div>
                <label
                  for="dress_code"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Dress Code
                </label>
                <input
                  type="text"
                  id="dress_code"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Comfortable dress"
                  required
                />
              </div>

              {/* img upload url */}
              <div>
                <label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  for="file_input"
                >
                  Upload file
                </label>
                <input
                  id="file_input"
                  type="file"
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 file:bg-[#1F2937] file:text-sm file:font-semibold file:text-gray-200 file:px-4 file:py-2 file:mr-5 file:cursor-pointer file:border-0 file:border-gray-300  "
                />
              </div>

              <button
                type="submit"
                className="text-white bg-[#c29d59] hover:bg-[#CBAB71] focus:ring-4 focus:outline-none focus:ring-[#CBAB71] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Service
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default AddService;
