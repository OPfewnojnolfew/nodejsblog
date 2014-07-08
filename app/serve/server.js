var http = require('http');
var url = require('url');
var querystring = require('querystring');

function start(route, handle) {
    function onRequest(request, response) {
        var postData = '';
        var pathname = url.parse(request.url).pathname;
        if (request.method === 'GET') {
            route(handle, pathname, response, querystring.parse(url.parse(request.url).query));
        } else if (request.method === 'POST') {
            request.setEncoding('utf8');
            request.addListener('data', function(postDataChunk) {
                postData += postDataChunk;
            });
            request.addListener('end', function() {
                route(handle, pathname, response, querystring.parse(postData));
            });
        }
    }
    http.createServer(onRequest).listen(4000);
}
exports.start = start;
