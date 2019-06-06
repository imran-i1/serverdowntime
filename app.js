var fs = require('fs');
var http = require('http');
var express = require('express');
var app = express();


var timeInterVal = 3000;
var a=    setInterval(function () {

http.get('http://etcetc.xyz:3000', function (err,res) {
if (res.statusCode >= 200 && res.statusCode <= 299) {
console.log('server response', res.statusCode);
}
}).on('error', function (e) {
console.log('2222222222222222')

var server1= http.createServer(app)
app.set('view engine','ejs');

app.get('/',function(req,res){

res.render('server.ejs');
});


server1.listen(3000);
myfunction()


});


}, timeInterVal);

myfunction=function(){
clearInterval(a);
}


// read file and append the the file and replace the regular expression with specified expression

//var readFileData=fs.readFileSync('read.txt','utf8');

//var replacestring=readFileData.replace(/This is Second Line/g,'.');
//var writeFile=fs.writeFileSync('read.txt',replacestring,'utf8');
//var readFileData=fs.readFileSync('read.txt','utf8');
//console.log(readFileData);


// time function in node modules

//setTimeout(function(){
//console.log('setTimeout');
//},1000);






