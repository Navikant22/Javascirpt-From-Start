const accountId=15515    //you can't change
let accountEmail="navikant@gmail.com" //use only let instead of var
var accountPassword="1234321"
accountCity="Noida"
// accountId = 2 not allowed to change
accountEmail = "rahaul@gmail.com"
accountPassword="123456"
accountCity="jaypur" // this not way not initialize
let accountState;

console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity ,accountState]) 
/*
prefer not use var 
bacause of issue in block scope and functional 
*/


