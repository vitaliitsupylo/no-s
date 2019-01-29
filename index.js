const http = require('http');
const port = 3000;
const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello Node.js Server!');
};
const index = http.createServer(requestHandler);
index.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
});