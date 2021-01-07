
import React from 'react';
import Login from './components/login/login'
import Home from './components/home/home'
import Main from './components/home/main'
import Detail1 from './components/detail1'
import Detail2 from './components/detail2'

const routes = [
    {
        path: '/login',
        component: Login,
        exact: true,
    },
    {
        path: '/',
        component: Main,
        routes: [
            {
                path: '/detail1',
                component: Detail1
            },
            {
                path: '/home/detail2',
                component: Detail2
            },
        ]
    },

]

export default routes
