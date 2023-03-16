import React from "react";
import HeroSection from "../Home/Components/HeroSection";

const About = () => {

  const data = {
    name: "Rara Ecommerce",
  };

  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default About;