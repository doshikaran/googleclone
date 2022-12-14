import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function PaginationButtons() {
  const router = useRouter();
  const StartIndex = Number(router.query.start);

  return (
    <div className=" flex max-w-lg justify-between text-blue-700 mb-10">
      {StartIndex >= 10 && (
        <Link href={`/search?term=${router.query.term}&start=${StartIndex - 10}`}>
          <div className=" flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <ChevronLeftIcon className=" h-5" />
            <p>Previous </p>
          </div>
        </Link>
      )}
       <Link href={`/search?term=${router.query.term}&start=${StartIndex + 10}`}>
          <div className=" flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <ChevronRightIcon className=" h-5" />
            <p>Next </p>
          </div>
        </Link>
    </div>
  );
}

export default PaginationButtons;
