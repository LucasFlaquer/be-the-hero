import { DefaultInput } from '../../components/Form/Input/DefaultInput'
import * as S from './styles'
import Logo from '../../assets/Logo.svg'
import { Button } from '../../components/Form/Button'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { MaskedInput } from '../../components/Form/Input/MaskedInput'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(1, 'Nome obrigatório'),
  email: z.string().email('E-mail inválido'),
  whatsapp: z.string().min(8, 'Whatsapp inválido').max(15, 'Whatsapp inválido'),
  city: z.string({ description: 'Cidade o' }).min(1, 'Cidade obrigatória'),
  uf: z.string().min(1, 'UF obrigatória').max(2, 'UF inválida'),
})

type FormValues = z.infer<typeof schema>

export function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  function onSubmit(data: FormValues) {
    console.log(data)
  }

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
        <S.RegisterForm onSubmit={handleSubmit(onSubmit)}>
          <DefaultInput
            placeholder="Nome da ONG"
            {...register('name')}
            error={errors.name?.message}
          />
          <DefaultInput
            placeholder="E-mail"
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <MaskedInput
            mask={'(99) 99999-9999'}
            placeholder="Whatsapp"
            {...register('whatsapp')}
            error={errors.whatsapp?.message}
          />
          <S.FieldGroup>
            <DefaultInput
              placeholder="Cidade"
              {...register('city')}
              error={errors.city?.message}
            />
            <DefaultInput
              placeholder="UF"
              {...register('uf')}
              error={errors.uf?.message}
            />
          </S.FieldGroup>
          <Button type="submit">Cadastrar</Button>
        </S.RegisterForm>
      </S.MainContent>
    </S.PageWrapper>
  )
}
