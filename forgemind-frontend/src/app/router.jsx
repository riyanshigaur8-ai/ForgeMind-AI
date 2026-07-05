import { createBrowserRouter } from 'react-router-dom'

import { MainLayout, AuthLayout } from '@/layouts'
import { ProtectedRoute } from '@/components'
import { lazyRoute } from './LazyRoute'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: lazyRoute(() => import('@/pages/home')),
      },

      {
        path: '/profile',
        element: lazyRoute(() => import('@/pages/profile')),
      },
      {
        element: (
          <ProtectedRoute />
        ),
        children: [
          {
            path: '/dashboard',
            element: lazyRoute(() => import('@/pages/dashboard')),
          },
          {
            path: '/career-chat',
            element: lazyRoute(() => import('@/pages/career-chat')),
          },
        ],
      },
    ],
  },

  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: lazyRoute(() => import('@/pages/login/LoginPage')),
      },
      {
        path: '/register',
        element: lazyRoute(() => import('@/pages/register/RegisterPage')),
      },
    ],
  },

  {
    path: '*',
    element: lazyRoute(() => import('@/pages/not-found')),
  },
])