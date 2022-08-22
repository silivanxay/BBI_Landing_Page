import React from "react";
const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <img
          src="flex-ui-assets/logos/spinner.gif"
          style={{
            width: "50px",
            height: "50px",
            margin: "auto",
            display: "block",
          }}
          alt="image"
        />
        <h6 className="mt-2 text-black">ກະລຸນາລໍຖ້າ . . .</h6>
      </div>
    </div>
  );
};

export default LoadingPage;
