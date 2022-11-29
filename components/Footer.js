import React from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

function Footer() {
  return (
    <footer className=" grid w-full divide-y=[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500 ">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense p-4">
        <div className=" flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2 link">
          🌱Carboon neutral since 2007
        </div>
        <div className=" flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p className=" link">Advertising</p>
          <p className=" link">Business</p>
          <p className=" link">How Search Works</p>
        </div>
        <div className=" flex justify-center space-x-8 whitespace-nowrap md:ml-auto">
          <p className=" link">Privacy</p>
          <p className=" link">Terms</p>
          <p className=" link">Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
