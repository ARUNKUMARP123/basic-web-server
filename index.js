// server.mjs
const { createServer }=require('node:http') ;
const { craeteFileAndWriteToFile,readFileAndPrint }=require('./filesystem') ;

const server = createServer((req, res) => {
    readFileAndPrint()
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>How are you?\n</h1>');
});

// starts a simple http server locally on port 3000
server.listen(3000, '0.0.0.0', () => {
  console.log('Server Start');
});

// run with `node server.mjs`
