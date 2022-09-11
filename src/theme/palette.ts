import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

export type ColorSchema =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

declare module '@mui/material/styles/createPalette' {
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
}

declare module '@mui/material' {
  interface Color {
    0: string;
    500_8: string;
    500_12: string;
    500_16: string;
    500_24: string;
    500_32: string;
    500_48: string;
    500_56: string;
    500_80: string;
  }
}

// SETUP COLORS
const PRIMARY = {
  lighter: '#ffddb4',
  light: '#ffab84',
  main: '#CA7B57',
  dark: '#964e2d',
  darker: '#632403',
};
const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#fff',
  main: '#fff',
  dark: '#ccc',
  darker: '#091A7A',
};
const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
};
const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#73FF31',
  dark: '#229A16',
  darker: '#08660D',
};
const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
};
const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF3131',
  dark: '#B72136',
  darker: '#7A0C2E',
};

const GREY = {
  // 0: '#FFFFFF',
  // 100: '#F9FAFB',
  // 200: '#F4F6F8',
  // 300: '#DFE3E8',
  // 400: '#C4CDD5',
  // 500: '#919EAB',
  // 600: '#637381',
  // 700: '#454F5B',
  // 800: '#212B36',
  // 900: '#161C24',

  0: '#FFFFFF',
  100: '#F5F5F5', //figma
  200: '#DBDBDB', // figma
  300: '#D9D9D9', // figma
  400: '#CFCFCF', // figma
  500: '#919EAB',
  600: '#707070', // figma
  700: '#454F5B',
  800: '#212B36',
  900: '#181818', // figma
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
};

const COMMON = {
  common: {
    black: '#000',
    white: '#fff',
  },
  primary: {
    ...PRIMARY,
    contrastText: '#fff',
  },
  secondary: {
    ...SECONDARY,
    contrastText: '#000',
  },
  info: {
    ...INFO,
    contrastText: '#fff',
  },
  success: {
    ...SUCCESS,
    contrastText: GREY[800],
  },
  warning: {
    ...WARNING,
    contrastText: GREY[800],
  },
  error: {
    ...ERROR,
    contrastText: '#fff',
  },
  grey: GREY,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  ...COMMON,
  text: {
    primary: GREY[900],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: '#fff',
    default: '#fff',
    // paper: GREY[100],
    // default: GREY[100],
  },
  action: {
    active: GREY[600],
    ...COMMON.action,
  },
} as const;

export default palette;
