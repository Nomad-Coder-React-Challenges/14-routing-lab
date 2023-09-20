import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ErrorBoundary from '../../components/common/ErrorBoundary';
import HomePage from '../../pages/home';
import AboutPage from '../../pages/about';
import AuthorNamePage from '../../pages/author/[name]';
import AuthorBookPage from '../../pages/author/[name]/[book]';
import BookChaptersPage from '../../pages/author/[name]/[book]/chapters';
import BookCharactersPage from '../../pages/author/[name]/[book]/characters';
import App from '../../../src/App';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <HomePage />,
        },
        {
          path: 'about',
          element: <AboutPage />,
        },
        {
          path: 'author/:name',
          element: <AuthorNamePage />,
          children: [
            {
              path: ':book',
              element: <AuthorBookPage />,
              children: [
                {
                  path: 'chapters',
                  element: <BookChaptersPage />,
                },
                {
                  path: 'characters',
                  element: <BookCharactersPage />,
                },
              ],
            },
          ],
        },
      ],
      errorElement: <ErrorBoundary />,
    },
  ]);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
