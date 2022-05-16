// Make a node project
// Create a node server
// if the user requests a url like - http://localhost:5000/dogs --> send a dog image to the browser
// if the user requests a url like - http://localhost:5000/cats --> Send a cat image to the browser

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  if (req.url === '/dogs') {
    res.end('<img src="https://images.dog.ceo/breeds/poodle-toy/n02113624_333.jpg">');
  } else if (req.url === '/cats') {
    res.end('<img src="https://cataas.com/cat">');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});