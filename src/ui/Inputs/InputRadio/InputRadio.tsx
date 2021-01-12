import { forwardRef } from 'react'
import css from './InputRadio.module.scss'

interface Props {
  title: string
}
const InputRadio = forwardRef<HTMLInputElement, Props>(({ title, ...props }, ref) => {
  return (
    <label className={css.radio}>
      <input ref={ref} type='radio' {...props} />
      <span className={css.radio__checkmark} />
      {title}
    </label>
  )
})

export default InputRadio
