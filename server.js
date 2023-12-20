var http = require('http')
var url = require('url')

var port = 4000

var server = http.createServer(function (request, response) {
  var requestUrl = url.parse(request.url, true)

  if(requestUrl.pathname === '/health') {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('API Management Server is healthy\n')
  } else if(requestUrl.pathname === '/getCustomer') {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end(' Return Customer Data\n')
  }  else if(requestUrl.pathname === '/getSales') {
      response.writeHead(200, {'Content-Type': 'text/plain'})
      response.end('Return Sales Data\n')
  } 
  else {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('Hello Test api - 3 Scale Testing\n')
  }
})

server.listen(port)

//console.log('Server running at http://localhost:' + port)