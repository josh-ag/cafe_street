export interface AppContextInterface {
  menuList: MenuTypes[];
}

export type MenuTypes = {
  name: string;
  price: string;
  ID: string;
  description: string;
  is_fav: boolean;
  cover_img: any;
};
