import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  XMarkIcon,
  CameraIcon,
  MagnifyingGlassIcon,
  ListBulletIcon,
  Cog6ToothIcon
} from "@heroicons/react/24/solid";
import Avatar from './Avatar'
import HeaderOptions from "./HeaderOptions";


function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) {
      return;
    }
    router.push(`/search?term=${term}`);
  };

  return (
    <header className=" sticky top-0 bg-white">
      <div className=" flex w-full p-6 items-center ">
        <Image
          src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          height={40}
          width={120}
          className="cursor-pointer"
          alt="Google logo"
          onClick={() => {
            router.push("/");
          }}
        />
        <form className=" flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">
          <input
            type="text"
            ref={searchInputRef}
            className=" flex-grow w-full focus:outline-none"
          />
          <XMarkIcon
            className=" h-6 sm:mr-3 cursor-pointer text-gray-500 transition duration-100 hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <CameraIcon className=" h-6 mr-3 hidden sm:inline-flex text-amber-200 pl-4 border-gray-300 border-l-2 " />
          <MagnifyingGlassIcon className=" h-6 hidden sm:inline-flex text-blue-500" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>

        <div className=" flex items-center ml-auto">
        <Cog6ToothIcon className=" h-10 w-10 rounded-full cursor-pointer hover:bg-gray-100 p-2 hidden sm:inline-flex"/>
        <ListBulletIcon className=" h-10 w-10 rounded-full cursor-pointer hover:bg-gray-100 p-2 hidden sm:inline-flex"/>
        <Avatar url="https://i.pinimg.com/564x/8c/65/b0/8c65b0ac8d2ba142479fc45b9b263195.jpg" className=" ml-auto"/>
        </div>
      </div>

      {/* headeroption */}
      <HeaderOptions/>
    </header>
  );
}

export default SearchHeader;
