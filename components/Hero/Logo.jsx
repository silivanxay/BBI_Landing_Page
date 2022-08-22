import Link from "next/link";
import React from "react";
import Image from "next/image";
import IMG from "../../public/flex-ui-assets/icons/bamboobi.png"

export default function Logo(props) {
  return (
    <Link href="/">
      <a className="block "  >

        <Image
          onClick={props.onClick}
          // src={logo.image}
          src={IMG}
          // width="70"
          // height='40'
          alt="img"
        /> 

      </a>
    </Link>
  );
}
