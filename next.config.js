/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const withImages = require('next-images')

module.exports = withImages({
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    CAPTCHA_SITEKEY: process.env.CAPTCHA_SITEKEY,
    GA_TAG: process.env.GA_TAG,
  },
  webpack: (config) => {
    config.resolve.alias.app = path.resolve(__dirname, 'src')
    config.resolve.alias.public = path.resolve(__dirname, 'public')
    config.resolve.alias.styles = path.resolve(__dirname, 'src/styles')

    let rule, moduleRules, cssLoader, scssRules, sassLoader
    // eslint-disable-next-line no-shadow
    if ((rule = config.module.rules.find((rule) => Object.keys(rule).includes('oneOf')))) {
      // Locate css-loader config for css modules
      if (
        (moduleRules = rule.oneOf.filter(
          (r) =>
            ('test.module.scss'.match(r.test) || 'test.module.css'.match(r.test)) &&
            Array.isArray(r.use)
        ))
      ) {
        for (const moduleRule of moduleRules) {
          if ((cssLoader = moduleRule.use.find((u) => u.loader.match('css-loader')))) {
            cssLoader.options = {
              ...cssLoader.options,
              // Any custom css loader options here
              modules: {
                ...cssLoader.options.modules,
                // Change ident name
                getLocalIdent: () => false, // Fall back to default getLocalIdent function
                localIdentName: '[local]___[hash:base64:5]',
              },
            }
          }
        }
      }

      // Locate sass-loader config
      if (
        (scssRules = rule.oneOf.filter(
          (r) =>
            ('test.scss'.match(r.test) || 'test.module.scss'.match(r.test)) && Array.isArray(r.use)
        ))
      ) {
        for (const scssRule of scssRules) {
          if ((sassLoader = scssRule.use.find((u) => u.loader.match('sass-loader')))) {
            sassLoader.options = {
              ...sassLoader.options,
              // Import global variables
              prependData: `@import 'styles/vars';`,
            }
          }
        }
      }
    }

    return config
  },
  webpackDevMiddleware: (config) => config,
})
