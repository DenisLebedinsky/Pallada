import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export const getApiUrl = () => publicRuntimeConfig.API_URL

export const getAlbumPhoto = (key) =>
  key ? `${publicRuntimeConfig.API_STORAGE_URL}/Album/${key}` : ''

export const getCaptchaSiteKey = () => publicRuntimeConfig.CAPTCHA_SITEKEY
