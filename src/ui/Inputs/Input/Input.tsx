// eslint-disable-next-line import/default
import classNames from 'classnames'
import { forwardRef, DetailedHTMLProps, InputHTMLAttributes, ReactElement, useState } from 'react'
import css from './Input.module.scss'

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  leftIcon?: ReactElement | null
  rightIcon?: ReactElement | null
  invalid?: boolean
  fill?: boolean
  onChange?: (args) => void
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      className = '',
      placeholder,
      leftIcon,
      rightIcon,
      invalid,
      fill,
      autoComplete = 'off',
      ...props
    },
    ref
  ) => {
    const [focus, setFocus] = useState(false)
    const inputClass = classNames({
      [className]: !!className,
      [css.input]: true,
      [css.invalid]: !!invalid,
      [css.disabled]: props.disabled,
    })

    const labelClass = classNames({
      [css.label]: true,
      [css.activeLabel]: !!props.value || focus || fill,
      [css.labelLeft]: !!leftIcon,
      [css.invalidLabel]: !!invalid,
    })

    const onHandleFocus = ({ target, type }) => {
      if (type === 'blur' && target.value.length === 0) {
        setFocus(false)
      } else if (type === 'focus') {
        setFocus(true)
      }
    }

    return (
      <div className={inputClass}>
        {leftIcon && <div className={css.labelLeft}>{leftIcon}</div>}
        <input
          ref={ref}
          onFocusCapture={onHandleFocus}
          onBlurCapture={onHandleFocus}
          className={css.text}
          autoComplete={autoComplete}
          {...props}
        />
        <label className={labelClass}>{placeholder}</label>
        {rightIcon && <div className={css.rightIcon}>{rightIcon}</div>}
      </div>
    )
  }
)

export default Input
