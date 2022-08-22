import React from "react";
export default function Navbar() {
  return (
    <div className="navbar bg-base-300">
      <div className="flex flex-1 px-2 justify-between">
        <div>Event Left</div>
        <select className="select w-full max-w-xs">
          {/* <option disabled selected>
            Pick your favorite Simpson
          </option> */}
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
        <div>Event Right</div>
      </div>
    </div>
  );
}
