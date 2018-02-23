var http = require("http");

var goodPORT = 7000;
var badPORT = 7500;
var tweetPORT = 7001;

var goodPhraseArr = ["Nice code!", "Nice haircut!", ""]

function goodRequest(request, response){
	response.end("Something positive");
}

function badRequest(request, response){
	response.end("Something negative");
}


var goodServer = http.createServer(goodRequest);
var badServer = http.createServer(badRequest);

goodServer.listen(goodPORT, function() {
	console.log("\nServer listening on: http://localhost:"+ goodPORT)
})

badServer.listen(badPORT, function(){
	console.log("\nServer listening on: http://localhost:"+ badPORT)
})