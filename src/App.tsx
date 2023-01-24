import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
])

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
      <GlobalStyles />
    </ThemeProvider>
  )
}
