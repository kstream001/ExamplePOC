var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

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




app.get('/getPremiumDate',function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	res.end(JSON.stringify({"policies":[{"policyNumber":"9348209","policyStartDate":"19/06/2016","policyType":"monthly","policyName":"Simplified Issue Term Life Insurance","premiumAmount":"$4.75","policyEndDate":"27/5/2019","premiumPaymentDate":"19/07/2017","coverageAmount":"$10,000","beneficirayName":"John","termLength":"10 Years"},{"policyNumber":"18494","policyStartDate":"12/12/2013","policyType":"monthly","policyName":"Whole Life Insurance","premiumAmount":"$83.50","policyEndDate":"27/05/2018","premiumPaymentDate":"12/12/2016","termLength":"10 Years","beneficirayName":"Mike","coverageAmount":"$20,000"},{"policyNumber":"1987650","policyStartDate":"02/07/2007","termLength":"15years","policyType":"monthly","policyName":"Term Life Insurance","premiumAmount":"$35.99","policyEndDate":"02/07/2022","premiumPaymentDate":"02/06/2016","coverageAmount":"$1,000,000","beneficirayName":"David"}]}));
});


app.get('/payPremiumamount',function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	res.end(JSON.stringify({"policyNumber":"9348209","message":"Successfully paid the premium amount","nextPremiumDate":"27/5/2018"}));
});

app.get('/getTaxCertificate',function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	res.end(JSON.stringify({"policyNumber":"9348209","policyName":"Jeevan Anandh","url":"http://www.revenue.ie/images/guide-paye-employees-booklet.jpg"}));
});

app.get('/policyDetails/:id',function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	if(req.params.id == '9348209'){
		res.end(JSON.stringify({"policyNumber":"9348209","policyStartDate":"19/06/2016","policyType":"monthly","policyName":"Simplified Issue Term Life Insurance","premiumAmount":"$4.75","policyEndDate":"27/5/2019","premiumPaymentDate":"19/07/2017","coverageAmount":"$10,000","beneficirayName":"John","termLength":"10 Years"}));
	}
	else if(req.params.id == '1987650'){
		res.end(JSON.stringify({"policyNumber":"1987650","policyStartDate":"02/07/2007","termLength":"15years","policyType":"monthly","policyName":"Term Life Insurance","premiumAmount":"$35.99","policyEndDate":"02/07/2022","premiumPaymentDate":"02/06/2016","coverageAmount":"$1,000,000","beneficirayName":"David"}));
	}
	else if(req.params.id == '18494'){
		res.end(JSON.stringify({"policyNumber":"18494","policyStartDate":"12/12/2013","policyType":"monthly","policyName":"Whole Life Insurance","premiumAmount":"$83.50","policyEndDate":"27/05/2018","premiumPaymentDate":"12/12/2016","termLength":"10 Years","beneficirayName":"Mike","coverageAmount":"$20,000"}));
	}
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
