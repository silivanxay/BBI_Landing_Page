import React from "react";
import Navbar from "./Navbar";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
const Hero = () => {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden transition-all bg-image-light dark:bg-image-dark">
        <div data-aos="fade-up" className="relative pt-16 pb-20 md:pt-10 md:pb-28 lg:pb-56">
          <LeftSide />
          <RightSide />
        </div>
      </section>
    </>
  );
};
export default Hero;
