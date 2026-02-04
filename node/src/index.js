import http from 'http';
const PORT=5000;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const url = req.url;
    if (url === '/') {
        res.write(' <h1>We are students of college</h1>');
        res.end();
    }
    else if (url === '/about') {
        res.write(' <h1>We are students of Abesec</h1>');
        res.write('<img src="https://manage.collnod.com/Upload/Content/web_img_0_1_9_2023_12_42_12.gif" alt="Placeholder Image" style="width:300px;height:200px;">');
        res.end();
    }
    else if (url === '/contact') {
        res.write(' <h1>Welcome to contact us page</h1>');
        res.end();
    }
    else if(url==='/class'){
        res.write(' <h1>Hello, welcome to the hi page!</h1>');
        res.end();
    }

    else {
        res.write(' <h1>404 Not Found</h1>');
        res.end();
    }
}).listen(PORT, function () {
    console.log(`server start at port ${PORT}`);
});