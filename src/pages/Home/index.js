import React from "react";
import FeatureProducts from "./Components/FeatureProducts";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Trusted from "./Components/Trusted";

const Home = () => {
  const data = {
    name: "Rara store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProducts />
      {/*<Trusted />*/}
      {/*<Services />*/}
    </>
  );
};

export default Home;