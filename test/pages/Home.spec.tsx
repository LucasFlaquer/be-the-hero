import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Home } from '../../src/pages/Home'
import { defaultTheme } from '../../src/styles/themes/defaultTheme'
describe('Home Page', () => {
  it('should renders properly', () => {
    const { getByText } = render(
      <ThemeProvider theme={defaultTheme}>
        <Home />
      </ThemeProvider>,
      { wrapper: BrowserRouter },
    )
    expect(getByText('Faça seu logon')).toBeInTheDocument()
  })
})
