import { ReactNode } from 'react';

import MainLayout from './main';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function Layout({ children, }: Props) {
  return <MainLayout>{children}</MainLayout>;
}
