import Image from "next/image";
import order from "../public/images/order 1.png";
import delivery from "../public/images/delivery 1.png";
import courier from "../public/images/courier 1.png";

const Item = ({ item }: any) => {
  return (
    <div className="flex flex-col  items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-semibold text-[rgba(29,29,29,1)] text-[32px]">
          {item.title}
        </h2>
        <h4 className="text-[rgba(29,29,29,70%)] w-[611px] text-[22px] text-center mt-[26px]">
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
    <div className="container flex flex-col w-auto h-auto  justify-center items-center my-[80px]">
      <h4 className="text-[rgb(255,203,69)] text-[22px]">How it works</h4>
      <h2 className="font-semibold text-[rgba(29,29,29,1)] text-[32px]">
        What We Serve
      </h2>

      <h4 className="text-[rgba(29,29,29,70%)] w-[611px] text-[22px] text-center mt-[26px]">
        Product Quality Is Our Priority, And Always Guarantees Halal And Safety
        Until It Is In Your Hands.
      </h4>

      <div className="mt-[80px]   flex justify-between items-center">
        {stepList.map((item: any, index: number) => (
          <Item item={item} key={index} />
        ))}
      </div>
    </div>
  );
};
