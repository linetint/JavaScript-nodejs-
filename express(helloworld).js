var express=require('express');

var app=express();

//console.log(app);

app.get('/',function(req,res){
    
   res.send("hello world!!"); 
    
});

app.listen(3000,function(){
    
   console.log("Example express(helloworld).js listening on port 3000");
    
});














