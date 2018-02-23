var http = require("http");

var goodPORT = 7000;
var badPORT = 7500;
var tweetPORT = 7001;

function handleRequest(request, response){
	response.end("It Works! Path hit: " + request.url+ "banana!");
}


var goodServer = http.createServer(handleRequest);
var badServer = http.createServer(handleRequest);

goodServer.listen(goodPORT, function() {
	console.log("\nServer listening on: http://localhost:"+ goodPORT,
				"\nWhat nice code!");
})

badServer.listen(badPORT, function(){
	console.log("\nServer listening on: http://localhost:"+ badPORT,
				"\nYou have a bad haircut.");
})