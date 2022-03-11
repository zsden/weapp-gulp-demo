const path = require('path')
module.exports = {
  plugins: {
    'postcss-font-base64': {}, // font to base64
    'postcss-advanced-variables': {},
    'postcss-nested': {},
    'postcss-extend-rule': {},
    'postcss-color-function': {},
    'postcss-url': {
      url: 'inline', // inline image to base64
      basePath: path.resolve() + '/src/static/'
    }
  }
}
