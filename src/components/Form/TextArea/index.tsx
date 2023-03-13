import { ForwardedRef, forwardRef, TextareaHTMLAttributes } from 'react'
import { FieldWrapper } from '../FieldWrapper'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
}

export const DefaultTextArea = forwardRef(function DefaultTextArea(
  { error, ...rest }: Props,
  ref: ForwardedRef<HTMLTextAreaElement>,
) {
  return (
    <FieldWrapper hasErrors={!!error}>
      <textarea {...rest} ref={ref} />
      {error && <span>{error}</span>}
    </FieldWrapper>
  )
})
