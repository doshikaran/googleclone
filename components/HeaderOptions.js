import React from "react";
import HeaderOption from "./HeaderOption";
import {
  MagnifyingGlassIcon,
  PlayCircleIcon,
  PhotoIcon,
  ShoppingBagIcon,
  NewspaperIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

function HeaderOptions() {
  return (
    <div className=" flex w-full text-gray-700 justify-evenly text-sm lg:justify-start lg:text-base lg:space-x-36 lg:pl-52 border-b-[1px]">
      <div className=" flex space-x-6">
        <HeaderOption Icon={MagnifyingGlassIcon} title="All" selected />
        <HeaderOption Icon={PlayCircleIcon} title="Video" />
        <HeaderOption Icon={PhotoIcon} title="Images" />
        <HeaderOption Icon={ShoppingBagIcon} title="Shopping" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={EllipsisVerticalIcon} title="More" />
      </div>

      <div className=" flex">
        <p className=" link">Settings</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
