import { MainLayout } from 'modules/layout';
import { Contacts } from 'modules/contacts';

import type { NextPage } from 'next';

const ContactsPage: NextPage = () => (
  <MainLayout>
    <Contacts className="mt-5" />
  </MainLayout>
);

export default ContactsPage;
