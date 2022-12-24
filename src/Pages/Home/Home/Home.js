import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Gutter from "../Gutter/Gutter";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Gutter></Gutter>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
