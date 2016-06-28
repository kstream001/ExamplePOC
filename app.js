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
		"emp_image":"http://www.prnewsonline.com/Assets/Image/Lede2_Marty%20Dauer%20-%20Duff%20&%20Phelps_web.jpg",
		"image":"http://www.happybirthdaywishes-images.com/wp-content/uploads/2015/05/wishes-for-happy-birthday-picture.jpg",
        "lastModifiedDateTime": "/Date(1462957988000+0000)/",
        "username": "jpatrick",
		"anniversary":"Mon Jun 27 1992",
		"anniversary_image":"http://www.lovethispic.com/uploaded_images/223023-Animated-Happy-Anniversary-Image.gif",
        "married": true,
        "addressLine": "19 Thatcher St",
        "jobCode": "Executive Management (50071000)",
        "totalTeamSize": "2",
        "dateOfBirth": "Wed Jun 22 1976",
        "newToPosition": false,
        "division": "Executive Office (EXEC)",
        "veteranSeparated": false,
        "veteranProtected": false,
        "lastModified": "/Date(1462943588000)/",
        "gender": "M",
        "lastName": "Patrick",
        "hireDate": "/Date(1388966400000)/",
        "country": "USA",
        "email": "jamespatrick@microland.com",
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
		"emp_image":"http://www.prnewsonline.com/Assets/Image/Lede2_Kirsten%20Gorsuch%20-%20Medtronic_web.jpg",
        "lastModifiedDateTime": "/Date(1462957988000+0000)/",
		"image":"http://www.happybirthdaywishes-images.com/wp-content/uploads/2015/05/Happy-Birthday-wishes.jpg",
		"anniversary":"Fri Jun 24 2016",
		"anniversary_image":"http://dekhnews.com/wp-content/uploads/2015/09/Best-Happy-Wedding-Anniversary-Greetings-Photos.jpg",
        "username": "swu",
        "married": true,
        "addressLine": "2 Sanlihe Rd,Haidian",
        "jobCode": "HR Professional (50029122)",
        "totalTeamSize": "0",
        "dateOfBirth": "Thu Jun 23 1974",
        "newToPosition": false,
        "division": "Corporate Services (CORP_SVCS)",
        "veteranSeparated": false,
        "veteranProtected": false,
        "lastModified": "/Date(1462943588000)/",
        "gender": "M",
        "lastName": "Wu",
        "hireDate": "/Date(1388966400000)/",
        "country": "USA",
        "email": "adminsynch@microland.com",
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
		"emp_image":"http://blogs-images.forbes.com/jacobmorgan/files/2015/05/Jacob-Morgan_avatar_1430962685-400x400.jpg",
        "lastModifiedDateTime": "/Date(1462957988000+0000)/",
		"image":"http://hpbirthday.net/wp-content/uploads/2016/01/the-collection-of-interesting-birthday-wishes-to-send-to-your-boss-1.jpg",
		"anniversary":"Mon Jun 27 2016",
		"anniversary_image":"http://imarriageanniversary.com/wp-content/uploads/2015/03/Wedding_Anniversary_Images_031.jpg",
        "username": "azeng",
        "married": true,
        "addressLine": "52 West Jiangtai Road,Chaoyang",
        "jobCode": "Management & Planning (50070999)",
        "totalTeamSize": "1",
        "dateOfBirth": "Fri Jun 24 1984",
        "newToPosition": false,
        "division": "Corporate Services (CORP_SVCS)",
        "veteranSeparated": false,
        "veteranProtected": false,
        "lastModified": "/Date(1462943588000)/",
        "gender": "F",
        "lastName": "Zeng",
        "hireDate": "/Date(1388966400000)/",
        "country": "CHN",
        "email": "aizhen@microland.com",
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
		"emp_image":"http://juniorbiz.com/wp-content/uploads/2010/04/SabirulIslam.png",
        "lastModifiedDateTime": "/Date(1462957988000+0000)/",
		"image":"http://www.birthdaywishes.guru/wp-content/uploads/2014/07/Birthday-Wishes-for-my-Friends.jpg",
		"anniversary":"Fri Jul 15 2016",
		"anniversary_image":"http://danielohlsen.com/uploads/fotos/wedding-wishes-sms-in-english_21517_600_400.jpg",
        "username": "flan",
        "married": true,
        "addressLine": "5 Jiang Tai West Rd,Chaoyang",
        "jobCode": "HR Professional (50029122)",
        "totalTeamSize": "0",
        "dateOfBirth": "Fri Jun 24 1988",
        "newToPosition": false,
        "division": "Corporate Services (CORP_SVCS)",
        "veteranSeparated": false,
        "veteranProtected": false,
        "lastModified": "/Date(1462943588000)/",
        "gender": "F",
        "lastName": "Lan",
        "hireDate": "/Date(1388966400000)/",
        "country": "CHN",
        "email": "fanlan@microland.com",
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
		"emp_image":"http://www.retireat21.com/wp-content/uploads/2008/01/ryandeiss_1330490334_89.jpg",
        "lastModifiedDateTime": "/Date(1462957988000+0000)/",
        "username": "cliang",
		"image":"https://s-media-cache-ak0.pinimg.com/736x/c8/30/49/c83049c9e1d508fc7e75d920359681f9.jpg",
		"anniversary":"Tue Jun 28 2016",
		"anniversary_image":"http://www.imagesbuddy.com/images/246/Happy-Anniversary-Cake-Picture.jpg",
        "married": true,
        "addressLine": "1 Beifeng Wo,Haidian",
        "jobCode": "HR Professional (50029122)",
        "totalTeamSize": "0",
        "dateOfBirth": "Sun Jul 24 1973",
		"birthday":"Fri 13 Jan 1976",
        "newToPosition": false,
        "division": "Corporate Services (CORP_SVCS)",
        "veteranSeparated": false,
        "veteranProtected": false,
        "lastModified": "/Date(1462943588000)/",
        "gender": "M",
        "lastName": "Liang",
        "hireDate": "/Date(1388966400000)/",
        "country": "CHN",
        "email": "chaoliang@microland.com",
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
		"emp_image":"http://www.incomediary.com/wp-content/uploads/2013/10/young-entrepreneur-quotes-5.jpg",
        "lastModifiedDateTime": "/Date(1462957988000+0000)/",
		"image":"https://s-media-cache-ak0.pinimg.com/736x/8f/88/be/8f88be0e4e77b2450dd66044c73b960e.jpg",
        "username": "hxiong",
        "married": false,
		"anniversary":"Wed Jun 29 2016",
		"anniversary_image":"http://1.bp.blogspot.com/-EXeGvpCJWC8/VQKHfRUdJqI/AAAAAAAACqo/i1UnPhvxMKo/s1600/Anniversary%2B(5).gif",
        "addressLine": "121 Wanming Rd,Xuanwu",
        "jobCode": "HR Professional (50029122)",
        "totalTeamSize": "0",
        "dateOfBirth": "Sun Jul 24 1988",
		"birthday":"Sat 11 Aug 1978",
        "newToPosition": false,
        "division": "Corporate Services (CORP_SVCS)",
        "veteranSeparated": false,
        "veteranProtected": false,
        "lastModified": "/Date(1462943588000)/",
        "gender": "M",
        "lastName": "Xiong",
        "hireDate": "/Date(1388966400000)/",
        "country": "CHN",
        "email": "huixiong@microland.com",
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
		"emp_image":"https://assets.entrepreneur.com/content/16x9/822/20160217122135-Rahul-Agrawal-CEO-and-Co-Founder-MebelKart.jpeg",
        "lastModifiedDateTime": "/Date(1462957988000+0000)/",
		"image":"http://www.makingdifferent.com/wp-content/uploads/2015/01/Birthday-Wishes.png",
		"anniversary":"Fri Jul 01 2016",
		"anniversary_image":"https://images7.alphacoders.com/512/512196.jpg",
        "username": "dye",
        "married": true,
        "addressLine": "11 Fragrant Hill Park,Haidian",
        "jobCode": "Management & Planning (50070999)",
        "totalTeamSize": "0",
        "dateOfBirth": "Wed Jun 29 1968",
		"birthday":"Sun, 07 Jun 1986",
        "newToPosition": false,
        "division": "Corporate Services (CORP_SVCS)",
        "veteranSeparated": false,
        "veteranProtected": false,
        "lastModified": "/Date(1462943588000)/",
        "gender": "M",
        "lastName": "Ye",
        "hireDate": "/Date(1388966400000)/",
        "country": "CHN",
        "email": "davidye@microland.com",
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
		"emp_image":"https://www.localenterprise.ie/images_upload/DublinCity/News/News%20Images/shutterstock_124505092resized.jpg",
        "lastModifiedDateTime": "/Date(1462957988000+0000)/",
		"image":"http://i.123g.us/c/birth_wishes/card/303718.jpg",
        "username": "hfung",
		"anniversary":"Mon Jul 04 2016",
		"anniversary_image":"http://dl7.glitter-graphics.net/pub/2000/2000687elr2o81na6.gif",
        "married": true,
        "addressLine": "8 Xinzhong Xijie,Dongcheng",
        "jobCode": "Executive Support (50011876)",
        "totalTeamSize": "0",
        "dateOfBirth": "Fri Jul 15 1979",
		"birthday":"Fri, 06 Jun 1986",
        "newToPosition": false,
        "division": "Manufacturing (MANU)",
        "veteranSeparated": false,
        "veteranProtected": false,
        "lastModified": "/Date(1462943588000)/",
        "gender": "F",
        "lastName": "Fung",
        "hireDate": "/Date(1388966400000)/",
        "country": "CHN",
        "email": "hanfung@microland.com",
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
		"emp_image":"http://notable.ca/wp-content/uploads/2015/03/vl77g3mp3jvik.jpg",
        "lastModifiedDateTime": "/Date(1462957988000+0000)/",
        "username": "agao",
		"anniversary":"Tue Jun 28 2016",
		"anniversary_image":"http://media.salemwebnetwork.com/cms/CROSSCARDS/17277-happy-anniversary-7.jpg",
        "married": true,
        "addressLine": "12 HepingLi Street North,Dongcheng",
		"image":"http://i.123g.us/c/birth_flowers/pc/111534_pc.jpg",
        "jobCode": "Executive Support (50011876)",
        "totalTeamSize": "0",
        "dateOfBirth": "Fri Jun 24 1989",
		"birthday":"Mon, 16 Sep 1988",
        "newToPosition": false,
        "division": "Manufacturing (MANU)",
        "veteranSeparated": false,
        "veteranProtected": false,
        "lastModified": "/Date(1462943588000)/",
        "gender": "M",
        "lastName": "Gao",
        "hireDate": "/Date(1388966400000)/",
        "country": "CHN",
        "email": "ansongao@microland.com",
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
		"emp_image":"http://blogs-images.forbes.com/jacobmorgan/files/2015/05/Jacob-Morgan_avatar_1430962685-400x400.jpg",
        "lastModifiedDateTime": "/Date(1462957988000+0000)/",
		"image":"http://hpbirthday.net/wp-content/uploads/2016/01/the-collection-of-interesting-birthday-wishes-to-send-to-your-boss-1.jpg",
		"anniversary":"Mon Jun 27 2016",
		"anniversary_image":"http://imarriageanniversary.com/wp-content/uploads/2015/03/Wedding_Anniversary_Images_031.jpg",
        "username": "azeng",
        "married": true,
        "addressLine": "52 West Jiangtai Road,Chaoyang",
        "jobCode": "Management & Planning (50070999)",
        "totalTeamSize": "1",
        "dateOfBirth": "Fri Jun 24 1984",
        "newToPosition": false,
        "division": "Corporate Services (CORP_SVCS)",
        "veteranSeparated": false,
        "veteranProtected": false,
        "lastModified": "/Date(1462943588000)/",
        "gender": "F",
        "lastName": "Zeng",
        "hireDate": "/Date(1388966400000)/",
        "country": "CHN",
        "email": "aizhen@microland.com",
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
		"emp_image":"http://juniorbiz.com/wp-content/uploads/2010/04/SabirulIslam.png",
        "lastModifiedDateTime": "/Date(1462957988000+0000)/",
		"image":"http://www.birthdaywishes.guru/wp-content/uploads/2014/07/Birthday-Wishes-for-my-Friends.jpg",
		"anniversary":"Fri Jul 15 2016",
		"anniversary_image":"http://danielohlsen.com/uploads/fotos/wedding-wishes-sms-in-english_21517_600_400.jpg",
        "username": "flan",
        "married": true,
        "addressLine": "5 Jiang Tai West Rd,Chaoyang",
        "jobCode": "HR Professional (50029122)",
        "totalTeamSize": "0",
        "dateOfBirth": "Fri Jun 24 1988",
        "newToPosition": false,
        "division": "Corporate Services (CORP_SVCS)",
        "veteranSeparated": false,
        "veteranProtected": false,
        "lastModified": "/Date(1462943588000)/",
        "gender": "F",
        "lastName": "Lan",
        "hireDate": "/Date(1388966400000)/",
        "country": "CHN",
        "email": "fanlan@microland.com",
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
		"emp_image":"http://notable.ca/wp-content/uploads/2015/03/vl77g3mp3jvik.jpg",
        "lastModifiedDateTime": "/Date(1462957988000+0000)/",
        "username": "agao",
		"anniversary":"Tue Jun 28 2016",
		"anniversary_image":"http://media.salemwebnetwork.com/cms/CROSSCARDS/17277-happy-anniversary-7.jpg",
        "married": true,
        "addressLine": "12 HepingLi Street North,Dongcheng",
		"image":"http://i.123g.us/c/birth_flowers/pc/111534_pc.jpg",
        "jobCode": "Executive Support (50011876)",
        "totalTeamSize": "0",
        "dateOfBirth": "Fri Jun 24 1989",
		"birthday":"Mon, 16 Sep 1988",
        "newToPosition": false,
        "division": "Manufacturing (MANU)",
        "veteranSeparated": false,
        "veteranProtected": false,
        "lastModified": "/Date(1462943588000)/",
        "gender": "M",
        "lastName": "Gao",
        "hireDate": "/Date(1388966400000)/",
        "country": "CHN",
        "email": "ansongao@microland.com",
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
	var keyword = _.lowerCase(req.params.keyword);
	console.log("======================================>");
	fs.readFile('./Employee.json',function(err,data){
			console.log('***************', err, data);
			data = JSON.parse(data);
			var result = _.find(data, function(item){ 
				console.log(item[category].indexOf(keyword)>-1);
				return (_.lowerCase(item[category]).indexOf(keyword)>-1);
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
