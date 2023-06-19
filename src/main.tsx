import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyles from './styles/global/globalStyles.ts'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
)
