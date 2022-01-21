var http= require('http');
var uc=require('upper-case');
http.createServer(function(req,res){
    res.writeHead(200,{'Cotentn-Type':'application\json'})
res.write(uc.upperCase("node dbgdfg"));
res.end();
}).listen(3900);
