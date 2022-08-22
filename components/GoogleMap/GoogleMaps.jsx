import React from "react";

const GoogleMaps = () => {
  return (
    <div>

      {/* <div className="w-full h-96">

      </div>  */}
      <iframe
        className="w-full h-96"
        src="https://maps.google.com/maps?q=Bamboo%20BI%20E%20commerce%20agency&t=&z=17&ie=UTF8&iwloc=&output=embed"
        frameBorder={0}
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        title="Bamboo BI"
      /> 
     
    </div>
  );
};
export default GoogleMaps;
