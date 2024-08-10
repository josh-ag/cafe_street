import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import icon_fb from "@/public/icon_fb.svg";
import icon_ig from "@/public/icon_ig.svg";
import icon_twitter from "@/public/icon_twitter.svg";

type FooterListType = { title: string; sub_list: ItemType[] };
type ItemType = { name: string; path?: string };

const FooterItem = ({ item }: { item: FooterListType }) => {
  return (
    <div className="flex flex-col w-full  gap-[20px]">
      <h2 className="text-[20px] text-[#1D1D1D] font-bold">{item.title}</h2>

      {/* //sub_list  */}
      <div className="flex flex-col gap-[16px]">
        {item.sub_list.map((item: ItemType, index: number) =>
          item.path ? (
            <Link
              href={item?.path}
              key={index}
              className="text-[18px] text-[rgba(29,29,29,70%)] font-normal"
            >
              {item.name}
            </Link>
          ) : (
            <h4 key={index} className="">
              {item.name}
            </h4>
          )
        )}
      </div>
    </div>
  );
};

export const Footer = () => {
  const footerList = [
    {
      title: "Company",
      sub_list: [
        { name: "About us", path: "/about" },
        { name: "Career", path: "/career" },
        { name: "How it works", path: "/how-it-work" },
      ],
    },

    {
      title: "Policy",
      sub_list: [
        { name: "FAQ", path: "/faq" },
        { name: "Privacy", path: "/privacy" },
        { name: "Shipping", path: "/shipping" },
      ],
    },

    {
      title: "Get In Touch",
      sub_list: [
        { name: "+62 896 7311 2766" },
        { name: "food@cafe-street.com", path: "/privacy" },
      ],
    },
  ];

  return (
    <div className="flex-1 flex  w-full bg-footer_bg items-center  bg-cover bg-center bg-no-repeat h-auto py-8 min-h-[500px]">
      <div className="container h-auto w-full flex flex-col gap-[45px]">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-[91px]">
          <div className="basis-1/3 flex gap-8 flex-col justify-center">
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

            <h2 className="center text-[20px] text-[rgba(29,29,29,70)] w-3/4">
              Jalan Semangka Raya, Telaga Murni,Cikarang Barat, Kab. Bekasi
            </h2>

            <div className="flex items-center gap-[24px]">
              <Button
                asChild
                variant={"ghost"}
                className="bg-white w-[48px] h-[48px] rounded-[32px] shadow-lg"
              >
                <Link href={"/"}>
                  <Image src={icon_ig} alt="icon facebook" />
                </Link>
              </Button>
              <Button
                asChild
                variant={"ghost"}
                className="bg-[rgb(255,203,69)] w-[48px] h-[48px] rounded-[32px] shadow-lg"
              >
                <Link href={"/"}>
                  <Image src={icon_fb} alt="icon facebook" />
                </Link>
              </Button>
              <Button
                asChild
                variant={"ghost"}
                className="bg-white w-[48px] h-[48px] rounded-[32px] shadow-lg"
              >
                <Link href={"/"}>
                  <Image src={icon_twitter} alt="icon facebook" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="basis-2/3 flex w-full justify-start">
            {footerList.map((item: any, index: number) => (
              <FooterItem item={item} key={index} />
            ))}
          </div>
        </div>

        <div className="h-1 bg-transparent w-[100%] border-b border-b-[rgba(29,29,29,50%)]" />

        <div className="text-[16px] text-[#1D1D1D] font-normal text-center">
          © 2024 Cafe-Street. ALL RIGHT RESERVED.
        </div>
      </div>
    </div>
  );
};
