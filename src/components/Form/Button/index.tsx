import styled, { css } from 'styled-components'

interface ButtonProps {
  variant?: 'primary' | 'outline'
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  padding: 1.125rem;
  border: none;
  border-radius: 8px;
  color: #f0f0f5;
  font-weight: 700;
  font-size: 1.125rem;
  font-family: ${({ theme }) => theme.fonts.roboto};
  cursor: pointer;

  ${({ variant, theme }) =>
    (variant === undefined || variant === 'primary') &&
    css`
      background: ${theme.colors.primary};
    `}

  ${({ variant, theme }) =>
    variant === 'outline' &&
    css`
      background: transparent;
      color: ${theme.colors.text};
      border: 1px solid ${theme.colors.textLight};
    `}
`
