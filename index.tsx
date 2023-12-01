import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'


import App from './App'

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



root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Router>
                <App />
            </Router>

        </QueryClientProvider>
    </React.StrictMode>
)
