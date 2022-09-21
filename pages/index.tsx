import axios from 'axios';
import Head from 'next/head';
import React from 'react';

import type { ResponseShape } from 'lib/core';
import { API_HOST } from 'lib/env';

import { MainLayout } from 'modules/layout';
import { MainScreen } from 'modules/main-screen';
import { Gallery } from 'modules/gallery';
import { SeoText } from 'modules/seo-text';

import type { GetServerSideProps, NextPage } from 'next';
import type { Article } from 'pages/articles';

interface Props {
  articles?: Article[];
}

const Home: NextPage<Props> = ({ articles }) => (
  <>
    <Head>
      <title>Косметолог-эстетист в Минске c медицинским образованием</title>
      <meta
        name="description"
        content="Косметолог в Минске c медицинским образованием, сохранение молодости без уколов, чистка лица, пилинг, лечение акне, массаж, подбор домашнего ухода."
      />
    </Head>
    <MainLayout>
      <MainScreen />
      <Gallery className="my-5" />
      <SeoText className="my-5" />
      {/*
      <Articles articles={articles} className="bg-light py-5 mt-5" />
      */}
    </MainLayout>
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const [articles] = await Promise.all([
    axios.post<ResponseShape<Article[]>>(`${API_HOST}/articles`, { limit: 4 }),
  ]);

  return {
    props: {
      articles: articles.data.body,
    },
  };
};

export default Home;
