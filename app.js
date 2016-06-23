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




app.get('/getEmployeeDetails',function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	res.end(JSON.stringify({
	"users": [
    {
        "userId": "103073",
        "businessPhone": "(01) 781 67809876",
        "empId": null,
        "lastModifiedDateTime": "/Date(1462957988000+0000)/",
        "username": "jpatrick",
        "married": true,
        "addressLine": "19 Thatcher St",
        "jobCode": "Executive Management (50071000)",
        "totalTeamSize": "2",
        "dateOfBirth": "Wed Jun 22 2016",
        "newToPosition": false,
        "division": "Executive Office (EXEC)",
        "veteranSeparated": false,
        "veteranProtected": false,
        "lastModified": "/Date(1462943588000)/",
        "gender": "M",
        "lastName": "Patrick",
        "hireDate": "/Date(1388966400000)/",
        "country": "USA",
        "email": "true",
        "defaultLocale": "en_US",
        "minority": false,
        "department": "Shared Services (5000018)",
        "city": "Milton",
        "lastModifiedWithTZ": "/Date(1462957988000+0000)/",
        "keyPosition": false,
        "defaultFullName": "James Patrick",
        "jobTitle": "VP Shared Services",
        "employeeClass": "Active",
        "location": "Corporate - US-Philadelphia (0300-0001)",
        "competency": "0.0",
        "state": "Massachusetts"
    },
    {
        "userId": "107022",
        "businessPhone": "(86) 10 8349-1914",
        "empId": 107022,
        "lastModifiedDateTime": "/Date(1462957988000+0000)/",
        "username": "swu",
        "married": true,
        "addressLine": "2 Sanlihe Rd,Haidian",
        "jobCode": "HR Professional (50029122)",
        "totalTeamSize": "0",
        "dateOfBirth": "Thu Jun 23 2016",
        "newToPosition": false,
        "division": "Corporate Services (CORP_SVCS)",
        "veteranSeparated": false,
        "veteranProtected": false,
        "lastModified": "/Date(1462943588000)/",
        "gender": "M",
        "lastName": "Wu",
        "hireDate": "/Date(1388966400000)/",
        "country": "USA",
        "email": "true",
        "defaultLocale": "en_US",
        "minority": false,
        "department": "Compensation and Benefits CN (50100007)",
        "city": "Beijing",
        "lastModifiedWithTZ": "/Date(1462957988000+0000)/",
        "keyPosition": false,
        "defaultFullName": "Admin Synch",
        "jobTitle": "Sr. Compensation Analyst",
        "employeeClass": "Active",
        "location": "Beijing (2800-BJ01)",
        "competency": "0.0",
        "state": "Beijing"
    },
    {
        "userId": "107023",
        "businessPhone": "(86) 10 8279-9770",
        "empId": 107023,
        "lastModifiedDateTime": "/Date(1462957988000+0000)/",
        "username": "azeng",
        "married": true,
        "addressLine": "52 West Jiangtai Road,Chaoyang",
        "jobCode": "Management & Planning (50070999)",
        "totalTeamSize": "1",
        "dateOfBirth": "Fri Jun 24 2016",
        "newToPosition": false,
        "division": "Corporate Services (CORP_SVCS)",
        "veteranSeparated": false,
        "veteranProtected": false,
        "lastModified": "/Date(1462943588000)/",
        "gender": "F",
        "lastName": "Zeng",
        "hireDate": "/Date(1388966400000)/",
        "country": "CHN",
        "email": "true",
        "defaultLocale": "en_US",
        "minority": false,
        "department": "Compensation and Benefits CN (50100007)",
        "city": "Beijing",
        "lastModifiedWithTZ": "/Date(1462957988000+0000)/",
        "keyPosition": false,
        "defaultFullName": "Aizhen Zeng",
        "jobTitle": "Compensation Manager",
        "employeeClass": "Active",
        "location": "Shanghai (2800-SH01)",
        "competency": "0.0",
        "state": "Beijing"
    },
    {
        "userId": "107035",
        "businessPhone": "(86) 10 8279-9770",
        "empId": 107035,
        "lastModifiedDateTime": "/Date(1462957988000+0000)/",
        "username": "flan",
        "married": true,
        "addressLine": "5 Jiang Tai West Rd,Chaoyang",
        "jobCode": "HR Professional (50029122)",
        "totalTeamSize": "0",
        "dateOfBirth": "Fri Jun 24 2016",
        "newToPosition": false,
        "division": "Corporate Services (CORP_SVCS)",
        "veteranSeparated": false,
        "veteranProtected": false,
        "lastModified": "/Date(1462943588000)/",
        "gender": "F",
        "lastName": "Lan",
        "hireDate": "/Date(1388966400000)/",
        "country": "CHN",
        "email": "true",
        "defaultLocale": "en_US",
        "minority": false,
        "department": "Employee Development CN (50100009)",
        "city": "Beijing",
        "lastModifiedWithTZ": "/Date(1462957988000+0000)/",
        "keyPosition": false,
        "defaultFullName": "Fan Lan",
        "jobTitle": "Program Manager",
        "employeeClass": "Active",
        "location": "Shanghai (2800-SH01)",
        "competency": "0.0",
        "state": "Beijing"
    },
    {
        "userId": "107030",
        "businessPhone": "(86) 10 7795-4762",
        "empId": 107030,
        "lastModifiedDateTime": "/Date(1462957988000+0000)/",
        "username": "cliang",
        "married": true,
        "addressLine": "1 Beifeng Wo,Haidian",
        "jobCode": "HR Professional (50029122)",
        "totalTeamSize": "0",
        "dateOfBirth": "Sun Jul 24 2016",
        "newToPosition": false,
        "division": "Corporate Services (CORP_SVCS)",
        "veteranSeparated": false,
        "veteranProtected": false,
        "lastModified": "/Date(1462943588000)/",
        "gender": "M",
        "lastName": "Liang",
        "hireDate": "/Date(1388966400000)/",
        "country": "CHN",
        "email": "true",
        "defaultLocale": "en_US",
        "minority": false,
        "department": "Employee Development CN (50100009)",
        "city": "Beijing",
        "lastModifiedWithTZ": "/Date(1462957988000+0000)/",
        "keyPosition": false,
        "defaultFullName": "Chao Liang",
        "jobTitle": "Development Analyst Lead",
        "employeeClass": "Active",
        "location": "Shenzhen (2800-SZ01)",
        "competency": "0.0",
        "state": "Beijing"
    },
    {
        "userId": "107026",
        "businessPhone": "(86) 10 7795-4762",
        "empId": 107026,
        "lastModifiedDateTime": "/Date(1462957988000+0000)/",
        "username": "hxiong",
        "married": false,
        "addressLine": "121 Wanming Rd,Xuanwu",
        "jobCode": "HR Professional (50029122)",
        "totalTeamSize": "0",
        "dateOfBirth": "Sun Jul 24 2016",
        "newToPosition": false,
        "division": "Corporate Services (CORP_SVCS)",
        "veteranSeparated": false,
        "veteranProtected": false,
        "lastModified": "/Date(1462943588000)/",
        "gender": "M",
        "lastName": "Xiong",
        "hireDate": "/Date(1388966400000)/",
        "country": "CHN",
        "email": "true",
        "defaultLocale": "en_US",
        "minority": false,
        "department": "Employee Development CN (50100009)",
        "city": "Beijing",
        "lastModifiedWithTZ": "/Date(1462957988000+0000)/",
        "keyPosition": false,
        "defaultFullName": "Hui Xiong",
        "jobTitle": "Development Analyst",
        "employeeClass": "Active",
        "location": "Shanghai (2800-SH01)",
        "competency": "0.0",
        "state": "Beijing"
    },
    {
        "userId": "107014",
        "businessPhone": "(86) 10 8764-4333",
        "empId": 107014,
        "lastModifiedDateTime": "/Date(1462957988000+0000)/",
        "username": "dye",
        "married": false,
        "addressLine": "11 Fragrant Hill Park,Haidian",
        "jobCode": "Management & Planning (50070999)",
        "totalTeamSize": "0",
        "dateOfBirth": "Wed Jun 29 2016",
        "newToPosition": false,
        "division": "Corporate Services (CORP_SVCS)",
        "veteranSeparated": false,
        "veteranProtected": false,
        "lastModified": "/Date(1462943588000)/",
        "gender": "M",
        "lastName": "Ye",
        "hireDate": "/Date(1388966400000)/",
        "country": "CHN",
        "email": "true",
        "defaultLocale": "en_US",
        "minority": false,
        "department": "Employee Development CN (50100009)",
        "city": "Beijing",
        "lastModifiedWithTZ": "/Date(1462957988000+0000)/",
        "keyPosition": false,
        "defaultFullName": "David Ye",
        "jobTitle": "Development Manager",
        "employeeClass": "Active",
        "location": "Shanghai (2800-SH01)",
        "competency": "0.0",
        "state": "Beijing"
    },
    {
        "userId": "107013",
        "businessPhone": "(86) 10 8764-4333",
        "empId": 107013,
        "lastModifiedDateTime": "/Date(1462957988000+0000)/",
        "username": "hfung",
        "married": false,
        "addressLine": "8 Xinzhong Xijie,Dongcheng",
        "jobCode": "Executive Support (50011876)",
        "totalTeamSize": "0",
        "dateOfBirth": "Fri Jul 15 2016",
        "newToPosition": false,
        "division": "Manufacturing (MANU)",
        "veteranSeparated": false,
        "veteranProtected": false,
        "lastModified": "/Date(1462943588000)/",
        "gender": "F",
        "lastName": "Fung",
        "hireDate": "/Date(1388966400000)/",
        "country": "CHN",
        "email": "true",
        "defaultLocale": "en_US",
        "minority": false,
        "department": "Operations CN (50100010)",
        "city": "Beijing",
        "lastModifiedWithTZ": "/Date(1462957988000+0000)/",
        "keyPosition": false,
        "defaultFullName": "Han Fung",
        "jobTitle": "Executive Assistant",
        "employeeClass": "Active",
        "location": "Shanghai (2800-SH01)",
        "competency": "0.0",
        "state": "Beijing"
    },
    {
        "userId": "107029",
        "businessPhone": "(86) 10 7864-6906",
        "empId": 107029,
        "lastModifiedDateTime": "/Date(1462957988000+0000)/",
        "username": "agao",
        "married": false,
        "addressLine": "12 HepingLi Street North,Dongcheng",
        "jobCode": "Executive Support (50011876)",
        "totalTeamSize": "0",
        "dateOfBirth": "Fri Jun 24 2016",
        "newToPosition": false,
        "division": "Manufacturing (MANU)",
        "veteranSeparated": false,
        "veteranProtected": false,
        "lastModified": "/Date(1462943588000)/",
        "gender": "M",
        "lastName": "Gao",
        "hireDate": "/Date(1388966400000)/",
        "country": "CHN",
        "email": "true",
        "defaultLocale": "en_US",
        "minority": false,
        "department": "Operations CN (50100010)",
        "city": "Beijing",
        "lastModifiedWithTZ": "/Date(1462957988000+0000)/",
        "keyPosition": false,
        "defaultFullName": "Anson Gao",
        "jobTitle": "Engineer II",
        "employeeClass": "Active",
        "location": "Shanghai (2800-SH01)",
        "competency": "0.0",
        "state": "Beijing"
    }
]
}));
});


app.get('/searchEmployeesByBirthDate',function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	res.end(JSON.stringify({users:[{
        "userId": "107023",
        "businessPhone": "(86) 10 8279-9770",
        "empId": 107023,
        "lastModifiedDateTime": "/Date(1462957988000+0000)/",
        "username": "azeng",
        "married": true,
        "addressLine": "52 West Jiangtai Road,Chaoyang",
        "jobCode": "Management & Planning (50070999)",
        "totalTeamSize": "1",
        "dateOfBirth": "Fri Jun 24 2016",
        "newToPosition": false,
        "division": "Corporate Services (CORP_SVCS)",
        "veteranSeparated": false,
        "veteranProtected": false,
        "lastModified": "/Date(1462943588000)/",
        "gender": "F",
        "lastName": "Zeng",
        "hireDate": "/Date(1388966400000)/",
        "country": "CHN",
        "email": "true",
        "defaultLocale": "en_US",
        "minority": false,
        "department": "Compensation and Benefits CN (50100007)",
        "city": "Beijing",
        "lastModifiedWithTZ": "/Date(1462957988000+0000)/",
        "keyPosition": false,
        "defaultFullName": "Aizhen Zeng",
        "jobTitle": "Compensation Manager",
        "employeeClass": "Active",
        "location": "Shanghai (2800-SH01)",
        "competency": "0.0",
        "state": "Beijing"
    }, {
        "userId": "107035",
        "businessPhone": "(86) 10 8279-9770",
        "empId": 107035,
        "lastModifiedDateTime": "/Date(1462957988000+0000)/",
        "username": "flan",
        "married": true,
        "addressLine": "5 Jiang Tai West Rd,Chaoyang",
        "jobCode": "HR Professional (50029122)",
        "totalTeamSize": "0",
        "dateOfBirth": "Fri Jun 24 2016",
        "newToPosition": false,
        "division": "Corporate Services (CORP_SVCS)",
        "veteranSeparated": false,
        "veteranProtected": false,
        "lastModified": "/Date(1462943588000)/",
        "gender": "F",
        "lastName": "Lan",
        "hireDate": "/Date(1388966400000)/",
        "country": "CHN",
        "email": "true",
        "defaultLocale": "en_US",
        "minority": false,
        "department": "Employee Development CN (50100009)",
        "city": "Beijing",
        "lastModifiedWithTZ": "/Date(1462957988000+0000)/",
        "keyPosition": false,
        "defaultFullName": "Fan Lan",
        "jobTitle": "Program Manager",
        "employeeClass": "Active",
        "location": "Shanghai (2800-SH01)",
        "competency": "0.0",
        "state": "Beijing"
    },{
        "userId": "107029",
        "businessPhone": "(86) 10 7864-6906",
        "empId": 107029,
        "lastModifiedDateTime": "/Date(1462957988000+0000)/",
        "username": "agao",
        "married": false,
        "addressLine": "12 HepingLi Street North,Dongcheng",
        "jobCode": "Executive Support (50011876)",
        "totalTeamSize": "0",
        "dateOfBirth": "Fri Jun 24 2016",
        "newToPosition": false,
        "division": "Manufacturing (MANU)",
        "veteranSeparated": false,
        "veteranProtected": false,
        "lastModified": "/Date(1462943588000)/",
        "gender": "M",
        "lastName": "Gao",
        "hireDate": "/Date(1388966400000)/",
        "country": "CHN",
        "email": "true",
        "defaultLocale": "en_US",
        "minority": false,
        "department": "Operations CN (50100010)",
        "city": "Beijing",
        "lastModifiedWithTZ": "/Date(1462957988000+0000)/",
        "keyPosition": false,
        "defaultFullName": "Anson Gao",
        "jobTitle": "Engineer II",
        "employeeClass": "Active",
        "location": "Shanghai (2800-SH01)",
        "competency": "0.0",
        "state": "Beijing"
    }]}));
});

app.get('/searchByKeyword/:category/:keyword',function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	var category = req.params.category;
	var keyword = req.params.keyword;
	console.log("======================================>");
	fs.readFile('./Employee.json',function(err,data){
			console.log('***************', err, data);
			data = JSON.parse(data);
			var result = _.find(data, function(item){ return item[category] == keyword;});
			console.log('*********************',result);
		res.end(JSON.stringify(result));
	
	});
		
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
