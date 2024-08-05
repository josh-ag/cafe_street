import { CustomerType, MenuTypes } from "@/types";
import Mie_Ramen from "@/public/images/Mie Ramen.png";
import Rotie_Bakar from "@/public/images/Roti Bakar.png";
import Salad_Tahu from "@/public/images/Salad Tahu.png";
import Spaghetti from "@/public/images/spaghetti.png";
import customer1 from "@/public/images/customer1.png";
import customer2 from "@/public/images/customer2.png";

export const MenuList: MenuTypes[] = [
  {
    name: "Mie Ramen",
    description: "Lorem ipsum dolor",
    is_fav: true,
    ID: "001",
    price: "20.02",
    cover_img: Mie_Ramen,
  },

  {
    name: "Roti Bakar",
    description: "Lorem ipsum dolor",
    is_fav: false,
    ID: "002",
    price: "20.02",
    cover_img: Rotie_Bakar,
  },

  {
    name: "Salad Tahu",
    description: "Lorem ipsum dolor",
    is_fav: false,
    ID: "003",
    price: "20.02",
    cover_img: Salad_Tahu,
  },

  {
    name: "Spaghetti",
    description: "Lorem ipsum dolor",
    is_fav: false,
    ID: "004",
    price: "20.02",
    cover_img: Spaghetti,
  },
];

export const Customers: CustomerType[] = [
  {
    name: "Naura Silvana",
    rating: "5",
    ID: "1",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
    profile: customer1,
  },

  {
    name: "Azura",
    rating: "4",
    ID: "2",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
    profile: customer2,
  },
];
