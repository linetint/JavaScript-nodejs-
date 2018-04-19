const underscore=require('underscore');

//console.log(underscore);

var arr=[3,6,9,1,12];

console.log(underscore.first([5,4,3,2,1])); //5

console.log(underscore.first([15,14,13,12,11])); //15

console.log(underscore.first(arr)); //3

console.log(underscore.last(arr)); //12