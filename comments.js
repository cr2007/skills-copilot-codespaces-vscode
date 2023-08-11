// Create web server
var http = require('http');
var fs = require('fs');
// Create server object
http.createServer(function (req, res) {
    // Read HTML file
    fs.readFile('index.html', function (err, data) {
        // Write HTTP header
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // Write HTML file
        res.write(data);
        // End HTTP response
        res.end();
    });
}).listen(8080); // Port number