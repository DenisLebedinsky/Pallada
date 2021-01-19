import React from 'react'
import { initGA, logPageView } from 'src/utils/analytics'

export default class GALayout extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    if (!window.GA_INITIALIZED) {
      initGA()
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render() {
    const { children } = this.props

    return <div>{children}</div>
  }
}
