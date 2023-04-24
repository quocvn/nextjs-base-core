// eslint-disable-next-line @typescript-eslint/no-var-requires
const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
// eslint-disable-next-line consistent-return
server.use((req, res, next) => {
  if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
    if (req.body.name.trim() === '') {
      return res.status(422).send({
        error: {
          name: 'Name is required!',
        },
      })
    }
    if (req.body.name === 'admin') {
      return res.status(400).send({
        error: 'Server bị lỗi',
      })
    }
  }
  setTimeout(() => {
    next()
  }, 2000)
})

// Use default router
server.use(router)
server.listen(1234, () => {
  // eslint-disable-next-line no-console
  console.log('JSON Server is running')
})
