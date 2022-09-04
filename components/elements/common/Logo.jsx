import Link from "next/link";
import React from "react";
import Image from "next/image";
import IMG from "../../../public/flex-ui-assets/logos/bamboobi.webp";

export default function Logo(props) {
  return (
    <Link href="/">
      <a className="block ">
        <Image
          onClick={props.onClick}
          // src={logo.image}
          src={IMG}
          // scrset={("IMG", "70px", "40px")}
          width="70"
          height="40"
          alt="img"
          layout="fixed"
          priority="true"
        />
      </a>
    </Link>
  );
}
