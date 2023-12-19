
var http = require('http')
var url = require('url')

var port = 4000

var server = http.createServer(function (request, response) {
  var requestUrl = url.parse(request.url, true)

  if(requestUrl.pathname === '/health') {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('Server is healthy\n')
  } else {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('Hello Test api - 3 Scale Testing\n')
  }
})

server.listen(port)

console.log('Server running at http://localhost:' + port)