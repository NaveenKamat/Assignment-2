
// defining a mongoose schema 
// including the module
var mongoose = require('mongoose');
// declare schema object.
var Schema = mongoose.Schema;

var blogSchema = new Schema({

	//authorInfo  	: { authorFirstName: {type:String,default:'',required:true} ,
					//	authorLastName: {type:String,default:''}
					 // }, // information of author in form of obje-ct
	authorFirstName	: {type:String,required:true} ,
	authorLastName	: {type:String,default:''} ,				 
	blogTitle 		: { type:String,required:true},
	subTitle 		: { type:String,default:''},
	blogDecription 	: { type:String,default:''},
	tags			: [],// name of tags in array
	comments        : {},
	likes           : { type:Number},
	created			: { type:Date},
	lastModified 	: { type:Date,default: Date.now},
	email 			: 	{ type:String,default:''},	

});

//console.log(blogSchema);
mongoose.model('Blog',blogSchema);