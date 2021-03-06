import React from 'react';

export default function RightSide() {
  return (
    <div className="hidden md:absolute md:-right-80 md:top-1/2 md:transform md:-translate-y-1/2 md:translate-x-64 lg:translate-x-32 xl:-translate-x-7 md:mt-12 md:block">
      <img
        className="absolute w-1/3 transform -rotate-45 -translate-x-10 -translate-y-64 left-12 top-1/2"
        src="flex-ui-assets/logos/bamboobi.png"
        alt=""
      />
      <img
        className="relative z-10"
        src="flex-ui-assets/images/headers/mockup-light2.png"
        alt=""
      />
      <img
        className="absolute z-20 w-8/12 transform translate-x-4 top-6 left-36"
        src="flex-ui-assets/images/uxui/bamboobi_uxui.png"
      />
    </div>
  );
}
