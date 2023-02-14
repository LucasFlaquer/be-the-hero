import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react'
import { InputWrapper } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const DefaultInput = forwardRef(function DefaultInput(
  { error, ...rest }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <InputWrapper hasErrors={!!error}>
      <input {...rest} ref={ref} />
      {error && <span>{error}</span>}
    </InputWrapper>
  )
})
