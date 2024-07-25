"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import cart_icon from "../../assets/icons_cart.svg";
import signin_icon from "../../assets/signin_icon.svg";
import search_icon from "../../assets/search_icon.svg";

/**
 * The `Appbar` component renders the top navigation bar for the application.
 * It includes the application logo, which is a link to the home page.
 */

export const Appbar = () => {
  const pathName = usePathname();
  console.log(pathName);

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
            <Image priority src={cart_icon} alt="carts" />
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
