import React from "react";

function Avatar({ url, className }) {
  return (
    <img
      loading="lazy"
      src={url}
      alt="pp"
      className={`h-10 w-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 hover:border-stone-300 hover:border-2 ${className}`}
    />
  );
}

export default Avatar;
