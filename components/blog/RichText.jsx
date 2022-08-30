import React from "react";

export default function RichText(props) {
  return (
    <div>
      <p className="pb-5 text-lg md:text-xl text-coolGray-900 dark:text-white">
        {/* {props.richText}b  */}
        <div dangerouslySetInnerHTML={{ __html: props.richText }} />
      </p>
    </div>
  );
}
