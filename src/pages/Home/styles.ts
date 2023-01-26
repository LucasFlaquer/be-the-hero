import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`
export const BannerContent = styled.div`
  figure {
    margin-bottom: 6.25rem;
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

export const BannerTitle = styled.h1`
  font-size: 3.125rem;
  font-family: ${({ theme }) => theme.fonts.roboto};
  color: #13131a;
  font-weight: 500;
  margin-bottom: 2rem;
`

export const BannerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
`

export const DefaultInput = styled.input`
  width: 100%;
  padding: 1.25rem 1.25rem;
  border: 1.5px solid #dcdce5;
  border-radius: 8px;
`
