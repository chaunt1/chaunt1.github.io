import { createBrowserRouter, RouterProvider, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AnimatedCursor from 'react-animated-cursor';
import timezone from 'dayjs/plugin/timezone';
import dayjs from 'dayjs';

import DashboardLayout from '@layout/dashboard';

import '@styles/common.scss';
import '@styles/normalize.scss';
import 'dayjs/locale/vi';

dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Ho_Chi_Minh');

const router = createBrowserRouter([
  {
    path: '',
    element: <Home />,
  },
  {
    element: <DashboardLayout />,
    path: 'dashboard',
    children: [
      {
        path: 'overview',
        element: '',
      },
      {
        path: 'order',
        element: '',
      },
      {
        path: 'category',
        element: '',
      },
      {
        path: 'product',
        element: '',
      },
      {
        path: 'user',
        element: '',
      },
      {
        path: 'setting',
        element: '',
      },
    ],
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: '*',
    element: <Navigate to='' />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        showSystemCursor
        hasBlendMode
        outerStyle={{
          border: '3px solid var(--cursor-color)',
        }}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)',
        }}
      />
    </>
  );
}

export default App;

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <main>
        <h2>{t('title')}</h2>
      </main>
      <nav>
        <Link to='/about'>About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, dont you think?</p>
      </main>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </>
  );
}
