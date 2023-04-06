import Logo from '../../assets/Logo.svg'
import BannerImage from '../../assets/Pessoas.svg'

import { FiLogIn } from 'react-icons/fi'
import * as S from './styles'

import { Link } from 'react-router-dom'
import { BannerForm } from '../../components/BannerForm'

export function Home() {
  return (
    <S.Container>
      <S.BannerContent>
        <figure>
          <img src={Logo} alt="Be the hero" />
        </figure>
        <S.BannerTitle>Faça seu logon</S.BannerTitle>
        <BannerForm />
        <Link to={'/register'} data-testid={'link'}>
          <FiLogIn size={16} />
          <strong>Não tenho cadastro</strong>
        </Link>
      </S.BannerContent>
      <img src={BannerImage} alt="" />
    </S.Container>
  )
}
