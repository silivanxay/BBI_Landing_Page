import Hero from '../elements/Hero';
import Feature from '../elements/Feature';
import Application from '../elements/AppDemo';
import FAQ from '../elements/FAQ';
import Blog from '../elements/Blog';

import React from 'react';
import { ThemeProvider } from '../components/Darkmode/ThemeContext';
import { Contact } from '../elements/Contact';
import Logo from '../components/Hero/Logo';

export default function index() {
  return (
    <ThemeProvider>
      <Hero />
      <Feature />
      <Application />
      <FAQ />
      <Blog />
      <div className="mx-auto">
        <iframe
          className="w-full h-96"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Bamboo%20BI%20E%20commerce%20agency&t=&z=17&ie=UTF8&iwloc=&output=embed"
          frameBorder={0}
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
        />
        <a href="https://123movies-to.org" />
        <br />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '.mapouter{position:relative;text-align:right;height:500px;width:1080px;}',
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1080px;}',
          }}
        />
      </div>

      <section
        className="bg-white"
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          backgroundPosition: 'center',
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap pt-24 pb-12 -mx-4">
            <div className="w-full px-4 mb-16 md:w-1/2 lg:w-4/12 lg:mb-0">
              <Logo />
              <p className="text-base font-medium md:text-lg text-coolGray-500 lg:w-64">
                Buy online, pick-up in store & Business intelligence solution
              </p>
            </div>
            <div className="w-full px-4 mb-16 md:w-1/4 lg:w-2/12 lg:mb-0">
              <h3 className="mb-5 text-lg font-bold text-coolGray-900">
                Product
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    className="inline-block font-medium text-coolGray-500 hover:text-coolGray-600"
                    href="#"
                  >
                    Features
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className="inline-block font-medium text-coolGray-500 hover:text-coolGray-600"
                    href="#"
                  >
                    Solutions
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 mb-16 md:w-1/4 lg:w-2/12 lg:mb-0">
              <h3 className="mb-5 text-lg font-bold text-coolGray-900">
                Remaining
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    className="inline-block font-medium text-coolGray-500 hover:text-coolGray-600"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className="inline-block font-medium text-coolGray-500 hover:text-coolGray-600"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-b border-coolGray-100" />
        <p className="py-10 text-sm font-medium text-center md:pb-16 text-coolGray-400">
          © 2022 Bamboo BI. All rights reserved.
        </p>
      </section>
    </ThemeProvider>
  );
}
``;
