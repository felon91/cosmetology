import axios from 'axios';

import type { ResponseShape } from 'lib/core';
import { API_HOST } from 'lib/env';

import { MainLayout } from 'modules/layout';
import { MainScreen } from 'modules/main-screen';
import { Gallery } from 'modules/gallery';
import { Articles } from 'modules/articles';
import { SeoText } from 'modules/seo-text';

import type { GetServerSideProps, NextPage } from 'next';
import type { Article } from 'pages/articles';

interface Props {
  articles?: Article[];
}

const Home: NextPage<Props> = ({ articles }) => (
  <MainLayout>
    <MainScreen />
    <Gallery className="my-5" />
    <SeoText className="my-5" />
    <Articles articles={articles} className="bg-light py-5 mt-5" />
  </MainLayout>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const [articles] = await Promise.all([
    axios.post<ResponseShape<Article[]>>(`${API_HOST}/api/articles`, { limit: 4 }),
  ]);

  return {
    props: {
      articles: articles.data.body,
    },
  };
};

export default Home;
