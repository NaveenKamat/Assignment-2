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

//referrin the database

var blogModel = mongoose.model('Blog');

app.get('/', function (req, res) {

  res.send("Welcome to BLog find the details of ")

});

/*Using Blog Model having an instance for the schema and referring the same schema */
app.get('/fetchAll',function(req, res) {

	blogModel.find(function(err,result){
		if(err){
			res.send(err);
			console.log("some error");
		}
		else{
			res.send(result)
		}


	});
  
});
app.get('/fetchid/:id',function(req, res) {

	blogModel.findOne({'_id':req.params.id},function(err,result){
		if(err){
			res.send(err);
		}
		else{
			
			res.send(result)
		}


	}); 
});

/*Using database insatnce and referring an Collections */
app.get('/fetchAllDetails',function(req, res) {

	db.collection("blogs").find({}).toArray(function(err,result){
		if(err){
			//console.log("some error");
			console.log(err);
			res.send(err);
		}
		else{
			
			res.send(result)
		}
	});
  
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