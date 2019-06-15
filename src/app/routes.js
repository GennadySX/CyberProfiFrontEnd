import React from 'react'
import { serverFetch as homeFetch } from '&/redux/serverFetch'

import LoadableHOC from '&/LoadableHOC'
const AsyncStudentPC = LoadableHOC({ loader: () => import('./Student/index.js') })
const AsyncTest = LoadableHOC({ loader: () => import('./Test') })
const AsyncResults = LoadableHOC({ loader: () => import('./TestPage/Results') })
const AsyncSignIn = LoadableHOC({ loader: () => import('./Autorization/signIn') })
//const AsyncSignUp = LoadableHOC({ loader: () => import('./Autorization/signUp') })


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
  },
  {
    path: '/results',
    component: AsyncResults,
    exact: true
  },
  {
    path: '/signIn',
    component: AsyncSignIn,
    exact: true
  },
  /*
  {
    path: '/signUp',
    component: AsyncSignUp,
    exact: true
  }*/
]
