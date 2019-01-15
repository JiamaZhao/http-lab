const http = require('http');
const fs = require('fs');
const wait = (sec) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('time is out');
        }, sec * 1000);
    });
}
http.createServer(function(req, res){
    console.log(req.url);
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        const html = fs.readFileSync('./test2.html', 'utf-8');
        res.end(html);
    }
    if (req.url === '/data') {
        res.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'max-age=2'
        });
        wait(5).then((data) => {
            res.end(data)
        });
    }
}).listen(8888);

console.log('正在监听8888端口');