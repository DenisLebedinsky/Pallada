import { forwardRef, DetailedHTMLProps, InputHTMLAttributes, useState, useCallback } from 'react'
import { RemoveRedEye } from 'src/ui/Icons'
import Input from '../Input'
import css from './PasswordInput.module.scss'

type PasswordInputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'ref' | 'type'
>

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(({ ...props }, ref) => {
  const [hide, setHide] = useState(true)

  const onToggleHide = useCallback(() => {
    setHide(!hide)
  }, [setHide, hide])

  return (
    <Input
      type={hide ? 'password' : 'text'}
      rightIcon={
        <div onClick={onToggleHide} className={css.icon}>
          <RemoveRedEye opacity={hide ? '0.4' : '1'} />
        </div>
      }
      ref={ref}
      autoComplete='off'
      {...props}
    />
  )
})

export default PasswordInput
