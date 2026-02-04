import http from 'http';

const server =http.createServer((req, res) =>{
    console.log('server1');
    res.send('Hi this is my first server');
})

server.listen(3000, ()=>{
    console.log('server is listening on port 3000');
});