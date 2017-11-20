const os = require('os')
const config = require('config')

const routes = [
  {
    method: 'GET',
    path: '/',
    config: {
      handler: getHome
    }
  }
]

function getHome (request, reply) {
  if (config.responseDelay) {
    setTimeout(() => { doReply(request, reply) }, Math.floor((Math.random() * config.responseDelay)))
  } else {
    return doReply(request, reply)
  }
}

function doReply (request, reply) {
  if (config.shouldAlwaysError) {
    reply().code(500)
  } else if (config.shouldErrorRandomly && Math.random() >= 0.5) {
    reply().code(500)
  } else {
    reply.view('index', {
      heroText: config.heroText,
      backgroundColor: config.backgroundColour,
      version: config.version,
      host: os.hostname()
    })
  }
}

exports.register = function (server, options, next) {
  server.route(routes)
  next()
}

exports.register.attributes = {
  name: 'home'
}
