import { Suspense, lazy, useContext, useState, useEffect } from 'react'

import {
    Routes,
    Route,
    Navigate,
    useLocation,
    Outlet,
    matchPath,
} from 'react-router-dom'


import Layout from "layout/LayoutOne";



const ALLOW_PRIVILEGE_OVERRIDE = false
const LandingPage =  lazy(() => import('modules/SampleModule'))

const queryKeys = {
    getPages: 'get_pages',
}


const LayoutRoute = () => {

  return (
    <Layout>
      <Outlet />
    </Layout>
  )
};




function DefaultLayout() {
    let modules = [
        {
            path: '/',
            component: lazy(() => import('modules/SampleModule')),
        },
    ]
    const routes = modules?.map((route, i) => (
        <Route key={i} path={route.path}  element={<route.component />} />
    ))

    return   (
<Routes>
        <Route element={<LayoutRoute />}>
         <Route  path={"/"} index element={<LandingPage/>} />

         </Route>
</Routes>
          )


}

export default DefaultLayout
