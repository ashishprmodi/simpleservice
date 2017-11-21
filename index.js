const Hapi = require('hapi')
const config = require('config')
const axios = require('axios')
let server = new Hapi.Server()

server.connection({
  host: config.bind || '0.0.0.0',
  port: config.port || 3000,
  routes: {
    cors: {
      origin: ['*']
    }
  }
})

const loggingOptions = {
  ops: false,
  reporters: {
    console: [{
      module: 'good-console'
    }, 'stdout']
  }
}
async function provision () {

  await server.register([require('inert'),require('./home'),
    {
      register: require('good'),
      options: loggingOptions
    },
    {
      register: require('vision')
    }])

  await server.views({
    engines: { pug: require('pug') },
    path: __dirname + '/templates',
    compileOptions: {
      pretty: true
    }
  })

  server.route({
    method: 'GET',
    path: '/static/{param*}',
    handler: {
      directory: {
        path: 'static'
      }
    }
  })

  server.route({
    method: 'POST',
    path: '/events',
    handler: function (request, reply) {
      const vampEvent = {
        value: request.payload.value,
        tags: [
          `appversion:${config.version}`,
          `appname: ${config.name || 'unknown'}`
        ]
      }

      axios.post(`${config.vampApiEndpoint}/events`, vampEvent)
        .then( res => {
          reply(res.data)
        })
        .catch(err => {
          reply(err)
        })
    }
  })

  if(!module.parent) {
    await server.start()
    console.info('Server running at:', server.info.uri)
  }
}


provision()

module.exports = server
