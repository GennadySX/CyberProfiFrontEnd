import React from 'react'
import { serverFetch as homeFetch } from '&/redux/serverFetch'

import LoadableHOC from '&/LoadableHOC'
const AsyncStudentPC = LoadableHOC({ loader: () => import('./Student/index.js') })
const AsyncTest = LoadableHOC({ loader: () => import('./Test') })

export default [
  {
    path: '/',
    component: AsyncStudentPC,
    serverFetch: homeFetch,
    exact: true
  },
  {
    path: '/test',
    component: AsyncTest,
    exact: true
  }
]
