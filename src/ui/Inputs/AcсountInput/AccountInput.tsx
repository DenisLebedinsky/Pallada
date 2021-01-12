import { forwardRef, DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { AccountCheck } from 'src/ui/Icons'
import css from './AccountInput.module.scss'

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const AccountInput = forwardRef<HTMLInputElement, Props>(({ className, value, ...props }, ref) => {
  return (
    <div className={className ? `${css.accountInput} ${className}` : css.accountInput}>
      <AccountCheck className={css.leftIcon} />
      <div ref={ref} className={css.text} {...props}>
        {value}
      </div>
    </div>
  )
})

export default AccountInput
