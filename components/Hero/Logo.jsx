import React from 'react';

const logo = { image: 'flex-ui-assets/logos/bamboobi.png' };

export default function Logo() {
  return (
    <a className="block max-w-max" href="#">
      <img className="h-12 " src={logo.image} alt="" />
    </a>
  );
}
