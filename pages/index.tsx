import { MainLayout } from 'modules/layout';
import { MainScreen } from 'modules/main-screen';
import { Carousel } from 'modules/carousel';

import type { NextPage } from 'next';

const Home: NextPage = () => (
  <MainLayout>
    <MainScreen />
    <Carousel />
  </MainLayout>
);

export default Home;
