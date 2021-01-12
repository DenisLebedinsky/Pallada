import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const BASE_URL = publicRuntimeConfig.API_URL

export { BASE_URL }
