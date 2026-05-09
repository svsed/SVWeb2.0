import { createHashRouter } from 'react-router';
import { Root } from './layouts/Root';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { SuccessStoriesPage } from './pages/SuccessStoriesPage';
import { SuccessStoryPage } from './pages/SuccessStoryPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';

export const router = createHashRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'services', Component: ServicesPage },
      { path: 'about', Component: AboutPage },
      { path: 'success-stories', Component: SuccessStoriesPage },
      { path: 'success-stories/:slug', Component: SuccessStoryPage },
      { path: 'careers', Component: CareersPage },
      { path: 'contact', Component: ContactPage },
    ],
  },
]);
