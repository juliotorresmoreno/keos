/*global console*/
var yetify = require('yetify'),
    config = require('./config'),
    fs = require('fs'),
    sockets = require('./sockets'),
    port = parseInt(process.env.PORT || config.server.port, 10),
    server = null,
    web = require('./app'),
    http = require('http'),
    https = require('https');

// Create an http(s) server instance to that socket.io can listen to
if (config.server.secure) {
    server = https.createServer({
        key: fs.readFileSync(config.server.key),
        cert: fs.readFileSync(config.server.cert),
        passphrase: config.server.password
    }, web);
} else {
    server = http.createServer(web);
}
server.listen(port);

sockets(server, config);

if (config.uid) process.setuid(config.uid);

var httpUrl;
if (config.server.secure) {
    httpUrl = "https://localhost:" + port;
} else {
    httpUrl = "http://localhost:" + port;
}
console.log(yetify.logo() + ' -- signal master is running at: ' + httpUrl);
