import { CustomerType, MenuTypes } from "@/types";
import Link from "next/link";
import Image from "next/image";

import { useContext } from "react";
import { AppContext } from "@/context/appContext";

const MenuItem = ({ item }: { item: MenuTypes }) => {
  const { customer_fav, addOrRemoveFromCustomerFav } = useContext(AppContext);

  // console.log("CustomerFavs: ", customer_fav);
  const isFound = customer_fav.find((i) => i == item.ID);

  return (
    <div className="card shadow-md  w-[280px] h-auto min-h-[371px] bg-[#F1F1F1] rounded-[10px] gap-6 cursor-auto flex flex-col items-center justify-between">
      {/* Card--Cover--Header  */}

      <div className="basis-3/4 flex items-center justify-center ">
        <Image src={item.cover_img} alt={`${item.name} cover image`} priority />
      </div>

      {/* Card--Content */}
      <div className="footer h-[112px] basis-2/4  rounded-tl-[40%] rounded-tr-[40%] w-full  bg-[#FFF] flex  flex-col gap-[13px] items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-1 mt-[22px]">
          <h4 className="text-[20px] font-semibold text-center">{item.name}</h4>
          <p className="text-[16px] text-center text-[#2c2c2cc5]">
            {item.description}
          </p>
        </div>

        <div className="flex w-full items-center justify-between px-[22px] mb-[22px]">
          <h4 className="text-[20px] font-semibold">$ {item.price}</h4>
          <button
            className="btn"
            onClick={() => addOrRemoveFromCustomerFav(item.ID)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9646 6.12862C8.29143 0.454909 0.857147 3.54577 0.857147 9.72634C0.857147 14.3675 11.0491 21.6275 11.9646 22.5715C12.8863 21.6275 22.5714 14.3675 22.5714 9.72634C22.5714 3.59262 15.6446 0.454909 11.9646 6.12862Z"
                fill={isFound ? "#FFCB45" : "rgba(29,29,29,70%)"}
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const CustomerItem = ({ customer }: { customer: CustomerType }) => {
  return (
    <div className="flex rounded-[10px] min-w-[452px] min-h-[210px]  h-auto justify-center flex-col gap-[24px] p-6 bg-[#F1F1F1]">
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
          {/* <h4 className="text-[rgb(255,203,69)] text-[22px]">
            {customer.rating}
          </h4> */}
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
  customer_fav,
}: {
  menuList: MenuTypes[];
  customers: CustomerType[];
  customer_fav: string[];
}) => {
  return (
    <div className="flex flex-col w-full  mb-[6rem]">
      <h4 className="text-[rgb(255,203,69)] text-center font-semibold text-[18px] mb-2">
        Our Menus
      </h4>
      <h2 className="font-semibold text-center text-[rgba(29,29,29,1)] text-[18px] md:text-[22px]">
        Our Popular Menus
      </h2>

      <h4 className="text-[rgba(29,29,29,70%)] w-auto md:w-[611px] text-[16px] md:text-[18px] text-center mt-2 self-center">
        Our Menus has been carefully curated by the industry&apos;s leading
        Nutritionists and experts.
      </h4>

      <div className="mt-[80px]  flex justify-center lg:justify-between items-center gap-6 flex-wrap lg:flex-nowrap">
        {menuList.map((item: any, index: number) => (
          <MenuItem item={item} key={index} />
        ))}
      </div>

      {/* More Menu  */}
      <div className="mt-[6rem] gap-[1rem]">
        <div className="w-full mb-[1rem] flex items-center justify-center">
          <Link
            href={"/more_menu"}
            className="btn bg-[#FFCB45]   py-2 px-8 font-bold rounded-full text-[14]"
          >
            More Menu
          </Link>
        </div>

        <div className="w-full flex items-center justify-between  gap-[2rem] flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-1/2 flex flex-col items-stretch">
            <div className={`w-full bg-menu5 bg-cover bg-no-repeat h-80`} />
            <div className="flex justify-between">
              <div className={`w-full bg-menu6 bg-cover bg-no-repeat h-80`} />
              <div className={`w-full bg-menu7 bg-cover bg-no-repeat h-80`} />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-[30px]">
            <div className="flex flex-col">
              <h4 className="text-[rgb(255,203,69)] text-[18px] font-semibold">
                What they say
              </h4>
              <h2 className="font-semibold text-[rgba(29,29,29,1)] text-[18px] md:text-[22px]">
                What Our Customers Say About Us
              </h2>
            </div>

            <div className="w-full flex items-center p-2 gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide">
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
