const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World this is github action  \n');
});

const port = process.env.PORT || 3000;
const host = '0.0.0.0'; // Bind to all available network interfaces

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
