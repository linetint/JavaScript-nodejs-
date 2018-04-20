const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

//const server = http.createServer((req, res) => {
//  res.statusCode = 200;
//  res.setHeader('Content-Type', 'text/plain');
//  res.end('Hello World\n');
//});
//
//server.listen(port, hostname, () => {
//  console.log(`Server running at http://${hostname}:${port}/`);
//});


//위에 내용과 밑의 내용은 같은 의미이다
const server=http.createServer(function(req,res){
    
    
    res.end("hello world^^")
    
});

server.listen(port, hostname, function(){
    
    console.log(`서버는 현재 여기에서 실행중입니다 http://${hostname}:${port}/`);
    
});