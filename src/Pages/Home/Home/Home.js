import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Gutter from "../Gutter/Gutter";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Gutter></Gutter>
      <AboutUs></AboutUs>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;
