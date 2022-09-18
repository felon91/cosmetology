import axios from 'axios';

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
  <MainLayout>
    <Articles articles={articles} withBreadCrumbs withPagination className="mt-5" />
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

export default ArticlesPage;
