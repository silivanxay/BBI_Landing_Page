// import React from "react";

// export default function RightSide() {
//   return (
//     <div className="hidden md:absolute md:-right-80 md:top-1/2 md:transform md:-translate-y-1/2 md:translate-x-64 lg:translate-x-32 xl:-translate-x-7 md:mt-12 md:block">
//       <img
//         className="absolute w-1/3 transform -rotate-45 -translate-x-10 -translate-y-64 left-12 top-1/2"
//         src="flex-ui-assets/logos/bamboobi.webp"
//         alt="image"
//         width="690"
//         hight="460"
//       />
//       <img
//         className="relative z-10"
//         src="flex-ui-assets/images/headers/mockup-light2.webp"
//         alt="image"
//       />
//       <img
//         className="absolute z-20 w-8/12 transform translate-x-4 top-6 left-36"
//         src="flex-ui-assets/images/uxui/bamboobi_uxui.webp"
//         alt="image"
//       />
//     </div>
//   );
// }

import Image from "next/image";
import React from "react";
import IMG1 from "../../public/flex-ui-assets/logos/bamboobi.webp";
import IMG2 from "../../public/flex-ui-assets/images/headers/mockup-light2.webp";
import IMG3 from "../../public/flex-ui-assets/images/uxui/bamboobi_uxui.webp";

export default function RightSide() {
  return (
    <div className="hidden md:absolute md:-right-80 md:top-1/2 md:transform md:-translate-y-1/2 md:translate-x-64 lg:translate-x-32 xl:-translate-x-7 md:mt-12 md:block">
      {/* <div className="absolute w-1/3 transform -rotate-45 -translate-x-10 -translate-y-64 left-12 top-1/2">
        <Image src={IMG1} alt="image" />
      </div>
      <div className="relative z-10">
        <Image src={IMG2} alt="image" />
      </div>
      <div className="absolute z-20 w-8/12 transform translate-x-4 top-6 left-36">
        <Image src={IMG3} alt="image" />
      </div> */}
    </div>
  );
}
