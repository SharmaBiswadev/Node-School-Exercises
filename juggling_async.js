var http=require('http');
var a=[];
var j=0;
var counter=0;
function print(){
	for(let i=0;i<3;i++)
	console.log(a[i])
}
callUrl=(k,cb)=>{
http.get(process.argv[k+2],function(response){
	let body='';
	j++;
	response.on('data',function(data){
     body+=data;
	})
	response.on('end',()=>{
		a[k]=body;
		j--;
		if(j==0){
			print();
		}
		})
});
}

for(let i=0;i<3;i++)
	callUrl(i,print);
