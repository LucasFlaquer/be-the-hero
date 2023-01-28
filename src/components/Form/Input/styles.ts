import styled, { css } from 'styled-components'

interface WrapperProps {
  hasErrors?: boolean
}

export const InputWrapper = styled.div<WrapperProps>`
  input {
    width: 100%;
    padding: 1.25rem 1.25rem;
    border: 1.5px solid #dcdce5;
    border-radius: 8px;
    ${({ hasErrors }) =>
      hasErrors &&
      css`
        border-color: ${({ theme }) => theme.colors.primary};
      `}
  }
  span {
    display: inline-block;
    margin-top: 0.5rem;
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
  }
`
