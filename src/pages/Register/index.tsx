import { DefaultInput } from '../Home/styles'
import * as S from './styles'
import Logo from '../../assets/Logo.svg'
import { Button } from '../../components/Form/Button'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

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
          <Link to={'/'}>
            <FiArrowLeft size={20} />
            <strong>Voltar para o logon</strong>
          </Link>
        </div>
        <S.RegisterForm action="">
          <DefaultInput placeholder="Nome da ONG" />
          <DefaultInput placeholder="E-mail" type="email" />
          <DefaultInput placeholder="whatsapp" />
          <S.FieldGroup>
            <DefaultInput placeholder="Cidade" />
            <DefaultInput placeholder="UF" />
          </S.FieldGroup>
          <Button type="submit">Cadastrar</Button>
        </S.RegisterForm>
      </S.MainContent>
    </S.PageWrapper>
  )
}
