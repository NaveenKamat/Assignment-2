
console.log("Check Admin Functionality");
exports.adminCheck=function(req, res,next)
{
	var adminCheck=req.query.adminCheck;
	if(adminCheck==0)
	{	
		console.log("Welcome Admin , Please peform the  operations"); 
		next();
	}
	else
	{	res.send("Your are not authorized to Access this operatons"); 	}
};