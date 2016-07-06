var express = require('express');
var path = require('path');
var _ = require('lodash');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);






app.get('/setupbox/:id',function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	var setupid = req.params.id;
	console.log("======================================>");
	fs.readFile('./setupboxes.json',function(err,data){
			console.log('***************', err, data);
			data = JSON.parse(data);
			var result = _.find(data, function(item){ 
				return item.id == setupid;
				});
			console.log('*********************',result);
		res.end(JSON.stringify(result));
	
	});
		
}); 


app.get('/natureTypes',function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	var setupid = req.params.id;
	console.log("======================================>");
	fs.readFile('./natureRequest.json',function(err,data){
			console.log('***************', err, data);
			data = JSON.parse(data);
		res.end(JSON.stringify(data));
	
	});
		
}); 


app.get('/contactExisting/:id',function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	var setupid = req.params.id;
	console.log("======================================>");
	fs.readFile('./natureRequest.json',function(err,data){
			console.log('***************', err, data);
			data = JSON.parse(data);
			var result = _.find(data, function(item){ 
				return item.id == setupid;
				});
			console.log('*********************',result);
		res.end(JSON.stringify(result));
	
	});
		
}); 



app.get('/acceptInvitation',function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	res.end(JSON.stringify({"accept":"Invitation accepted"}))
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
