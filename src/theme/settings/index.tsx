import React from 'react';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function ThemeSettings({ children, }: Props) {
// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
  const createEmotionCache = createCache({
    key: 'css',
    stylisPlugins: [],
    prepend: true, 
  });

  return <CacheProvider value={createEmotionCache}>{children}</CacheProvider>;
}
