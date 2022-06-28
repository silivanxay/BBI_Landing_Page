import Hero from "../elements/Hero";
import Feature from "../elements/Feature";
import Application from "../elements/AppDemo";
import FAQ from "../elements/FAQ";
import Blog from "../elements/Blog";
import React from "react";
import { ThemeProvider } from "../components/Darkmode/ThemeContext";
import { Contact } from "../elements/Contact";
import { Footer } from "../elements/Footer/Footer";
import { Price } from "../elements/Price/Price";
import { CTA } from "../elements/CTA/CTA";
import { Quotes } from "../elements/Quotes/Quotes";
export default function index() {
  return (
    <ThemeProvider>
      <Hero />
      <Feature />
      <Application />
      <FAQ />
      <Blog />
      <Price />
      <CTA />
      <Quotes />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}
