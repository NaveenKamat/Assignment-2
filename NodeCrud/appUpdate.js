 /*    Updating a record in Mongo DB*/
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
var Blog = require('./BlogModel.js');
var blogModel = mongoose.model('Blog');
var adminMiddleware=require('./CheckAdmin.js');

app.get('/', function (req, res) {
  res.send("Welcome to BLog  update ")
});

/*Using Blog Model having an instance for the schema and referring the same schema create a middleware*/
app.put('/updateAll',adminMiddleware.adminCheck,function(req, res) {
	blogModel.find(function(err,result){
		if(err){
			res.send(err);
		}
		else{
			res.send(result)
		}

	});
});

//Demonstration of DeleteAll functionality 
app.put('/updateAdmin',function(req, res) {
	var update = req.body;
	blogModel.updateMany(update,function(err,result){
		if(err){
			res.send(err);
		}
		else{
			res.send(result)
		}

	});
});


// updating using findOneAndUpdate
app.put('/update/:id/edit',function(req, res) {
	var update = req.body;
	blogModel.findOneAndUpdate({'_id':req.params.id},update,function(err,result){
		if(err){
			res.send(err);
		}
		else{
			
			res.send(result)
		}
	}); 
});
// updating using updateOne
app.put('/updateOne/:id/edit',function(req, res) {
	var update = req.body;
	blogModel.updateOne({'_id':req.params.id},update,function(err,result){
		if(err){
			res.send(err);
		}
		else{
			res.send(result);
		}
	}); 
});

app.use(function(request,response){
	response.sendStatus(404);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});