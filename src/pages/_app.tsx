import App from 'next/app'
import React from 'react'
import 'src/styles/app.scss'
import { SnackBarProvider } from 'src/components/SnackProvider/SnackProvider'

class PalladaApp extends App {
  // static async getInitialProps({ Component, ctx }) {
  //   let pageProps = {}
  //
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }
  //
  //   return { pageProps }
  // }

  render() {
    const { Component, pageProps } = this.props

    return (
      <SnackBarProvider>
        <Component {...pageProps} />
      </SnackBarProvider>
    )
  }
}

export default PalladaApp
