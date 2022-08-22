import Link from "next/link";
import React from "react";
import Logo from "../../components/Hero/Logo";
export const Footer = () => {
  return (
    <section className="text-coolGray-900 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap pt-24 pb-12 -mx-4 justify-between">
          <div className="w-full md:w-1/2 lg:w-4/12 px-4 mb-16 lg:mb-0">
            <Logo />
            <p className="text-base md:text-lg  font-medium lg:w-64">
              ຊື້ອອນໄລນ໌, ເອົາຂື້ນໃນຮ້ານ & ວິທີແກ້ໄຂທາງທຸລະກິດ
            </p>
          </div>
          <div className="w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0">
            <h3 className="mb-5 text-lg font-bold ">Product</h3>
            <ul>
              <li className="mb-4">
                <Link href="/#feature">
                  <a className="inline-block hover:text-coolGray-600 font-medium">
                    Features
                  </a>
                </Link>
              </li>
              <li className="mb-4">
                <a
                  className="inline-block hover:text-coolGray-600 font-medium"
                  href="#"
                >
                  Solutions
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0">
            <h3 className="mb-5 text-lg font-bold">Remaining</h3>
            <ul>
              <li className="mb-4">
                <a
                  className="inline-block hover:text-coolGray-600 font-medium"
                  href="/#blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="inline-block hover:text-coolGray-600 font-medium"
                  href="#"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-b border-coolGray-100" />
      <p className="py-5 md:pb-7 text-lg font-medium text-center">
        © 2021 BamBoo BI. All rights reserved.
      </p>
    </section>
  );
};
