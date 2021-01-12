import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import GALayout from 'src/ui/GALayout'
import css from './Layout.module.scss'

interface LayoutProps {
  children: ReactElement | ReactElement[]
}

const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <GALayout>
      <Head>
        <title>Паллада</title>
        <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=0' />
      </Head>

      <div className={css.layout}>
        <CssBaseline />
        <Container maxWidth='lg'>
          <Typography component='div'>{children}</Typography>
        </Container>
      </div>
    </GALayout>
  )
}

export default Layout
