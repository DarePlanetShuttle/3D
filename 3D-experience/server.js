const httpServer = require('http-server');

const server = httpServer.createServer({
  root: './',
  defaultExtension: 'html',
  defaultFile: 'index.html'
});

server.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
