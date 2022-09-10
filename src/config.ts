// ----------------------------------------------------------------------
// react-query-config
export const reactQueryConfig = {
  defaultOptions: {
    queries: {
      // staleTime: 1 * 60 * 60 * 1000,
      // cacheTime: 5 * 60 * 60 * 1000,
      refetchOnWindowFocus: false,

      // cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
};

// ----------------------------------------------------------------------
// .env
export const backendUrl = process.env.NEXT_PUBLIC_URL;
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// ----------------------------------------------------------------------
// LAYOUT

export const HEADER = {
  MOBILE_HEIGHT: 64,
  MAIN_DESKTOP_HEIGHT: 88,
  DASHBOARD_DESKTOP_HEIGHT: 92,
  DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32,
};

export const NAVBAR = {
  BASE_WIDTH: 260,
  DASHBOARD_WIDTH: 280,
  DASHBOARD_COLLAPSE_WIDTH: 88,
  //
  DASHBOARD_ITEM_ROOT_HEIGHT: 48,
  DASHBOARD_ITEM_SUB_HEIGHT: 40,
  DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32,
};

export const ICON = {
  NAVBAR_ITEM: 22,
  NAVBAR_ITEM_HORIZONTAL: 20,
};
