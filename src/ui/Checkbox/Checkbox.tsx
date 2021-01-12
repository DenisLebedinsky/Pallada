import classNames from 'classnames'
import { forwardRef, DetailedHTMLProps, InputHTMLAttributes } from 'react'
import css from './Checkbox.module.scss'

interface CheckboxProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  invalid?: boolean
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, className, invalid, ...props }, ref) => {
    const labelClassNames = classNames(css.checkbox, {
      [css.invalid]: !!invalid,
    })

    const inputClassNames = classNames(css.input, {
      [css.invalid]: !!invalid,
    })

    return (
      <div className={className}>
        <input ref={ref} type='checkbox' className={labelClassNames} id='checkbox' {...props} />
        <label htmlFor='checkbox' className={inputClassNames}>
          {children}
        </label>
      </div>
    )
  }
)

export default Checkbox
