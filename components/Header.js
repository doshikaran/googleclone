import React from "react";
import Avatar from './Avatar'
import {ListBulletIcon} from "@heroicons/react/24/solid"

function Header() {
  return (
    <header className=" flex items-center justify-between p-5 text-sm">
      <div className=" flex space-x-5 items-center">
        <p className=" link">About</p>
        <p className=" link">Store</p>
      </div>
      <div className="  flex space-x-5 items-center">
        <p className=" link">Gmail</p>
        <p className=" link">Images</p>

        <ListBulletIcon className=" h-10 w-10 rounded-full cursor-pointer hover:bg-gray-100 p-2"/>

        <Avatar url="https://i.pinimg.com/564x/8c/65/b0/8c65b0ac8d2ba142479fc45b9b263195.jpg"/>
      </div>
    </header>
    
  );
}

export default Header;
