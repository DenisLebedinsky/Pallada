import { ReactElement } from 'react'
import { Logo as LogoIcon } from 'src/ui/Icons'
import css from './logo.module.scss'

export default function Logo(): ReactElement {
  return (
    <div className={css.logo}>
      <LogoIcon />
      <p className={css.title}>Корзина</p>
    </div>
  )
}
