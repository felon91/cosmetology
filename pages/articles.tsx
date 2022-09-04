import { MainLayout } from 'modules/layout';
import { Articles } from 'modules/articles';

import type { NextPage } from 'next';

const ArticlesPage: NextPage = () => (
  <MainLayout>
    <Articles withPagination className="bg-light py-5 mt-5" />
  </MainLayout>
);

export default ArticlesPage;
