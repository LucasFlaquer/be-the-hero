import { FiTrash2 } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { Container } from './styles'

export function OngIncidents() {
  return (
    <div>
      <Header />
      <Container>
        <h1>Casos cadastrados</h1>
        <ul>
          <li>
            <h3>CASO:</h3>
            <p>Cadelinha Atropelada</p>
            <h3>DESCRIÇÃO:</h3>
            <p>
              A cadelinha Jolie foi atropelada por um carro no bairro Santana e
              teve que passar por uma cirurgia às pressas.
            </p>
            <h3>VALOR:</h3>
            <p>R$ 120,00</p>
            <button type="button">
              <FiTrash2 size={24} />
            </button>
          </li>
          <li>
            <h3>CASO:</h3>
            <p>Cadelinha Atropelada</p>
            <h3>DESCRIÇÃO:</h3>
            <p>
              A cadelinha Jolie foi atropelada por um carro no bairro Santana e
              teve que passar por uma cirurgia às pressas.
            </p>
            <h3>VALOR:</h3>
            <p>R$ 120,00</p>
            <button type="button">
              <FiTrash2 size={24} />
            </button>
          </li>
          <li>
            <h3>CASO:</h3>
            <p>Cadelinha Atropelada</p>
            <h3>DESCRIÇÃO:</h3>
            <p>
              A cadelinha Jolie foi atropelada por um carro no bairro Santana e
              teve que passar por uma cirurgia às pressas.
            </p>
            <h3>VALOR:</h3>
            <p>R$ 120,00</p>
            <button type="button">
              <FiTrash2 size={24} />
            </button>
          </li>
        </ul>
      </Container>
    </div>
  )
}
