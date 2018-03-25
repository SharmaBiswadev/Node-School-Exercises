var http=require('http');
var url=require('url');


const server = http.createServer((req, res) => {

	let parsedurl=url.parse(req.url,true);
	console.log(parsedurl);

	if((/api\/parsetime/).test(req.url)==true){
    let date=new Date(parsedurl.query.iso);
    	console.log(parsedurl.query);
    var result={
    	hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    } 


	}else if((/api\/unixtime/).test(req.url)==true){
		var date=new Date(parsedurl.query.iso);
		 var result={
    	unixtime: date.getTime()
    } 
	}
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(result));
 
}).listen(process.argv[2]);