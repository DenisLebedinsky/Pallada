import ReactGA from 'react-ga'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const getGATag = () => publicRuntimeConfig.GA_TAG

export const initGA = () => {
  ReactGA.initialize(getGATag())
}
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}
