import { MainLayout } from 'modules/layout';
import { Services } from 'modules/services';

import type { NextPage } from 'next';

const ServicesPage: NextPage = () => (
  <MainLayout>
    <Services className="pt-5 my-5" />
  </MainLayout>
);

export default ServicesPage;
