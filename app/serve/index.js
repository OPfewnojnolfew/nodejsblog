	var http = require('http');
	var express = require('express');
	var app = express();
	app.get('/index', function(req, res) {
		console.log(req);
		console.log(res);
		res.send({
			'id': 1,
			'name': 'ptf'
		});
	});
	http.createServer(app).listen('9999', function() {});
	console.log(app);