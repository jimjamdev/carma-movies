import type { AppProps } from 'next/app';
import { jsx, ThemeProvider } from '@emotion/react'
import { wrapper } from '~store';

import { globalStyles } from '~styles/global'
import { theme } from '~styles/theme/dark';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyles}
      <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(App);
