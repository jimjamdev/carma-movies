import type { AppProps } from 'next/app';
import { wrapper } from '~store';

import { globalStyles } from '~styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);
