import { MenuTypes } from "@/types";
import Mie_Ramen from "@/public/images/Mie Ramen.png";
import Rotie_Bakar from "@/public/images/Roti Bakar.png";
import Salad_Tahu from "@/public/images/Salad Tahu.png";
import Spaghetti from "@/public/images/spaghetti.png";

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
