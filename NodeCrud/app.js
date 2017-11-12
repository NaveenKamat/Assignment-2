/*    Inserting  a record in Mongo DB*/

/*var express = require('express');
var router = express.Router()
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.json({limit:'10mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}));*/

//lets define configuration of database -DB name BlogApplication


var  header=require('./header.js');
app.use(bodyParser.json({limit:'10mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}));
mongoose.Promise = global.Promise;
var db = mongoose.connect('mongodb://localhost/testCreate', {
  useMongoClient: true,
  
});

mongoose.connection.once('open', function() {

	console.log("database connection open success");

});



// include the model file 

var Blog = require('./BlogModel.js');

var blogModel = mongoose.model('Blog');

// end include

// here are the routes 
router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next();
})

app.get('/', function (req, res) {

  res.send("Welcome to BLog create submit the input in API")

});


app.post('/blog/create',function(req, res) {
	var newBlog = new blogModel({

			blogTitle 	: req.body.blogTitle,
			subTitle 	: req.body.subTitle,
			blogBody 	: req.body.blogBody,
			email		: req.body.email,

		}); // end newBlog 
	
	var created=Date.now();

	newBlog.created =created;
	var allTags = (req.body.tags!=undefined && req.body.tags!=null)?req.body.tags.split(','):''
	newBlog.tags = allTags;
	var authorFirstName =  req.body.authorFirstName 
	var authorLastName =  req.body.authorLastName 
	newBlog.authorFirstName = authorFirstName;
	newBlog.authorLastName = authorLastName;

	// now lets save the file 
	newBlog.save(function(error){
		if(error){
			console.log(error);
			res.send(error);

		}
		else{
			
			res.send(newBlog);
		}

	}); // end new blog save

	  
});

app.use('/admin', router, function (req, res) {
  res.sendStatus(401)
})

app.use(function(request,response){
response.sendStatus(404);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});