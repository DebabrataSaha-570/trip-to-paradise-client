import React from "react";

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto p-6 md:p-0 my-4 md:my-5 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#F2F2F2] my-5 p-3">
        <img
          src="https://i.ibb.co/TR81WSR/glenn-carstens-peters-ZWD3-Dx6a-UJg-unsplash.jpg"
          alt=""
          className="rounded-md"
        />
        <div className="flex items-center">
          <div>
            <h5 className="text-xl text-[#c29d59] border-l-4 border-[#CBAB71] px-2 my-3">
              About us
            </h5>
            <h2 className="text-2xl md:text-3xl font-bold my-2">
              Plan your trip with us
            </h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth. Even the all-powerful Pointing has no control
              about the blind texts it is an almost unorthographic. Italic
              Mountains, she had a last view back on the skyline
            </p>

            <button className=" py-3 px-6 bg-[#c29d59] hover:bg-[#CBAB71] text-sm text-white font-bold rounded-xl transition duration-200 my-3 uppercase">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
