var exp=require('express')
var mysql= require('mysql2')
var cors = require('cors')
var  bp= require('body-parser')

var app=exp()

app.use(cors())
app.use(bp.json())

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"studentschema"
})

con.connect(function(err){
    if(!err)
        console.log("db.connected");
    else
        console.log("db connection failed");
})
app.listen(9000,function(){
    console.log("express rest server-9000");
});
app.get('/students', function(req,res){
con.query("Select *  from studentinfo",function(err,result){
    if(!err)
    {
        console.log(result.length)
        res.json(result)
    }
})
})

app.post('/insertstudent',function(req,res){
       var s1 = req.body.studid;
       var s2 = req.body.fullname;
       var s3 = req.body.address;
       var s4 = req.body.email;
       var s5 = req.body.mobno;
       console.log(s1+":"+s2+":"+s3+":"+s4+":"+s5)
       var query = "insert into studentinfo(studId,fullName,Address,email,mobile) values(?,?,?,?,?)";
       con.query(query,[s1,s2,s3,s4,s5],function(err){
		if(!err){
		    res.send("Insert success");
		}
		else{
	            console.log(err.toString())		 
		    res.send("Insert failure");	
		}
	})	

})
