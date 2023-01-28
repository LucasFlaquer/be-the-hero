import { DefaultInput } from '../Home/styles'
import * as S from './styles'
import Logo from '../../assets/Logo.svg'

export function Register() {
  return (
    <S.PageWrapper>
      <S.MainContent>
        <div className="content">
          <figure>
            <img src={Logo} alt="Be The Hero" />
          </figure>
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG
          </p>
          <a href="">
            <strong>Voltar para o logon</strong>
          </a>
        </div>
        <form action="">
          <DefaultInput />
          <DefaultInput />
          <DefaultInput />
          <DefaultInput />
          <DefaultInput />
        </form>
      </S.MainContent>
    </S.PageWrapper>
  )
}
