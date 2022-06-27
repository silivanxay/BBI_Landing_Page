import React from 'react';
import Article from '../../components/common/Article';
import { heroContent } from '../../util/data';

export default function LeftSide() {
  return (
    <div className="container px-4 mx-auto">
      <div className="relative z-10 flex flex-wrap -mx-4">
        <div className="w-full px-4 mb-12 md:w-1/2 md:mb-0">
          <Article content={heroContent} />
          <div className="flex flex-wrap mb-8 md:mb-16">
            <div className="w-full py-1 md:w-auto md:py-0 md:mr-4">
              <a
                className="inline-block w-full py-5 text-base font-medium leading-4 text-center bg-yellow-500 rounded-md shadow-sm px-7 md:text-lg text-yellow-50 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                href="#"
              >
                Request a Demo
              </a>
            </div>
            <div className="w-full py-1 md:w-auto md:py-0">
              <a
                className="inline-block w-full py-5 text-base font-medium leading-4 text-center bg-white rounded-md shadow-sm px-7 md:text-lg text-coolGray-800 hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50"
                href="#"
              >
                Sign Up
              </a>
            </div>
          </div>
          <p className="mb-6 text-sm font-medium text-center md:mb-4 text-coolGray-400 md:text-left">
            Powered by modern technology stacks
          </p>
          <div className="flex flex-wrap -mx-1">
            <div className="w-full px-3 mb-6 bg-white h-14 md:w-auto lg:mb-0">
              <img
                className="mx-auto my-3 w-11"
                src="flex-ui-assets/brands/next-js.svg"
                alt=""
              />
            </div>
            <div className="w-full px-3 mb-6 bg-white md:w-auto lg:mb-0 h-14">
              <img
                className="w-8 mx-auto my-3"
                src="flex-ui-assets/brands/django.svg"
                alt=""
              />
            </div>
            <div className="w-full px-3 mb-6 bg-white md:w-auto lg:mb-0 h-14">
              <img
                className="w-10 mx-auto my-2"
                src="flex-ui-assets/brands/python.svg"
                alt=""
              />
            </div>
            <div className="w-full px-3 bg-white md:w-auto h-14">
              <img
                className="mx-auto my-1 w-14"
                src="flex-ui-assets/brands/postgresql.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:hidden">
          <div className="relative mx-auto max-w-max">
            <img
              className="absolute left-0 z-10 object-cover p-1 ml-11 top-1 h-52"
              src="flex-ui-assets/images/uxui/bamboobi_uxui.png"
            />
            <img
              className="object-cover h-56 mx-auto"
              src="flex-ui-assets/images/headers/mockup-light1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
