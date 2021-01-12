// eslint-disable-next-line import/default
import classNames from 'classnames'
import { ReactElement } from 'react'
import css from './MenuButton.module.scss'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: string
  active?: boolean
}

const MenuButton = ({ size, children, className, active, ...props }: ButtonProps): ReactElement => {
  const btnClass = classNames(className, [css.menuButton], {
    [css.active]: active,
    [css.small]: size === 'small',
    [css.large]: size === 'large',
  })

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  )
}

export default MenuButton
