var fs = require("fs"); 
var nt = require("net");

var srv=nt.createServer();
srv.on("connection",Connection);

srv.listen(8080,function(){
	console.log("calc server")
});

function Connection(connection){
connection.on('data',onData);
connection.on('close',onClose);
connection.on('error',onError);
	function onData(data){
		var vv=0;
		var n=50;
		try{
			vv=eval(data.toString());
			console.log(vv.toString());
			connection.end(vv.toString())
		}catch(err){
			connection.destroy();
		}
		
		
	}
	function onClose(){
		connection.destroy();
	}
	function onError(data){
		console.log(data);
		connection.destroy();
	}



}
