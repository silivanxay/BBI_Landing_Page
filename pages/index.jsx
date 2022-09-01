import Hero from "../elements/Hero";
import Feature from "../elements/Feature";
import Application from "../elements/AppDemo";
import FAQ from "../elements/FAQ";
import Blog from "../elements/Blog";
import React, { useEffect } from "react";
import { ThemeProvider } from "../components/Darkmode/ThemeContext";
import { Contact } from "../elements/Contact";
import { Footer } from "../elements/Footer/Footer";
import { Price } from "../elements/Price/Price";
import { About } from "../elements/About/About";

import Back2TopButton from "../components/common/Back2TopButton";
import "aos/dist/aos.css";
import Aos from "aos";
// import "react-toastify/dist/ReactToastify.css";
// import Preloader from "../components/common/Preloader/Preloader";
export default function index() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <ThemeProvider>
        <Hero />
        <Feature />
        <Application />
        <FAQ />
        <Blog />
        <Price />
        <About />
        <Contact />
        <Footer />
        <Back2TopButton />
        {/* <Preloader /> */}
      </ThemeProvider>
    </>
  );
}
