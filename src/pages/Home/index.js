import React from "react";

import FeatureProducts from "./Components/FeatureProducts";
import HeroSection from "../../components/HeroSection";

const Home = () => {
  const data = {
    name: "Rara store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProducts />
      {/*<Services />
      <Trusted />*/}
    </>
  );
};

export default Home;