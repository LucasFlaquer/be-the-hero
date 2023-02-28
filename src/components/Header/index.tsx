import { FiPower } from 'react-icons/fi'
import Logo from '../../assets/LogoSmall.svg'
import { Button } from '../Form/Button'
import { ActionWrapper, Container } from './styles'
export function Header() {
  const ongName = 'APAD'
  return (
    <Container>
      <img src={Logo} alt="Be the Hero" />
      <span>Bem vindo(a) {ongName}</span>

      <ActionWrapper>
        <Button>Cadastrar novo caso</Button>
        <Button variant="outline">
          <FiPower size={24} />
        </Button>
      </ActionWrapper>
    </Container>
  )
}
