//leson2.js
var http = require('http');
var count = 0;

var server = http.createServer().listen(8080);
server.on('request', function(request, response){
	var path = require('url').parse(request.url).pathname;//Отбросим возможный Get запрос
	console.log('PATH NAME:', path);
	response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
	switch(path){
		case '/':
			response.write('Ви на головній сторінці.');
			break;
		case '/index.html':
			count++;
			response.write('Привіт світ!');
			break;
		case '/count.html':
			response.write('Строрінка <b>index.html</b> запрошувалась '+count+' р.');
			break;	
		default:
			response.writeHead(404);
			response.write('404: Page not found!');
		
	}
	response.end();
});

server.on('listening', function(){
	console.log('Listening on 8080...');
});

