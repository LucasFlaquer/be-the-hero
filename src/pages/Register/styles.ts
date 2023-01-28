import styled from 'styled-components'

export const PageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const MainContent = styled.main`
  font-family: ${({ theme }) => theme.fonts.roboto};
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6rem;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  figure {
    max-width: 190px;
    margin-bottom: 4rem;
    img {
      max-width: 100%;
    }
  }

  h1 {
    font-size: 2.25rem;

    font-weight: 500;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    font-size: 1.125rem;
    font-family: ${({ theme }) => theme.fonts.roboto};
    color: ${({ theme }) => theme.colors.text};
    transition: opacity 0.3s ease-out;
    svg {
      margin-right: 0.5rem;
      color: ${({ theme }) => theme.colors.primary};
    }

    &:hover {
      opacity: 0.8;
    }
  }
`