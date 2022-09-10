import React from 'react';

import { pxToRem, responsiveFontSizes } from '../utils/getFontValue';

// ----------------------------------------------------------------------
// https://stackoverflow.com/a/70612746
declare module '@mui/material/styles' {
  interface TypographyVariants {
    tab: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    tab?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    tab: true;
  }
}
//------------------

declare module '@mui/material/styles/createTypography' {
  interface Typography {
    tab?: {
      fontFamily?: string;
      fontWeight?: number;
      fontSize?: string;
    };
  }

  interface TypographyOptions {
    tab?: {
      fontFamily?: string;
      fontWeight?: number;
      fontSize?: string;
    };
  }
}
// ----------------------------------------------------------------------

const FONT_PRIMARY = 'Roboto, sans-serif'; // Google Font
const FONT_SECONDARY = 'Flame, sans-serif'; // Local Font

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    letterSpacing: 2,
    ...responsiveFontSizes({
      sm: 52,
      md: 58,
      lg: 64,
    }),
  },
  h2: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 400,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({
      sm: 40,
      md: 44,
      lg: 48,
    }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({
      sm: 26,
      md: 30,
      lg: 32,
    }),
  },
  h4: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({
      sm: 20,
      md: 24,
      lg: 24,
    }),
  },
  h5: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({
      sm: 19,
      md: 20,
      lg: 20,
    }),
  },
  h6: {
    fontWeight: 500,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({
      sm: 18,
      md: 18,
      lg: 18,
    }),
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 300,
    lineHeight: 22 / 14,
    fontSize: pxToRem(16),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    // ...responsiveFontSizes({
    //   sm: 24,
    //   md: 24,
    //   lg: 24,
    // }),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
  },
  tab: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 500,
    fontSize: pxToRem(16),
  },
} as const;

export default typography;
