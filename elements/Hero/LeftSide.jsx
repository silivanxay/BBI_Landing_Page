import React from "react";
import Article from "../../components/common/Article";
import { heroContent } from "../../util/data";
import Image from "next/image";
export default function LeftSide() {
  return (
    <div className="container px-4 mx-auto">
      <div className="relative z-10 flex flex-wrap -mx-4">
        <div className="w-full px-4 mb-12 md:w-1/2 md:mb-0">
          <Article content={heroContent} />
          <div className="flex flex-wrap mb-8 md:mb-16">
            <div className=" w-full py-1 md:w-auto md:py-0 md:mr-4">
              <button className=" inline-block w-full py-5 font-medium leading-4 text-center bg-yellow-500 rounded-md shadow-sm px-7 md:text-lg text-gray-700 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
                ຮ້ອງຂໍການສາທິດ
              </button>
            </div>
            <div className="w-full py-1 md:w-auto md:py-0">
              <a
                className="inline-block w-full py-5 text-base font-medium leading-4 text-center bg-white rounded-md shadow-sm px-7 md:text-lg text-coolGray-800 hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50"
                href="/#join_us"
              >
                ລົງທະບຽນ
              </a>
            </div>
          </div>
          <p className="mb-6 text-sm font-medium text-center md:mb-4 text-coolGray-700 md:text-left">
            ຂັບເຄື່ອນໂດຍ stacks ເຕັກໂນໂລຊີທີ່ທັນສະໄຫມ
          </p>
          <div className="flex -mx-1">
            <div className="w-full px-3 mb-6 bg-white h-14 md:w-auto lg:mb-0">
              <Image
                src="/flex-ui-assets/brands/next-js.svg"
                alt="image"
                width={50}
                height={50}
              />
            </div>
            <div className="w-full px-3 mb-6 bg-white md:w-auto lg:mb-0 h-14">
              <Image
                src="/flex-ui-assets/brands/django.svg"
                alt="image"
                width={50}
                height={50}
              />
            </div>
            <div className="w-full px-3 mb-6 bg-white md:w-auto lg:mb-0 h-14">
              <Image
                src="/flex-ui-assets/brands/python.svg"
                alt="image"
                width={50}
                height={50}
              />
            </div>
            <div className="w-full px-3 bg-white md:w-auto h-14">
              <Image
                src="/flex-ui-assets/brands/postgresql.svg"
                alt="image"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:hidden">
          <div className="relative mx-auto max-w-max">
            <div className="absolute left-0 z-10 object-cover p-1 ml-11 top-1 h-52">
              <img
                src="flex-ui-assets/images/uxui/bamboobi_uxui.webp"
                alt="image"
              />
            </div>
            <div className="object-cover h-56 mx-auto">
              <img
                src="flex-ui-assets/images/headers/mockup-light1.webp"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
