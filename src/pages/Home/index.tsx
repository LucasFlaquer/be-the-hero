import styled from 'styled-components'
import Logo from '../../assets/Logo.svg'
import BannerImage from '../../assets/Pessoas.svg'
import { Button } from '../../components/Button'

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`

const BannerContent = styled.div`
  figure {
    margin-bottom: 6.25rem;
  }
`

const BannerTitle = styled.h1`
  font-size: 3.125rem;
  font-family: 'Roboto', sans-serif;
  color: #13131a;
  font-weight: 500;
  margin-bottom: 2rem;
`

const BannerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const DefaultInput = styled.input`
  width: 100%;
  padding: 0.75rem 1.5rem;
  border: 1.5px solid #dcdce5;
  border-radius: 8px;
`

export function Home() {
  return (
    <Container>
      <BannerContent>
        <figure>
          <img src={Logo} alt="Be the hero" />
        </figure>
        <BannerTitle>Faça seu logon</BannerTitle>
        <BannerForm action="">
          <DefaultInput type="text" placeholder="Sua ID" />
          <Button>Entrar</Button>
        </BannerForm>
        <a href="">
          <strong>Não tenho cadastro</strong>
        </a>
      </BannerContent>
      <img src={BannerImage} alt="" />
    </Container>
  )
}
