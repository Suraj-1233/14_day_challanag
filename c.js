var http= require('http');
var data =[
    {name:"suraju", age:"20",email:"suraj123@"},
    {name:"suraju", age:"520",email:"suraj123@"},
    {name:"suraju", age:"20",email:"suraj123@"},
    {name:"suraju", age:"520",email:"suraj123@"}


];
http.createServer(function(req,res){
    res.writeHead(200,{'Cotentn-Type':'application\json'})
res.write(JSON.stringify(data));
res.end();
}).listen(3900);
