import { ForwardedRef, forwardRef } from 'react'
import InputMasked, { Props as MaskedProps } from 'react-input-mask'
import { InputWrapper } from './styles'

interface Props extends MaskedProps {
  mask: string | (string | RegExp)[]
  error?: string
}

function MaskedInputComponent(
  { mask, error, ...rest }: Props,
  ref: ForwardedRef<InputMasked>,
) {
  return (
    <InputWrapper hasErrors={!!error}>
      <InputMasked mask={mask} {...rest} ref={ref} />
      {error && <span>{error}</span>}
    </InputWrapper>
  )
}

export const MaskedInput = forwardRef(MaskedInputComponent)
