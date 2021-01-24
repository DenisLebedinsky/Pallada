import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import api from 'src/utils/api'
import css from './Login.module.scss'

export default function SignInSide() {
  const { replace } = useRouter()
  const [error, setError] = useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(false)

    const data = {}
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    const formData = new FormData(event.target)
    for (const [key, value] of formData.entries()) {
      data[key] = value
    }

    try {
      const res: any = await api.post('/users/signin', data)

      if (res?.data?.token) {
        localStorage.setItem('ids', res.data.token)
        replace('/admin')
      }
    } catch (e) {
      setError(true)
    }
  }

  return (
    <Grid container component='main' className={css.login}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        className={css.image}
        style={{ backgroundImage: `url(${require('public/images/city.jpg')})` }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={css.paper}>
          <Avatar className={css.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Авторизация
          </Typography>
          <form className={css.form} noValidate onSubmit={onSubmit}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='username'
              label='Имя пользователя'
              name='username'
              autoComplete='email'
              autoFocus
              error={error}
              helperText={error && 'Неверный логин'}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Пароль'
              type='password'
              id='password'
              autoComplete='current-password'
              error={error}
              helperText={error && 'Неверный пароль'}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={css.submit}
            >
              Войти
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}
