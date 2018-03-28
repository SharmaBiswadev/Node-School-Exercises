var http=require('http');
var fs=require('fs');

const server = http.createServer((req, res) => {

const readStream =fs.createReadStream(process.argv[3]);
readStream.pipe(res);
	
}).listen(process.argv[2]);