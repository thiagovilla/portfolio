var http = require('http')

function handleRequest(req, res) {
  var json = {
    foo: 'bar',
    egg: 123,
    ham: true,
    words: ['foo', 'bar', 'egg', 'ham'],
    nested: { another: 'object' },
    data: {
      123: { id: 123, name: 'Foo' },
      111: { id: 111, name: 'Bar' },
      222: { id: 222, name: 'Egg' },
      333: { id: 333, name: 'Ham' }
    },
    url: req.url
  }

  res.setHeader('Content-Type', 'application/json')
  res.write(JSON.stringify(json))
  res.end()
}

var server = http.createServer(handleRequest)

var port = 3000
server.listen(port, function() {
  console.log('Listening on port', port)
})