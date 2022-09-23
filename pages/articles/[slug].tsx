import { Breadcrumb, Container } from 'react-bootstrap';
import React from 'react';
import axios from 'axios';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

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

const renderContent = (content: ArticleContent[], title: string) =>
  content.map(item => {
    const { value, type, href = Routes.Main } = item;

    switch (type) {
      case ArticleType.Text: {
        if (!Array.isArray(value)) {
          return null;
        }
        return value.map((item, index) => <p key={index}>{item as string}</p>);
      }
      case ArticleType.List: {
        if (!Array.isArray(value)) {
          return null;
        }
        return (
          <ul>
            {value.map((item, index) => (
              <li className="my-2" key={index}>
                {item as string}
              </li>
            ))}
          </ul>
        );
      }
      case ArticleType.Img: {
        if (Array.isArray(value)) {
          return null;
        }
        return (
          <div className="float-md-end my-2">
            <Image width={310} height={200} alt={title} src={`/articles/${value}`} />
          </div>
        );
      }
      case ArticleType.Link: {
        if (typeof value !== 'string') {
          return null;
        }
        return (
          <Link passHref href={href}>
            <a>{value}</a>
          </Link>
        );
      }
      case ArticleType.Complex: {
        if (!Array.isArray(value)) {
          return null;
        }
        return (
          <p>
            {value.map((item, index) => {
              if (typeof item === 'string') {
                return null;
              }
              const { value, type, href = Routes.Main } = item;

              return type === ArticleType.Link ? (
                <Link passHref href={href}>
                  <a>{value as string}</a>
                </Link>
              ) : (
                (value as string)
              );
            })}
          </p>
        );
      }
      default: {
        return null;
      }
    }
  });

const DetailArticlePage: NextPage<Props> = ({ article }) => {
  const { title, content, description } = article;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <MainLayout>
        <Container className="mt-5">
          <Breadcrumb>
            <Breadcrumb.Item href={Routes.Main}>Главная</Breadcrumb.Item>
            <Breadcrumb.Item href={Routes.Articles}>Статьи</Breadcrumb.Item>
            <Breadcrumb.Item active>{title}</Breadcrumb.Item>
          </Breadcrumb>
          <article className="pb-4">
            <h1>{title}</h1>
            {renderContent(content, title)}
          </article>
        </Container>
      </MainLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { query } = ctx;

  const pathSegment = (query.slug as string) || '';
  const article = await axios.get<ResponseShape<Article>>(`${API_HOST}/articles/${pathSegment}`);

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
