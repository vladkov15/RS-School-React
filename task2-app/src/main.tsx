import React from 'react';
import ReactDOM from 'react-dom/client';
import RootPage from './routes/RootPage';
import ErrorPage from './routes/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutPage from './routes/AboutPage';
import FormPage from './routes/FormPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/form',
    element: <FormPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
