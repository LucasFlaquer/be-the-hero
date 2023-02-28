import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1440px;
  padding: 0 10rem;
  margin: 5rem auto 0;

  h1 {
    font-size: 2.25rem;
    font-family: ${({ theme }) => theme.fonts.roboto};
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
    padding-left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    li {
      padding: 2rem;
      background-color: white;
      border-radius: 8px;
      position: relative;

      h3 {
        font-size: 0.8rem;
        font-family: ${({ theme }) => theme.fonts.roboto};
        margin-bottom: 1rem;

        &:not(:first-child) {
          margin-top: 2rem;
        }
      }
      p {
        font-size: 1.125rem;
        font-family: ${({ theme }) => theme.fonts.roboto};
        color: ${({ theme }) => theme.colors.textLight};
        line-height: 24px;
      }

      button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        outline: none;
        border: none;
        background-color: transparent;
        color: ${({ theme }) => theme.colors.textLight};
        cursor: pointer;
        transition: color 0.3s ease;

        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`
