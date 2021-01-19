import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import React from 'react'
import css from './Bar.module.scss'

interface BarProps {
  main: boolean
}

const Bar = ({ main }: BarProps) => {
  return (
    <div className={css.bar}>
      <AppBar position='static' className={css.box}>
        <Toolbar>
          <Typography variant='h6' className={css.title}>
            г.Ейск
          </Typography>
        </Toolbar>

        <Toolbar>
          {main ? (
            <Link href={'/about'}>
              <Button className={css.buttons}>о компании</Button>
            </Link>
          ) : (
            <Link href={'/'}>
              <Button className={css.buttons}>Главная страница</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Bar
