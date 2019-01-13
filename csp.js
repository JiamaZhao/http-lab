const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Content-Security-Policy-Report-Only': 'default-src \'self\'; form-action \'self\'; report-uri /report '
    });
    const html = fs.readFileSync('./test.html', 'utf-8');
    res.end(html);
}).listen(8888);

console.log('正在监听8888端口');