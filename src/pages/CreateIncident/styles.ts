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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 6rem;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  .content {
    max-width: 380px;
  }

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
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.textLight};
    font-weight: 400;
    line-height: 32px;
    margin-bottom: 5rem;
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
export const CreateIncidentForm = styled.form`
  flex-grow: 1;
  input {
    margin-bottom: 0.5rem;
  }
  .button-wrapper {
    display: flex;
    gap: 1rem;

    button {
      flex-basis: 30%;
      &[type='submit'] {
        flex-grow: 1;
      }
    }
  }
`
export const FieldGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  > div {
    flex-grow: 1;
  }
  > div + div {
    flex-basis: 10%;
  }
`
