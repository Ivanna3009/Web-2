//Task1
let str = 'This is your dictionary, so we would love to hear your thoughts';
let arr = str.split(' ');
console.log('Task1-->',arr,'###');
//task2
function task2(string) {
  if (string.length < 2) return string;
  var permutations = [];
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    // літери не повторюються
    if (string.indexOf(char) != i)
      continue;
    var remainingString = string.slice(0, i) + string.slice(i + 1, string.length);
    for (var subPermutation of task2(remainingString))
      permutations.push(char + subPermutation)
  }
  return permutations;
}
var myString = 'abc';
console.log ('Task2-->',task2(myString),'###');*/
//task3
var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
}
console.log('Task3-->',factorial(10),'###');
//task4
/**var mas= [11, 3, 4, 11, 11, 3, 4, 5, 11, 11];
var result = {};
for (var i = 0; i < mas.length; ++i)
{
    var a = mas[i];
    if (result[a] != undefined)
        ++result[a];
    else
        result[a] = 1;
}
for (var key in result){

    console.log('число ' + key + ' == ' + result[key] + ' повторень ');

}
//task5
function calendar(a,b){
    if (a==1||a==3||a==5||a==7||a==8||a==10||a==12)console.log('31');
    else if(a==2){
        if(b%4)console.log('28');
        else console.log('29');
    }
    else console.log('30');
}
console.log('Task5-->');
calendar(9,2021);
console.log('###');
//task6
var mas=[69, 56, 8, 9, 100, 3, 2, 7];
for(var i=0, tmp;i<mas.length-1;i++){
for(var j=0;j<mas.length-1;j++){
	if(mas[j]>mas[j+1]){
		tmp=mas[j];
		mas[j]=mas[j+1];
		mas[j+1]=tmp;
	}
}
}
console.log('Task6-->', mas, '###');
