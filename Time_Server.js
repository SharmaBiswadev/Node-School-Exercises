var net=require('net');
var moment=require('moment');
net.createServer((socket)=>{
	let date=new Date();
	let formattedate=moment().format('YYYY-MM-DD HH:mm')
	socket.write(formattedate);
	socket.end("\n");
}).listen(process.argv[2]);