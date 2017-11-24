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
app.put('/deleteAll',adminMiddleware.adminCheck,function(req, res) {
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
app.put('/deleteAdmin' ,function(req, res) {
	blogModel.deleteMany(function(err,result){
		if(err){
			res.send(err);
		}
		else{
			res.send(result)
		}

	});
});


//deleteing using remove 
app.put('/delete/:id/edit',function(req, res) {
	blogModel.remove({'_id':req.params.id},function(err,result){
		if(err){
			res.send(err);
		}
		else{
			
			res.send(result)
		}
	}); 
});

//deleteing using remove one
app.put('/deleteOne/:id/edit',function(req, res) {
	blogModel.deleteOne({'_id':req.params.id},function(err,result){
		if(err){
			res.send(err);
		}
		else{
			
			res.send(result)
		}
	}); 
});


app.use(function(request,response){
	response.sendStatus(404);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});