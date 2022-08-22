import React from "react";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import Navbar from "./Navbar";
import Hero from "../../elements/Hero";
import Feature from "../../elements/Feature";
import Application from "../../elements/AppDemo";
import FAQ from "../../elements/FAQ";
import { ThemeProvider } from "../../components/Darkmode/ThemeContext";
import Blog from "../../elements/Blog";
import { Price } from "../../elements/Price/Price";
import { About } from "../../elements/About/About";
import { Contact } from "../../elements/Contact";
import { Footer } from "../../elements/Footer/Footer";
import Back2TopButton from "../../components/common/Back2TopButton";
const Admin = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex flex-1 justify-start">
        <SidebarLeft />
        <div className="flex-1 overflow-y-auto">
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
          </ThemeProvider>
        </div>
        <SidebarRight />
      </div>
    </div>
  );
};
export default Admin;
