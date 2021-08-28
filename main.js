
// const car = require('./app')
// const car = require('./app').car

// console.log(car)

// HTTP server
const http = require('http');

const port = 5500;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("<h1>Hello World!</h1>");
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

// console.log(process.env);