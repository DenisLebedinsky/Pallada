import { ConnectedRouter } from 'connected-next-router'
import withReduxSaga from 'next-redux-saga'
import withRedux from 'next-redux-wrapper'
import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import 'src/styles/app.scss'
import createStore from 'src/store'

interface MyAppProps {
  store: ReturnType<typeof createStore>
}

class FamilyTreeApp extends App<MyAppProps> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props

    return (
      <Provider store={store}>
        <ConnectedRouter>
          <Component {...pageProps} />
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default withRedux(createStore)(withReduxSaga(FamilyTreeApp))
