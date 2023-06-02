const http = require('http');

const fs = require('fs');

const port = 8081;

const server = http.createServer(( req , res ) => {
    console.log(req.url , req.method);
    fs.readFile('./project/index.html' , (err , data) => {
        if (err) {
            console.error(err);
            return;
        }
        else {
            res.write(data);
            res.end();
        }
    })
    res.writeHead(200 , {'content-type' : 'text/html'});
});

server.listen(port , () => {
    console.log('server running on port' , port);
});