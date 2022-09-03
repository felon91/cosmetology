import { MainLayout } from 'modules/layout';
import { MainScreen } from 'modules/main-screen';
import { Gallery } from 'modules/gallery';
import { Articles } from 'modules/articles';
import { SeoText } from 'modules/seo-text';

import type { NextPage } from 'next';

const Home: NextPage = () => (
  <MainLayout>
    <MainScreen />
    <Gallery className="my-5" />
    <SeoText className="my-5" />
    <Articles className="bg-light py-5 mt-5" />
  </MainLayout>
);

export default Home;
