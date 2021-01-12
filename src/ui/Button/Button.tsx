// eslint-disable-next-line import/default
import classNames from 'classnames'
import { ReactElement } from 'react'
import css from './Button.module.scss'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  dimmed?: boolean
  size?: string
  outline?: boolean
  warning?: boolean
  link?: boolean
  warningLink?: boolean
}

const Button = ({
  size,
  children,
  className,
  dimmed,
  outline,
  warning,
  link,
  warningLink,
  ...props
}: ButtonProps): ReactElement => {
  const btnClass = classNames(className, [css.button], {
    [css.small]: size === 'small',
    [css.large]: size === 'large',
    [css.dimmed]: dimmed,
    [css.outline]: outline,
    [css.warning]: warning,
    [css.link]: link,
    [css.warningLink]: warningLink,
  })

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  )
}

export default Button
