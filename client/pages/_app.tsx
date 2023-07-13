import { ThemeProvider } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import { appWithTranslation } from 'next-i18next';

import '@/styles/globals.css';
import { AppPropsWithLayout } from './_app.types';
import useTheme from '@/theme';
import { ComponentType } from 'react';

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const { theme, switchTheme } = useTheme();

  const LayoutWithNoSSR = dynamic(() => import('../components/Layout'), {
    ssr: false,
  });

  const getLayout =
    Component.getLayout ||
    (() => (
      <LayoutWithNoSSR switchTheme={switchTheme}>
        <Component {...pageProps} />
      </LayoutWithNoSSR>
    ));

  return (
    <ThemeProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
};

export default appWithTranslation(App as ComponentType<AppPropsWithLayout>);
