
import React from 'react';
import { Redirect } from 'react-router-dom'
import Login from './components/login/login'
import Home from './components/home/home'
import Menu from './components/home/menu'
import SubMenu from './components/menu/submenu'
import Main from './components/home/main'
import Detail1 from './components/detail1'
import Detail2 from './components/detail2'

const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/',
        component: Main,
        routes: [
            {
                path: '/',
                exact:true,
                render: () => (<Redirect to={"/home"}/>),
            },
            {
                path: '/home',
                component: Home,
            },
            {
                path: '/menu',
                component: Menu,
                routes:[
                    {
                        path: '/menu/*',
                        component: SubMenu,
                    }
                ]
            },
            {
                path: '/detail1',
                component: Detail1,
                exact:false
            },
            {
                path: '/detail2',
                component: Detail2,
                exact:true
            },
        ]
    },

]

export default routes
