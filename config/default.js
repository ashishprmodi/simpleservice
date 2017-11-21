const config = {}

config.bind = '0.0.0.0'
config.port = 3000

config.version = require('../package').version
config.name = require('../package.json').name

config.backgroundColour = process.env.SIMPLE_SERVICE_BGCOLOR || 'darkseagreen'
config.heroText = process.env.SIMPLE_SERVICE_HERO_TEXT || 'But this is even better!'

// throws a 500 error on each request
config.shouldAlwaysError = process.env.SIMPLE_SERVICE_SHOULD_ALWAYS_ERROR || false

// throws a 500 randomly
config.shouldErrorRandomly = process.env.SIMPLE_SERVICE_SHOULD_ERROR_RANDOMLY || false

// sets a max delay to the response, resulting in a higher response time. Actual delays are a random number up to the max.
config.responseDelay = process.env.SIMPLE_SERVICE_RESPONSE_DELAY || 0  // milliseconds

// toggles the visibility of a button to record click event.
config.showButton = process.env.SIMPLE_SERVICE_SHOW_BUTTON || false

// set the Vamp api endpoint for collecting metrics, works together with the click events on/off toggle
config.vampApiEndpoint = process.env.SIMPLE_SERVICE_VAMP_API_ENDPOINT || 'http://localhost/service/vamp/api/v1'
module.exports = config
