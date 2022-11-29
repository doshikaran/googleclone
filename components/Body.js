import Image from "next/image";
import React, { useRef } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { CameraIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

function Body() {
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) {
      return;
    }
    router.push(`/search?term=${term}`);
  };
  const searchInputRef = useRef(null);

  return (
    <form className=" flex flex-col items-center mt-48 flex-grow">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
        height={100}
        width={300}
      />

      <div className=" flex items-center w-full mt-5 hover:shadow-lg rounded-full focus-within:shadow-lg max-w-md border border-gray-200 px-5 py-3 sm:max-w-xl lg:max-w-2xl ">
        <MagnifyingGlassIcon className=" h-5 w-5 mr-3 text-gray-500" />
        <input
          type="text"
          className=" focus:outline-none flex-grow"
          ref={searchInputRef}
        />
        <CameraIcon className=" h-5 w-5 mr-3 text-gray-500" />
      </div>

      <div className=" flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 ">
        <button className="button" onClick={search}>
          Google Search
        </button>
        <button className="button" onClick={search}>
          I'm feeling lucky
        </button>
      </div>
    </form>
  );
}

export default Body;
