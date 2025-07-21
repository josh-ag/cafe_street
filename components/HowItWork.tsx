import Image from "next/image";
import order from "../public/images/order 1.png";
import delivery from "../public/images/delivery 1.png";
import courier from "../public/images/courier 1.png";

const Item = ({ item }: any) => {
  return (
    <div className="w-2/4 lg:w-1/4 h-auto min-h-[371px]rounded-[10px] cursor-auto flex flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-semibold text-center text-[rgba(29,29,29,1)] text-[18px] md:text-[22px]">
          {item.title}
        </h2>
        <h4 className="text-[rgba(29,29,29,70%)]  text-[16px] md:text-[18px] text-center">
          {item.text}
        </h4>
      </div>

      <Image src={item.img_path} alt={item.title} className="mt-[24px]" />
    </div>
  );
};

type ItemType = {
  title: string;
  text: string;
  img_path: any;
};

export const HowItWork = () => {
  const stepList: ItemType[] = [
    {
      title: "Easy To Order",
      img_path: order,
      text: "You only order through the app",
    },
    {
      title: "Fastest Delivery",
      img_path: delivery,
      text: "Delivery will be on time",
    },

    {
      title: "Best Quality",
      img_path: courier,
      text: "The best quality of food for you",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 my-[6rem]">
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-[#ffcb47] text-[18px] font-semibold mb-2">
          How it works
        </h4>
        <h2 className="font-semibold text-[rgba(29,29,29,1)] text-[18px] md:text-[22px]">
          What We Serve
        </h2>

        <h4 className="text-[rgba(29,29,29,70%)] md:w-[611px] text-[16px] md:text-[18px] text-center mt-2">
          Product Quality Is Our Priority, And Always Guarantees Halal And
          Safety Until It Is In Your Hands.
        </h4>
      </div>

      <div className="w-full mt-[2rem] flex justify-center items-center gap-[4rem] flex-wrap lg:justify-between">
        {stepList.map((item: any, index: number) => (
          <Item item={item} key={index} />
        ))}
      </div>
    </div>
  );
};
