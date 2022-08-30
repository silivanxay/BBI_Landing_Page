import React from "react";
import Filter from "./Filter";
import Card from "./Card";

const index = () => {
  return (
    <div className=" bg-gray-50 rounded ">
      <div className="container mx-auto">
        <div className="p-10">
          <div className="flex justify-between">
            <div>Filter</div>
            <form action="">
              <label for="simple-search" class="sr-only">
                Search
              </label>
              <div class="relative w-full">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
              </div>
              {/* <button
                type="submit"
                class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span class="sr-only">Search</span>
              </button> */}
            </form>
            <div>Short by: Nentest</div>
          </div>
        </div>
        {/* End */}
        <div className="grid grid-cols-5 bg-orange-500 h-full w-full">
          <div className="col-span-1">
            <aside class="w-64" aria-label="Sidebar">
              <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                <ul class="space-y-2">
                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    ></a>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      aria-controls="dropdown-example"
                      data-collapse-toggle="dropdown-example"
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span
                        class="flex-1 ml-3 text-left whitespace-nowrap"
                        sidebar-toggle-item=""
                      >
                        Versace
                      </span>
                      <svg
                        sidebar-toggle-item=""
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <ul id="dropdown-example" class="hidden py-2 space-y-2">
                      <li>
                        <a
                          href="#"
                          class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Products
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Billing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Invoice
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      aria-controls="dropdown-example"
                      data-collapse-toggle="dropdown-example"
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span
                        class="flex-1 ml-3 text-left whitespace-nowrap"
                        sidebar-toggle-item=""
                      >
                        Adidas
                      </span>
                      <svg
                        sidebar-toggle-item=""
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <ul id="dropdown-example" class="hidden py-2 space-y-2">
                      <li>
                        <a
                          href="#"
                          class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Products
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Billing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Invoice
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      aria-controls="dropdown-example"
                      data-collapse-toggle="dropdown-example"
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span
                        class="flex-1 ml-3 text-left whitespace-nowrap"
                        sidebar-toggle-item=""
                      >
                        Nike
                      </span>
                      <svg
                        sidebar-toggle-item=""
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <ul id="dropdown-example" class="hidden py-2 space-y-2">
                      <li>
                        <a
                          href="#"
                          class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Products
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Billing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Invoice
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      aria-controls="dropdown-example"
                      data-collapse-toggle="dropdown-example"
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span
                        class="flex-1 ml-3 text-left whitespace-nowrap"
                        sidebar-toggle-item=""
                      >
                        Calvin Kien
                      </span>
                      <svg
                        sidebar-toggle-item=""
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <ul id="dropdown-example" class="hidden py-2 space-y-2">
                      <li>
                        <a
                          href="#"
                          class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Products
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Billing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Invoice
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      aria-controls="dropdown-example"
                      data-collapse-toggle="dropdown-example"
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span
                        class="flex-1 ml-3 text-left whitespace-nowrap"
                        sidebar-toggle-item=""
                      >
                        GUSCCI
                      </span>
                      <svg
                        sidebar-toggle-item=""
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <ul id="dropdown-example" class="hidden py-2 space-y-2">
                      <li>
                        <a
                          href="#"
                          class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Products
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Billing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Invoice
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      aria-controls="dropdown-example"
                      data-collapse-toggle="dropdown-example"
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span
                        class="flex-1 ml-3 text-left whitespace-nowrap"
                        sidebar-toggle-item=""
                      >
                        HERMMES
                      </span>
                      <svg
                        sidebar-toggle-item=""
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <ul id="dropdown-example" class="hidden py-2 space-y-2">
                      <li>
                        <a
                          href="#"
                          class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Products
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Billing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Invoice
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      aria-controls="dropdown-example"
                      data-collapse-toggle="dropdown-example"
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span
                        class="flex-1 ml-3 text-left whitespace-nowrap"
                        sidebar-toggle-item=""
                      >
                        Flip Flops
                      </span>
                      <svg
                        sidebar-toggle-item=""
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <ul id="dropdown-example" class="hidden py-2 space-y-2">
                      <li>
                        <a
                          href="#"
                          class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Products
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Billing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Invoice
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
          <div className="col-span-4">
            <div className="h-full w-full">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 m-5">
                <div className="h-80 w-80">
                  <div>
                    <img src="flex-ui-assets/images/products/Nice.png" alt="" />
                  </div>
                  <div className="text-center text-xl">
                    <p className=" font-semibold">Nike</p>
                    <p className="font-light text-sm">
                      Older Kids’ Knit Football Tracksuit
                    </p>
                    <p className="font-light text-sm">500,000 kip</p>
                  </div>
                </div>
                <div className="h-80 w-80">
                  <div>
                    <img src="flex-ui-assets/images/products/Nice.png" alt="" />
                  </div>
                  <div className="text-center text-xl">
                    <p className=" font-semibold">Nike</p>
                    <p className="font-light text-sm">
                      Older Kids’ Knit Football Tracksuit
                    </p>
                    <p className="font-light text-sm">500,000 kip</p>
                  </div>
                </div>
                <div className="h-80 w-80">
                  <div>
                    <img src="flex-ui-assets/images/products/Nice.png" alt="" />
                  </div>
                  <div className="text-center text-xl">
                    <p className=" font-semibold">Nike</p>
                    <p className="font-light text-sm">
                      Older Kids’ Knit Football Tracksuit
                    </p>
                    <p className="font-light text-sm">500,000 kip</p>
                  </div>
                </div>
                <div className="h-80 w-80">
                  <div>
                    <img
                      src="flex-ui-assets/images/products/shoes.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="text-center text-xl">
                    <p className=" font-semibold">Nike</p>
                    <p className="font-light text-sm">
                      Older Kids’ Knit Football Tracksuit
                    </p>
                    <p className="font-light text-sm">500,000 kip</p>
                  </div>
                </div>
                <div className="h-80 w-80">
                  <div>
                    <img
                      src="flex-ui-assets/images/products/shoes.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="text-center text-xl">
                    <p className=" font-semibold">Nike</p>
                    <p className="font-light text-sm">
                      Older Kids’ Knit Football Tracksuit
                    </p>
                    <p className="font-light text-sm">500,000 kip</p>
                  </div>
                </div>
                <div className="h-80 w-80">
                  <div>
                    <img
                      src="flex-ui-assets/images/products/shoes.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="text-center text-xl">
                    <p className=" font-semibold">Nike</p>
                    <p className="font-light text-sm">
                      Older Kids’ Knit Football Tracksuit
                    </p>
                    <p className="font-light text-sm">500,000 kip</p>
                  </div>
                </div>
                <div className="h-80 w-80">
                  <div>
                    <img
                      src="flex-ui-assets/images/products/shoes.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="text-center text-xl">
                    <p className=" font-semibold">Nike</p>
                    <p className="font-light text-sm">
                      Older Kids’ Knit Football Tracksuit
                    </p>
                    <p className="font-light text-sm">500,000 kip</p>
                  </div>
                </div>
                <div className="h-80 w-80">
                  <div>
                    <img
                      src="flex-ui-assets/images/products/shoes.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="text-center text-xl">
                    <p className=" font-semibold">Nike</p>
                    <p className="font-light text-sm">
                      Older Kids’ Knit Football Tracksuit
                    </p>
                    <p className="font-light text-sm">500,000 kip</p>
                  </div>
                </div>
                <div className="h-80 w-80">
                  <div>
                    <img
                      src="flex-ui-assets/images/products/shoes.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="text-center text-xl">
                    <p className=" font-semibold">Nike</p>
                    <p className="font-light text-sm">
                      Older Kids’ Knit Football Tracksuit
                    </p>
                    <p className="font-light text-sm">500,000 kip</p>
                  </div>
                </div>
                <div className="h-80 w-80">
                  <div>
                    <img
                      src="flex-ui-assets/images/products/shoes.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="text-center text-xl">
                    <p className=" font-semibold">Nike</p>
                    <p className="font-light text-sm">
                      Older Kids’ Knit Football Tracksuit
                    </p>
                    <p className="font-light text-sm">500,000 kip</p>
                  </div>
                </div>
                <div className="h-80 w-80">
                  <div>
                    <img
                      src="flex-ui-assets/images/products/shoes.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="text-center text-xl">
                    <p className=" font-semibold">Nike</p>
                    <p className="font-light text-sm">
                      Older Kids’ Knit Football Tracksuit
                    </p>
                    <p className="font-light text-sm">500,000 kip</p>
                  </div>
                </div>
                <div className="h-80 w-80">
                  <div>
                    <img
                      src="flex-ui-assets/images/products/shoes.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="text-center text-xl">
                    <p className=" font-semibold">Nike</p>
                    <p className="font-light text-sm">
                      Older Kids’ Knit Football Tracksuit
                    </p>
                    <p className="font-light text-sm">500,000 kip</p>
                  </div>
                </div>
                <div className="h-80 w-80">
                  <div>
                    <img
                      src="flex-ui-assets/images/products/shoes.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="text-center text-xl">
                    <p className=" font-semibold">Nike</p>
                    <p className="font-light text-sm">
                      Older Kids’ Knit Football Tracksuit
                    </p>
                    <p className="font-light text-sm">500,000 kip</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End */}
    </div>
  );
};

export default index;
