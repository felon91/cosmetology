import Head from 'next/head';
import React from 'react';

import { MainLayout } from 'modules/layout';
import { Contacts } from 'modules/contacts';

import type { NextPage } from 'next';

const ContactsPage: NextPage = () => (
  <>
    <Head>
      <title>Контакты</title>
      <meta
        name="description"
        content="Контакты косметолога в Минске, чистки, пиллинги, подбор домашнего ухода"
      />
    </Head>
    <MainLayout>
      <Contacts className="mt-5" />
    </MainLayout>
  </>
);

export default ContactsPage;
