import React, { useEffect } from 'react'
import { initGA, logPageView } from 'src/utils/analytics'

export default ({ children }) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    if (!window?.GA_INITIALIZED) {
      initGA()
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      window.GA_INITIALIZED = true
    }

    logPageView()
  }, [])

  return <div>{children}</div>
}
