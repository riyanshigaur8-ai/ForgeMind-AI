import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '@/layouts'
import { lazyRoute } from './LazyRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: lazyRoute(() => import('@/pages/home')),
      },
      {
        path: 'dashboard',
        element: lazyRoute(() => import('@/pages/dashboard')),
      },
      {
        path: 'career-chat',
        element: lazyRoute(() => import('@/pages/career-chat')),
      },
      {
        path: '*',
        element: lazyRoute(() => import('@/pages/not-found')),
      },
    ],
  },
])
