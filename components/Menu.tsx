import { CustomerType, MenuTypes } from "@/types";
import Link from "next/link";
import Image from "next/image";

import menu5 from "@/public/images/menu5.png";
import menu6 from "@/public/images/menu6.png";
import menu7 from "@/public/images/menu7.png";

const MenuItem = ({ item }: { item: MenuTypes }) => {
  return (
    <div className="card shadow-md  w-[280px] h-[371px] bg-[#F1F1F1] rounded-[10px] gap-6 cursor-auto flex flex-col items-center justify-between">
      {/* Card--Cover--Header  */}

      <div className="basis-3/4 flex items-center justify-center ">
        <Image src={item.cover_img} alt={`${item.name} cover image`} priority />
      </div>

      {/* Card--Content */}
      <div className="footer h-[112px] basis-2/4  rounded-tl-[40%] rounded-tr-[40%] w-full  bg-[#FFF] flex  flex-col gap-[13px] items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-1 mt-[22px]">
          <h4 className="text-[20px] font-semibold text-center">{item.name}</h4>
          <p className="text-[16px] text-center color-[rgba(29,29,29,70%)]">
            {item.description}
          </p>
        </div>

        <div className="flex w-full items-center justify-between px-[22px] mb-[22px]">
          <h4 className="text-[20px] font-semibold">$ {item.price}</h4>
          <Link href={`/carts/${item.ID}`} className="btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9646 6.12862C8.29143 0.454909 0.857147 3.54577 0.857147 9.72634C0.857147 14.3675 11.0491 21.6275 11.9646 22.5715C12.8863 21.6275 22.5714 14.3675 22.5714 9.72634C22.5714 3.59262 15.6446 0.454909 11.9646 6.12862Z"
                fill={item?.is_fav ? "#FFCB45" : "rgba(29,29,29,70%)"}
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CustomerItem = ({ customer }: { customer: CustomerType }) => {
  return (
    <div className="flex rounded-[10px] min-w-[452px] min-h-[210px]  justify-center flex-col gap-[24px] p-6 bg-[#F1F1F1]">
      {/* Card_Header */}
      <div className="flex gap-4 items-center">
        <Image
          src={customer.profile}
          alt={`${customer.name} profile`}
          width={90}
        />
        <div className="flex flex-col">
          <h2 className="font-semibold text-[rgba(29,29,29,1)] text-[20px]">
            {customer.name}
          </h2>
          <h4 className="text-[rgb(255,203,69)] text-[22px]">
            {customer.rating}
          </h4>
        </div>
      </div>

      {/* Card_Body */}
      <p className="text-[16px] text-center color-[rgba(29,29,29,70%)]">
        {customer.quote}
      </p>
    </div>
  );
};

export const Menus = ({
  menuList,
  customers,
}: {
  menuList: MenuTypes[];
  customers: CustomerType[];
}) => {
  return (
    <div className="container flex flex-col w-2/3 items-center justify-center  mb-[80px]">
      <h4 className="text-[rgb(255,203,69)] text-[22px]">Our Menus</h4>
      <h2 className="font-semibold text-[rgba(29,29,29,1)] text-[32px]">
        Our Popular Menus
      </h2>

      <h4 className="text-[rgba(29,29,29,70%)] w-[611px] text-[22px] text-center mt-[26px]">
        Our Menus has been carefully curated by the industry&apos;s leading
        Nutritionists and experts.
      </h4>

      <div className="mt-[80px]   flex justify-between items-center gap-6">
        {menuList.map((item: any, index: number) => (
          <MenuItem item={item} key={index} />
        ))}
      </div>

      {/* More Menu  */}

      <div className="flex w-full flex-col justify-between mt-[80px] gap-[45px]">
        <Link
          href={"/more_menu"}
          className="btn self-center  flex items-center justify-center  bg-[#FFCB45]  py-2 px-8 font-bold rounded-full text-[14]"
        >
          More Menu
        </Link>

        <div className="flex-1 w-full flex items-center  gap-[15px]">
          <div className="flex-1 flex flex-col items-stretch">
            <Image src={menu5} className="flex-1 w-full" alt="menu 5" />
            <div className="flex items-center">
              <Image src={menu6} alt="menu 6" className="h-full w-full" />
              <Image src={menu7} alt="menu 7" className="h-full w-full" />
            </div>
          </div>

          <div className="flex-1 w-full flex flex-col gap-[30px] overflow-x-auto overflow-y-hidden scrollbar-hide">
            <div className="flex flex-col">
              <h4 className="text-[rgb(255,203,69)] text-[22px]">
                What they say
              </h4>
              <h2 className="font-semibold text-[rgba(29,29,29,1)] text-[32px]">
                What Our Customers Say About Us
              </h2>
            </div>

            <div className="w-full flex items-center p-2 gap-4">
              {customers.map((customer: CustomerType, index) => (
                <CustomerItem customer={customer} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
