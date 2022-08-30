import { MainLayout } from 'modules/layout';
import { MainScreen } from 'modules/main-screen';

import type { NextPage } from 'next';

const Home: NextPage = () => (
  <MainLayout>
    <MainScreen />
  </MainLayout>
);

export default Home;
