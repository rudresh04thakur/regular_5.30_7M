var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    if(req.url == '/'){
        res.writeHead(200,{'Content-type':'text/html'});
        var tempHtml;
        fs.readFile('./index.html',function(err,data){
            res.end(data);
        })
    }else if(req.url=='/about'){
        res.writeHead(200,{'Content-type':'text/html'});
        res.end(initPage(tempHtml));
    }
}).listen(8998,'127.0.0.1');
console.log("Server running on http://127.0.0.1:8998");

