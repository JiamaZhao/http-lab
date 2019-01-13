const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    console.log(req.url);
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'Set-Cookie': ['id=123; max-age=2']
        });
        const html = fs.readFileSync('./test.html', 'utf-8');
        res.end(html);
    }
    const img = fs.readFileSync('test.png');
    res.writeHead(200, {
        'Content-Type': 'image/png',
        'Connection': 'keep-alive'
    });
    res.end(img);
}).listen(8888);

console.log('正在监听8888端口');