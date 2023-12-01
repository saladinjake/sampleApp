import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'


import App from './App'
import { GlobalStyles } from "./theme/globalStyles";
import Theme from "./theme";

const container = document.getElementById('root')
const root = createRoot(container)




root.render(
    <React.StrictMode>

            <Router>
                  <Theme>
                    <GlobalStyles />
                      <App />
                   </Theme>
            </Router>
        

    </React.StrictMode>
)
