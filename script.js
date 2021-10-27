console.log('hello world')

var myNumb = prompt('choose a number between 1 and 100');

if(myNumb < 75 && myNumb > 25){
    console.log('your number is in between 25 and 75');
}
else if(myNumb > 75){
    console.log('your number is under 75');
}
else if(myNumb < 25){
    console.log('your number is over 25');
}
console.log(myNumb);