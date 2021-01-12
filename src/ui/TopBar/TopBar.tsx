import { FC } from 'react'
import { TopBarProp } from 'src/ui/TopBar/types'
import css from './TopBar.module.scss'

const TopBar: FC<TopBarProp> = ({ children }) => {
  return (
    <div className={css.topBar}>
      <div className={css.fakePadding}></div>
      <div className={css.container}>{children}</div>
    </div>
  )
}

export default TopBar
