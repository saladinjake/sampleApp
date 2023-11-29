import { Suspense, lazy, useContext, useState, useEffect } from 'react'

import {
    Routes,
    Route,
    Navigate,
    useLocation,
    Outlet,
    matchPath,
} from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'

const ALLOW_PRIVILEGE_OVERRIDE = false

const queryKeys = {
    getPages: 'get_pages',
}

function DefaultLayout() {
    let modules = [
        {
            path: '/',
            component: lazy(() => import('modules/SampleModule/index')),
        },
    ]
    const routes = modules?.map((route, i) => (
        <Route key={i} path={route.path} element={<route.component />} />
    ))

    return <Routes>{routes}</Routes>
}

export default DefaultLayout
