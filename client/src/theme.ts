'use client';

import { createTheme } from '@mui/material/styles';
import { Poppins } from 'next/font/google';

const mainFont = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

declare module '@mui/material/styles' {
  interface TypographyVariants {
    primaryText: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    primaryText?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    primaryText: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: mainFont.style.fontFamily,
  },
  palette: {
    primary: {
      main: '#679186',
      light: '#98B0A9',
      dark: '#354B45',
    },
    secondary: {
      main: '#758BA6',
      dark: '#3C4856',
      light: '#A0ACBD',
    },
    text: {
      primary: '#212121',
      secondary: '#3C3E42',
    },
  },
});

theme.typography.primaryText = {
  fontSize: '16px',
  lineHeight: '24px',
  color: theme.palette.primary.main,
  [theme.breakpoints.down('lg')]: {
    fontSize: '14px',
    lineHeight: '22px',
  },
};

export default theme;
