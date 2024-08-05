"use client";

import Link from "next/link";

export const BannerComponent = () => {
  return (
    <div className="container flex flex-col gap-[30px] items-center justify-center h-[332px] bg-banner bg-cover bg-center bg-no-repeat rounded-[10px] mb-[80px]">
      <h2 className="font-semibold text-[#FFF] text-[32px] text-center w-[35%]">
        Join our member and get discount up to 50%
      </h2>

      <Link
        href="/signup"
        className="btn inline-block items-center justify-center  bg-[#FFCB45]  py-2 px-8 font-bold rounded-full text-[14] mt-[21px]"
      >
        Sign Up
      </Link>
    </div>
  );
};
