const http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': 'POST, GET, HEAD, PUT',
        'Access-Control-Allow-Headers': 'X-Test-Cors',
        'Access-Control-Max-Age': 600
        });
	console.log('req coming======');
	console.log(req.url);
	res.end('返回一些东西,我是从8887过来的哦');
}).listen(8887);

console.log('正在监听8887端口');
