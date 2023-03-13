import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { About } from './pages/About'
import { CreateIncident } from './pages/CreateIncident'
import { Home } from './pages/Home'
import { OngIncidents } from './pages/OngIncidents'
import { Register } from './pages/Register'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/register', element: <Register /> },
  { path: '/ong-incidents', element: <OngIncidents /> },
  { path: '/create', element: <CreateIncident /> },
])

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
      <GlobalStyles />
    </ThemeProvider>
  )
}
