var fs=require('fs');

//Sync(동기)방식

console.log("1");

var data_sync=fs.readFileSync('data.txt',{encoding:'utf8'});

console.log(data_sync);




//Async(비동기)방식

console.log("2");

var data_async=fs.readFile('data.txt',{encoding:'utf8'},function(err,data){
    
    console.log("3");
    console.log(data);
    
});

console.log(data_async);

console.log("4");

