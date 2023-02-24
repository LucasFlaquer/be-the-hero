import Logo from '../../assets/Logo.svg'
import BannerImage from '../../assets/Pessoas.svg'
import { Button } from '../../components/Form/Button'
import { FiLogIn } from 'react-icons/fi'
import * as S from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { DefaultInput } from '../../components/Form/Input/DefaultInput'
import { Link } from 'react-router-dom'

const schema = z.object({
  id: z.string().min(1, 'ID obrigatório'),
})

export type FormValues = z.infer<typeof schema>

export function Home() {
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
    <S.Container>
      <S.BannerContent>
        <figure>
          <img src={Logo} alt="Be the hero" />
        </figure>
        <S.BannerTitle>Faça seu logon</S.BannerTitle>

        <S.BannerForm onSubmit={handleSubmit(onSubmit)}>
          <DefaultInput
            type="text"
            placeholder="Sua ID"
            {...register('id')}
            error={errors?.id?.message}
          />

          <Button type="submit">Entrar</Button>
        </S.BannerForm>

        <Link to={'/register'} data-testid={'link'}>
          <FiLogIn size={16} />
          <strong>Não tenho cadastro</strong>
        </Link>
      </S.BannerContent>
      <img src={BannerImage} alt="" />
    </S.Container>
  )
}
