import { isBrowser } from '@/utils/isBrowser';
import { PaletteMode, createTheme } from '@mui/material';
import {
  amber,
  blue,
  brown,
  deepOrange,
  green,
  grey,
  red,
} from '@mui/material/colors';
import { useEffect, useMemo, useState } from 'react';

const useTheme = () => {
  const [mode, setMode] = useState<any>('light');

  useEffect(() => {
    const saveMode = localStorage.getItem('mode');
    if (saveMode !== null && isBrowser()) return setMode(saveMode);
  }, []);

  const switchTheme = () => {
    setMode((prev: PaletteMode) => {
      const newVal = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('mode', newVal);
      return newVal;
    });
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // palette values for light mode
                // primary: blue,
                // background: {
                //   default: grey[200],
                // },
                // text: {
                //   primary: grey[600],
                // },
              }
            : {
                // primary: grey,
                // background: {
                //   default: brown[700],
                // },
                // text: {
                //   primary: grey[900],
                // },
                // palette values for dark mode
              }),
        },
        typography: {},
        components: {},
      }),
    [mode],
  );
  return { theme, switchTheme };
};

export default useTheme;
