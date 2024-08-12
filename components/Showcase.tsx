import Link from "next/link";
import Image from "next/image";
import menu_image from "../public/images/showcase_image.png";

export const ShowCase = () => {
  return (
    <div className="bg-[#FFF9EA] min-h-[700px] h-auto bg-cover bg-center bg-no-repeat flex py-8 items-center justify-center bg-showcase">
      <div className="container flex items-center justify-center flex-wrap-reverse lg:flex-nowrap gap-10">
        <div className="flex flex-col  w-full gap-2">
          <div>
            <h2 className="font-semibold text-[rgba(29,29,29,1)] text-[28px] md:text-[32px] lg:text-[48px]">
              Be The Fastest In
            </h2>
            <h2 className="font-semibold text-[28px] md:text-[32px] lg:text-[48px] text-[rgba(29,29,29,1)]">
              Delivery Your <span className="text-[#FFCB45]">Food</span>
            </h2>
          </div>

          <p className="text-[rgba(29,29,29,70%)] w-2/4 text-[18px] lg:text-[22px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet
          </p>

          <Link
            href="/get-started"
            className="btn self-start inline-block items-center justify-center  bg-[#FFCB45]  py-2 px-8 font-bold rounded-full text-[14px] lg:text-[16px] mt-[21px]"
          >
            Get started
          </Link>
        </div>

        <div className="flex w-full items-center justify-center">
          <Image
            priority
            src={menu_image}
            alt="showcase menu"
            className="lg:scale-75"
          />
        </div>
      </div>
    </div>
  );
};
