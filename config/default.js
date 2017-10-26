const config = {}

config.bind = '0.0.0.0'
config.port = 3000

config.version = require('../package').version
config.backgroundColour = process.env.SIMPLE_SERVICE_BGCOLOR || 'darkseagreen'
config.heroText = process.env.SIMPLE_SERVICE_HERO_TEXT || 'But this is even better!'
// throws a 500 error on each request
config.shouldAlwaysError = process.env.SIMPLE_SERVICE_SHOULD_ALWAYS_ERROR || false
// throws a 500 randomly
config.shouldErrorRandomly = process.env.SIMPLE_SERVICE_SHOULD_ERROR_RANDOMLY || false

module.exports = config
