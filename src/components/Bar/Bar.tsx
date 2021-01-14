import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import css from './Bar.module.scss'

const Bar = () => {
  return (
    <div className={css.bar}>
      <AppBar position='static' className={css.box}>
        <Toolbar>
          <Typography variant='h6' className={css.title}>
            г.Ейск
          </Typography>
        </Toolbar>

        <Toolbar>
          <Button className={css.buttons}>о компании</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Bar
