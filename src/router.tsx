import React, { Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import Layout from '@/components/Layout';
import Error404 from './components/Error404';
import { PuffLoader } from 'react-spinners';

const HomePage = React.lazy(() => import('@/pages/home'));
const BlogPage = React.lazy(() => import('@/pages/blog'));
const DashboardPage = React.lazy(() => import('@/pages/dashboard'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'blog/:id',
        element: <BlogPage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Error404 />,
  },
];

const Router = () => {
  const element = useRoutes(routes);

  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          <PuffLoader color="#009B86" size={70} />
        </div>
      }
    >
      {element}
    </Suspense>
  );
};

export default Router;
