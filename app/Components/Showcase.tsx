import Link from "next/link";
import Image from "next/image";
import menu_image from "../../public/images/showcase_image.png";

export const ShowCase = () => {
  return (
    <div className="bg-[#FFF9EA] flex h-[800px] items-center justify-between bg-cover bg-center bg-no-repeat bg-showcase">
      <div className="container flex items-center justify-between">
        <div className="flex-1">
          <div>
            <h2 className="font-semibold text-[rgba(29,29,29,1)] text-[48px]">
              Be The Fastest In
            </h2>
            <h2 className="font-semibold text-[48px] text-[rgba(29,29,29,1)]">
              Delivery Your <span className="text-[#FFCB45]">Food</span>
            </h2>
          </div>

          <p className="text-[rgba(29,29,29,70%)] w-2/4 mt-[21px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet
          </p>

          <Link
            href="/get-started"
            className="btn inline-block items-center justify-center  bg-[#FFCB45]  py-2 px-8 font-bold rounded-full text-[14] mt-[21px]"
          >
            Get started
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <Image
            priority
            src={menu_image}
            alt="showcase menu"
            className="w-auto resize-none"
          />
        </div>
      </div>
    </div>
  );
};
