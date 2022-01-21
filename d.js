var http= require('http');

     
  



http.createServer( function(req,res){
    res.writeHead(200,{'Content-TYpe':"text/html"})
res.write(page);
res.end();
}).listen(4000)