import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import App from './App'
import { GlobalStyles } from "./theme/globalStyles";
import Theme from "./theme";

const container = document.getElementById('root')
const root = createRoot(container)

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
        mutations: {
            retry: 2,
        },
    },
})

queryClient.invalidateQueries(['sample-do'])

const RenderDevTool = () => {
    if (process.env.NODE_ENV === 'development') {
        return <ReactQueryDevtools initialIsOpen={false} />
    }
    return null
}

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Router>
                  <Theme>
                    <GlobalStyles />
                      <App />
                   </Theme>
            </Router>
            <RenderDevTool />
        </QueryClientProvider>
    </React.StrictMode>
)
