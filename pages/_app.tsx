import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { globalCss, darkTheme } from '../stitches.config';
import { Box } from '../components/Box';
import PrimitivesPage from '../custom/PrimitivesPage';

const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  body: {
    margin: 0,
    color: '$hiContrast',
    backgroundColor: '$loContrast',
    fontFamily: '$untitled',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTextSizeAdjust: '100%',

    '.dark-theme &': {
      backgroundColor: '$mauve1',
    },
  },

  svg: {
    display: 'block',
    verticalAlign: 'middle',
  },

  'pre, code': { margin: 0, fontFamily: '$mono' },

  '::selection': {
    backgroundColor: '$violetA5',
    color: '$violet12',
  },

  '#__next': {
    position: 'relative',
    zIndex: 0,
  },

  'h1, h2, h3, h4, h5': { fontWeight: 500 },
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isPrimitivesDocs = router.pathname.includes('/design');

  return (
    <Box css={{ pt: '$8', position: 'relative', zIndex: 1 }}>
      {isPrimitivesDocs && (
        <PrimitivesPage>
          <Component {...pageProps} />
        </PrimitivesPage>
      )}
    </Box>
  );
}

export default MyApp;
