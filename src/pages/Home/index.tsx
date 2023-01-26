import Logo from '../../assets/Logo.svg'
import BannerImage from '../../assets/Pessoas.svg'
import { Button } from '../../components/Form/Button'
import { FiLogIn } from 'react-icons/fi'
import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <S.BannerContent>
        <figure>
          <img src={Logo} alt="Be the hero" />
        </figure>
        <S.BannerTitle>Faça seu logon</S.BannerTitle>
        <S.BannerForm>
          <S.DefaultInput type="text" placeholder="Sua ID" />
          <Button>Entrar</Button>
        </S.BannerForm>
        <a href="">
          <FiLogIn size={16} />
          <strong>Não tenho cadastro</strong>
        </a>
      </S.BannerContent>
      <img src={BannerImage} alt="" />
    </S.Container>
  )
}
