import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import { Button } from '../../components/Form/Button'
import { DefaultInput } from '../../components/Form/Input/DefaultInput'
import { DefaultTextArea } from '../../components/Form/TextArea'
import * as S from './styles'

export function CreateIncident() {
  return (
    <S.PageWrapper>
      <S.MainContent>
        <div className="content">
          <figure>
            <img src={Logo} alt="Be The Hero" />
          </figure>
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link to={'/'}>
            <FiArrowLeft size={20} />
            <strong>Voltar para o logon</strong>
          </Link>
        </div>
        <S.CreateIncidentForm>
          <DefaultInput placeholder="Título do caso" />
          <DefaultTextArea rows={10} placeholder="Descrição" />
          <DefaultInput placeholder="Valor em reais" />
          <div className="button-wrapper">
            <Button variant="outline">Cancelar</Button>
            <Button type="submit">Cadastrar</Button>
          </div>
        </S.CreateIncidentForm>
      </S.MainContent>
    </S.PageWrapper>
  )
}
