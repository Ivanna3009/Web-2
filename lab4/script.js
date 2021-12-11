var User=require('./user');
var user=new User('Ivanna','Belia');
console.log('firstname:'+user.first);
console.log('lastname:'+user.last);
user.fullName();
