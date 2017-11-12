
console.log("Check Admin Functionality");
exports.adminCheck=function(req, res,next)
{
	var adminCheck=req.query.adminCheck;
	console.log(req.query.adminCheck);	
	if(adminCheck)
	{	
		console.log("Welcome Admin , Please peform the  operations. Today date is", GetDate()); 
		next();

	}
	else
	{	res.send("Your are not authorized to Access this operatons"); next();	}
	

};