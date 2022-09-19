import Head from 'next/head';
import React from 'react';

import { MainLayout } from 'modules/layout';
import { Services } from 'modules/services';

import type { NextPage } from 'next';

const ServicesPage: NextPage = () => (
  <>
    <Head>
      <title>Цены на косметологические услуги в Минске</title>
      <meta
        name="description"
        content="Цена на косметологические услуги в Минске, ультразвуковая, механическая, комплексная чистка, пилинги, лечение акне, массаж лица, подбор домашнего ухода."
      />
    </Head>
    <MainLayout>
      <Services className="my-5" />
    </MainLayout>
  </>
);

export default ServicesPage;
