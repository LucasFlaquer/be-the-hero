import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { Home } from '../../src/pages/Home'
import { defaultTheme } from '../../src/styles/themes/defaultTheme'
import { ThemeProvider } from 'styled-components'

describe('Home Page', () => {
  it('should renders properly', () => {
    const { getByText } = render(
      <ThemeProvider theme={defaultTheme}>
        <Home />
      </ThemeProvider>,
      {
        wrapper: BrowserRouter,
      },
    )

    expect(getByText('Faça seu logon')).toBeInTheDocument()
  })
  it('should redirect to register Page', async () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={defaultTheme}>
        <Home />
      </ThemeProvider>,
      {
        wrapper: BrowserRouter,
      },
    )
    const user = userEvent.setup()
    const link = getByTestId(/link/i)
    expect(link).toBeInTheDocument()
    await user.click(link)
    expect(getByText('Cadastro')).toBeInTheDocument()
  })
})
