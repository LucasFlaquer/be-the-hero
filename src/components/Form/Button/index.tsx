import styled, { css } from 'styled-components'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  padding: 1.25rem;
  border: none;
  border-radius: 8px;
  color: #f0f0f5;
  font-weight: 700;
  font-size: 1.125rem;
  font-family: ${({ theme }) => theme.fonts.roboto};

  ${({ variant, theme }) =>
    variant === 'primary' &&
    css`
      background: ${theme.colors.primary};
    `}
`
Button.defaultProps = {
  variant: 'primary',
}
