const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    console.log(req.url);
    // console.log(req.headers)
    const ifNoneMatch = req.headers['if-none-match'];
    console.log('ifnnemath', ifNoneMatch);
    const ifModiftySince = req.headers['if-modified-since'];
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'max-age=20'
        });
        const html = fs.readFileSync('./test.html', 'utf-8');
        res.end(html);
    }
    if (req.url === '/script.js') {
        if (ifNoneMatch === '123') {
            res.writeHead(304, {
                'Content-Type': 'text/javascript',
                'Cache-Control': 'max-age=30000, no-cache',
                'Etag': '123',
                'Last-Modified': '456'
            });
            res.end('');
        } else {
            const js = fs.readFileSync('./script.js', 'utf-8');
            res.writeHead(200, {
                'Content-Type': 'text/javascript',
                'Cache-Control': 'max-age=30000, no-cache',
                'Etag': '123',
                'Last-Modified': '456'
            });
            res.end(js);
        }
    }
}).listen(8888);

console.log('正在监听8888端口');