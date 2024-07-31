"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import signin_icon from "../assets/signin_icon.svg";
import search_icon from "../assets/search_icon.svg";
import { useState } from "react";

/**
 * The `Appbar` component renders the top navigation bar for the application.
 * It includes the application logo, which is a link to the home page.
 */

export const Appbar = () => {
  const [isItemInCart, setItemInCart] = useState<boolean>(true);

  const pathName = usePathname();

  return (
    <div className="bg-[#FFF9EA] h-[108] p-8 flex items-center">
      <div className="container flex items-center justify-between">
        {/* logo */}
        <Link href={"/"}>
          <Image
            src={"/logo_coffe.svg"}
            alt="Cafe Street logo"
            className="w-auto h-auto"
            width={150}
            height={30}
          />
        </Link>

        <div className="flex justify-evenly items-center basis-2/5 ">
          <Link
            href={"/"}
            className={`btn text-[rgba(29,29,29,70%)] font-medium py-2 ${
              pathName === "/" &&
              "border-b-[rgb(255,203,69)] text-[#1D1D1D] border-b-2"
            } text-[18px]`}
          >
            Home
          </Link>
          <Link
            href={"/howitwork"}
            className={`btn text-[rgba(29,29,29,70%)] font-medium py-2 ${
              pathName.includes("/howitwork") &&
              "border-b-[rgb(255,203,69)] text-[#1D1D1D] border-b-2 font-medium"
            } text-[18px]`}
          >
            How it works
          </Link>
          <Link
            href={"/about"}
            className={`btn text-[rgba(29,29,29,70%)] font-medium py-2 ${
              pathName === "/about" &&
              "border-b-[rgb(255,203,69)] text-[#1D1D1D] border-b-2"
            } text-[18px]`}
          >
            About
          </Link>
          <Link
            href={"/contact"}
            className={`btn text-[rgba(29,29,29,70%)] font-medium py-2 ${
              pathName === "/contact" &&
              "border-b-[rgb(255,203,69)] text-[#1D1D1D] border-b-2"
            } text-[18px]`}
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <Link href={"/search"} className="mr-6 text-slate-50 font-medium">
            <Image priority src={search_icon} alt="search" />
          </Link>
          <Link href={"/signin"} className="mr-6 text-slate-50 font-medium">
            {/* <Image priority src={cart_icon} alt="carts" />
             */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66667 9.33333H25.0533C25.4259 9.33334 25.7943 9.41142 26.1349 9.56254C26.4754 9.71365 26.7805 9.93444 27.0305 10.2107C27.2805 10.4869 27.4698 10.8125 27.5863 11.1664C27.7027 11.5203 27.7437 11.8946 27.7067 12.2653L26.9067 20.2653C26.8409 20.9233 26.5329 21.5334 26.0426 21.9772C25.5523 22.4209 24.9146 22.6666 24.2533 22.6667H11.52C10.9033 22.6669 10.3056 22.4534 9.82859 22.0625C9.35162 21.6716 9.02487 21.1274 8.904 20.5227L6.66667 9.33333Z"
                stroke="#1D1D1D"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M21.3333 28H24M6.66667 9.33333L5.58667 5.00933C5.51444 4.721 5.34794 4.46508 5.11361 4.28221C4.87928 4.09934 4.59057 4.00001 4.29333 4H2.66667L6.66667 9.33333ZM10.6667 28H13.3333H10.6667Z"
                stroke="#1D1D1D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="27"
                cy="9"
                r="4.5"
                fill={isItemInCart ? "#FF912B" : "#ccc"}
                stroke="white"
              />
            </svg>
          </Link>
          <Link
            href={"/signin"}
            className="btn  flex items-center justify-center  bg-[#FFCB45]  py-2 px-8 font-bold rounded-full text-[14]"
          >
            <Image priority src={signin_icon} alt="signin" className="mr-2" />
            Sign-in
          </Link>
        </div>
      </div>
    </div>
  );
};
