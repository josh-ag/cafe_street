export interface AppContextInterface {
  menuList: MenuTypes[];
  customers: CustomerType[];
}

export type MenuTypes = {
  name: string;
  price: string;
  ID: string;
  description: string;
  is_fav: boolean;
  cover_img: any;
};

export type CustomerType = {
  name: string;
  rating: string;
  ID: string;
  profile: any;
  quote: string;
};
