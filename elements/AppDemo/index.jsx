import React from 'react';
import Video from '../../components/common/Video';

export default function index() {
  return (
    <section className="py-24 transition-all bg-image-light dark:bg-image-dark">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <span className="inline-block px-2 py-px mb-4 text-xs font-medium leading-5 text-white bg-yellow-500 rounded-full shadow-sm">
            Application
          </span>
          <h3 className="max-w-5xl mx-auto mb-10 text-3xl font-bold leading-tight tracking-tighter md:text-4xl text-coolGray-900 dark:text-white">
            Great Sale starts with your Online Shop
          </h3>
          <div className="relative mx-auto mb-10 max-w-max">
            <img
              className="absolute w-5/12 text-yellow-400 transform -translate-y-1/2 top-1/2"
              src="flex-ui-assets/elements/cirlcle-pattern.svg"
              alt=""
            />
            <img
              className="absolute w-5/12 text-blue-500 transform -translate-y-1/2 -right-24 top-1/2 "
              src="flex-ui-assets/elements/blob.svg"
              alt=""
            />
            <Video
              src="flex-ui-assets/videos/ecom-mb.mp4"
              className="absolute z-20 w-5/6 -mt-1 transform -translate-x-1/2 -translate-y-1/2 p-7 left-1/2 top-1/2 h-10/12"
            />
            <img
              className="relative z-10"
              src="flex-ui-assets/elements/applications/macbook-video.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
