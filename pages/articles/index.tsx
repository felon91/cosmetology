/* eslint-disable no-unreachable */
// noinspection UnreachableCodeJS

import axios from 'axios';
import Head from 'next/head';
import React from 'react';

import type { ResponseShape } from 'lib/core';
import { API_HOST } from 'lib/env';

import { MainLayout } from 'modules/layout';
import { Articles } from 'modules/articles';

import type { GetServerSideProps, NextPage } from 'next';

export enum ArticleType {
  Text = 'text',
  List = 'list',
  Img = 'img',
}

export interface ArticleContent {
  type: ArticleType;
  value: string[] | string;
}

export interface Article {
  _id: string;
  title: string;
  content: ArticleContent[];
  imgName: string;
  list?: string[];
  slug: string;
  createdAt: string;
  description: string;
}

interface Props {
  articles: Article[];
}

const ArticlesPage: NextPage<Props> = ({ articles }) => (
  <>
    <Head>
      <title>Полезные статьи о косметологии</title>
      <meta
        name="description"
        content="Косметолог в Минске c медицинским образованием, сохранение молодости без уколов, чистка лица, пилинг, лечение акне, массаж, подбор домашнего ухода."
      />
    </Head>
    <MainLayout>
      <Articles articles={articles} withBreadCrumbs withPagination={false} className="mt-5" />
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

export default ArticlesPage;
