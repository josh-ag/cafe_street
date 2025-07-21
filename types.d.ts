export interface AppContextInterface {
  menuList: MenuTypes[];
  customers: CustomerType[];
  customer_fav: any;
  addOrRemoveFromCustomerFav: any;
}

export type MenuTypes = {
  name: string;
  price: string;
  ID: string;
  description: string;
  cover_img: any;
};

export type CustomerType = {
  name: string;
  rating: string;
  ID: string;
  profile: any;
  quote: string;
};
