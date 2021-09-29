const fs = require('fs');
const url = require('url');
const http = require('http');
const uc = require('upper-case');
const events = require('events');
const eventEmitter = new events.EventEmitter();
const formidable = require('formidable');
const nodemailer = require('nodemailer');

/*

fs.open('Randomfile.tx ', (w', (err, file) => {
if (err) throw err;
console.log('Worked.');
});
*/


/*
fs.writeFile('Randomfile.txt', 'turtle won', (err) => {
	if (err) throw err;
	console.log("Worked again.");
});*/


/*const address = 'http://localhost:8080/default.htm?year=2017&month=february';
let q = url.parse(address, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

let qdata = q.query;
console.log(qdata.month);*/

/*
http.createServer(function (req, res) {
	  var q = url.parse(req.url, true);
	  var filename = "." + q.pathname;
	  fs.readFile(filename, function(err, data) {
		      if (err) {
			            res.writeHead(404, {'Content-Type': 'text/html'});
			            return res.end("404 Not Found");
			          } 
		      res.writeHead(200, {'Content-Type': 'text/html'});
		      res.write(data);
		      return res.end();
		    });
}).listen(8080);*/


/*http.createServer((req, res) => {
	 res.writeHead(200, {'Content-Type': 'text/html'});
	  res.write(uc.upperCase("Bhad me jau!"));
	  res.end();
}).listen(8080);
*/


/*let eventHandler = () => {
	console.log('Almost done.');
}

eventEmitter.on('scream', eventHandler);

eventEmitter.emit('scream');*/

/*
http.createServer((req, res) => {
	 res.writeHead(200, {'Content-Type': 'text/html'});
	 res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
	  res.write('<input type="file" name="filetoupload"><br>');
	  res.write('<input type="submit">');
	  res.write('</form>');
	  return res.end();
}).listen(8080);*/

/*
var transporter = nodemailer.createTransport({
	  service: 'gmail',
	  auth: {
		      user: 'youremail@gmail.com',
		      pass: 'yourpassword'
		    }
});

var mailOptions = {
	  from: 'youremail@gmail.com',
	  to: 'myfriend@yahoo.com',
	  subject: 'Sending Email using Node.js',
	  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
		      console.log(error);
		    } else {
			        console.log('Email sent: ' + info.response);
			      }
});*/

console.log("Kaam khatam");
