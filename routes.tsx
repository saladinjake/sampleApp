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
    const routes = [
        {
            path: '/',
            component: lazy(() => import('modules/SampleModule/index')),
        },
    ]

    return <>{routes}</>
}

export default DefaultLayout
