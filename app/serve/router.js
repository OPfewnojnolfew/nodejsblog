function route(handle, pathname, context) {
    if (typeof handle[pathname] === 'function') {
        handle[pathname].apply(context);
    } else {
        context.response.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        context.response.write('404 Not found');
        context.response.write('404 Not found');
        context.response.end();
    }
}

exports.route = route;
