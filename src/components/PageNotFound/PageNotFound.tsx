import { Button } from '@material-ui/core'
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore'
import Link from 'next/link'
import React from 'react'
import css from './PageNotFound.module.scss'

const PageNotFound = () => {
  return (
    <div className={css.pageNotFound}>
      <h1>Страница не найдена!</h1>
      <Link href={'/'}>
        <Button className={css.link}>
          <SettingsBackupRestoreIcon className={css.icon} />
          вернуться на главную
        </Button>
      </Link>
    </div>
  )
}

export default PageNotFound
