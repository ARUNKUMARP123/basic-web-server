// server.mjs
const { createServer }=require('node:http') ;
const { craeteFileAndWriteToFile,readFileAndPrint }=require('./filesystem') ;

const server = createServer((req, res) => {
    readFileAndPrint()
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>How are you?\n</h1>');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
