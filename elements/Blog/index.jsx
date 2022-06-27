import React from 'react';
import Post from '../../components/common/Post';

export default function index() {
  return (
    <section
      className="py-16 bg-white md:py-24 lg:pb-52"
      style={{
        backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center mb-16">
          <div className="w-full mb-8 md:w-3/4 md:mb-0">
            <span className="inline-block px-2 py-px mb-4 text-xs font-medium leading-5 text-yellow-500 uppercase bg-yellow-100 rounded-full shadow-sm">
              Blog
            </span>
            <h3 className="mb-4 text-4xl font-bold leading-tight tracking-tighter md:text-5xl text-darkCoolGray-900">
              Facebook Post
            </h3>
            <p className="text-lg font-medium md:text-xl text-coolGray-500">
              With our e-commerce platform, online user experience and offline
              user experience will be seemless integrated.
            </p>
          </div>
          <div className="w-full md:w-1/4">
            <a
              className="flex items-center justify-center px-4 py-2 ml-auto text-sm font-medium leading-5 bg-yellow-500 rounded-md text-yellow-50 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 md:max-w-max"
              href="#"
            >
              View All Posts
            </a>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <Post />
        </div>
      </div>
    </section>
  );
}
