import { Breadcrumb, Container } from 'react-bootstrap';
import React from 'react';
import axios from 'axios';
import Image from 'next/image';

import { Routes } from 'lib/routes';
import type { ResponseShape } from 'lib/core';
import { API_HOST } from 'lib/env';

import { MainLayout } from 'modules/layout';
import { ArticleType } from 'pages/articles/index';

import type { Article, ArticleContent } from 'pages/articles/index';
import type { GetServerSideProps, NextPage } from 'next';

interface Props {
  article: Article;
}

const renderContent = (content: ArticleContent[]) =>
  content.map(item => {
    const { value, type } = item;

    switch (type) {
      case ArticleType.Text: {
        if (!Array.isArray(value)) {
          return null;
        }
        return value.map((item, index) => <p key={index}>{item}</p>);
      }
      case ArticleType.List: {
        if (!Array.isArray(value)) {
          return null;
        }
        return (
          <ul>
            {value.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      }
      case ArticleType.Img: {
        if (Array.isArray(value)) {
          return null;
        }
        return (
          <div className="my-2">
            <Image layout="responsive" width={100} height={100} src={`/articles/${value}`} />
          </div>
        );
      }
      default: {
        return null;
      }
    }
  });

const DetailArticlePage: NextPage<Props> = ({ article }) => {
  const { title, content } = article;

  return (
    <MainLayout>
      <Container className="mt-5">
        <Breadcrumb>
          <Breadcrumb.Item href={Routes.Main}>Главная</Breadcrumb.Item>
          <Breadcrumb.Item href={Routes.Articles}>Статьи</Breadcrumb.Item>
          <Breadcrumb.Item active>{title}</Breadcrumb.Item>
        </Breadcrumb>
        <article>
          <h1>{title}</h1>
          {renderContent(content)}
        </article>
      </Container>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { query } = ctx;

  const pathSegment = (query.slug as string) || '';
  const article = await axios.get<ResponseShape<Article>>(
    `${API_HOST}/api/articles/${pathSegment}`
  );

  if (!article.data.success) {
    return { notFound: true };
  }

  return {
    props: {
      article: article.data.body,
    },
  };
};

export default DetailArticlePage;
