import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { DefaultInput } from '../Form/Input/DefaultInput'
import * as z from 'zod'
import * as S from './styles'
import { Button } from '../Form/Button'

const schema = z.object({
  id: z.string().min(1, 'ID obrigatório'),
})
export type FormValues = z.infer<typeof schema>

export function BannerForm() {
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
    <S.BannerForm onSubmit={handleSubmit(onSubmit)}>
      <DefaultInput
        type="text"
        placeholder="Sua ID"
        {...register('id')}
        error={errors?.id?.message}
      />

      <Button type="submit">Entrar</Button>
    </S.BannerForm>
  )
}
