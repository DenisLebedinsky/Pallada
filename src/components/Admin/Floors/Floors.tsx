import { Button } from '@material-ui/core'
import React from 'react'
// import { useSnackBars } from 'src/hooks/useSnackBars'
import css from './Floor.module.scss'

const Floors = () => {
  return (
    <div className={css.floor}>
      floors
      <Button>alert</Button>
    </div>
  )
}

export default Floors
