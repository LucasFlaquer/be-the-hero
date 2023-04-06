import styled, { css } from 'styled-components'

interface WrapperProps {
  hasErrors?: boolean
}

export const InputWrapper = styled.div<WrapperProps>`
  position: relative;
  margin-bottom: 0.8rem;

  input {
    width: 100%;
    padding: 1.25rem 1.25rem;
    border: 1.5px solid #dcdce5;
    border-radius: 8px;
    font-size: 1.125rem;
    ${({ hasErrors }) =>
      hasErrors &&
      css`
        border-color: ${({ theme }) => theme.colors.primary};
      `}
  }
  span {
    position: absolute;
    left: 0;
    bottom: -1.2rem;
    display: inline-block;
    margin-top: 0.5rem;
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }
`
