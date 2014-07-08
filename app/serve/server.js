var http = require('http');
var url = require('url');
var querystring = require('querystring');

function Context(request, response) {
    this.request = request;
    this.response = response;
}
Context.prototype.send = function(obj) {
    this.response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    this.response.write(JSON.stringify(obj));
    this.response.end();
};

function start(route, handle) {
    function onRequest(request, response) {
        var postData = '';
        var pathname = url.parse(request.url).pathname;
        var context;
        if (request.method === 'GET') {
            request.getQuery = querystring.parse(url.parse(request.url).query);
            context = new Context(request, response);
            route(handle, pathname, context);
        } else if (request.method === 'POST') {
            request.setEncoding('utf8');
            request.addListener('data', function(postDataChunk) {
                postData += postDataChunk;
            });
            request.addListener('end', function() {
                request.postData = querystring.parse(url.parse(request.url).query);
                context = new Context(request, response);
                route(handle, pathname, context);
            });
        }
    }
    http.createServer(onRequest).listen(4000);
}
exports.start = start;
