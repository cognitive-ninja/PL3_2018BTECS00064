var http = require('http');  
var url = require('url');  
var fs = require('fs');  
var server = http.createServer(function(request, response) {  
    var path = url.parse(request.url).pathname;  
    switch (path) {  
        case '/':  
            response.writeHead(200, {  
                'Content-Type': 'text/plain'  
            });  
            response.write("Enter Correct URL of the page");  
            response.end();  
            break;  
        case '/feedback':  
            fs.readFile("D:/Study/3rdYear/PL3/PL3_2018BTECS00064/Practical No 6/index.html", function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write("CRASHED"); 
                    response.write(data);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;  
        
        default:  
            response.writeHead(404);  
            response.write("Error Page - 404");  
            response.end();  
            break;  
    }  
});  
server.listen(8082); 