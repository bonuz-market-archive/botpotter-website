// ----------------------------------------------------------------------

export type MenuItemProps = {
  title: string;
  path: string;
  children?: {
    items: {
      title: string;
      path: string;
    }[];
  }[];
};

export type MenuProps = {
  navConfig: MenuItemProps[];
  footer?:boolean
};
