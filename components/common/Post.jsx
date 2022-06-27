import React from 'react';

export default function Post() {
  return (
    <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
      <a className="block mb-6 overflow-hidden rounded-md" href="#">
        <img
          className="w-full"
          src="flex-ui-assets/images/blog/BOPIS.png"
          alt=""
        />
      </a>
      <p className="mb-2 font-medium text-coolGray-500">
        Bui PSV • 16 May 2022
      </p>
      <a
        className="inline-block mb-4 text-2xl font-bold leading-tight text-coolGray-800 hover:text-coolGray-900 hover:underline"
        href="#"
      >
        A small business is only as good as its tools and it is totally true.
      </a>
      <p className="mb-4 text-base font-medium md:text-lg text-coolGray-400">
        We've all experienced the chaos of multiple pick up or delivery process,
        tracking and insight tools...
      </p>
      <a
        className="inline-block px-3 py-1 text-xs font-medium leading-5 text-yellow-500 uppercase bg-yellow-100 rounded-full shadow-sm hover:text-yellow-600 hover:bg-yellow-200"
        href="#"
      >
        Technology
      </a>
    </div>
  );
}
