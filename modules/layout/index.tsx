import React from 'react';

import { Footer } from 'modules/layout/footer';
import { Header } from 'modules/layout/header';

import type { PropsWithChildren } from 'react';

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main className="mainGlobalPadding">{children}</main>
    <Footer />
  </>
);
