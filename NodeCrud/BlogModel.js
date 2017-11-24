
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var blogSchema = new Schema({
	authorFirstName	: {type:String,required:true} , //placeholder for author first name
	authorLastName	: {type:String,default:''} , //placeholder for author Last name
	blogTitle 		: { type:String,required:true}, // placeholder blogtitle
	subTitle 		: { type:String,default:''}, ////placeholder for subtile
	blogDecription 	: { type:String,default:''}, //this a placeholder for complete description on blogdescription
	tags			: [],// name of tags in array
	comments        : {}, //any comments given on this particular blog
	likes           : { type:Number}, // likes for the blog
	created			: { type:Date}, // created date. this is placeholder to keep the document when the intial blog create for the first time
	lastModified 	: { type:Date,default: Date.now}, // this will be recurring to keep track work changes on the blog
	email 			: { type:String,default:''},	

});
mongoose.model('Blog',blogSchema);