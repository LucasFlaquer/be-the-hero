import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 1.9rem 10rem 0;

  img {
    height: 64px;
    margin-right: 1rem;
  }

  span {
    font-size: 1.25rem;
    font-family: ${({ theme }) => theme.fonts.roboto};
  }
`

export const ActionWrapper = styled.div`
  margin-left: auto;
  display: flex;
  flex-basis: 40%;
  gap: 1rem;
  height: 60px;

  button:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 60px;
    color: ${({ theme }) => theme.colors.primary};
  }
`
