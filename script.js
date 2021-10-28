console.log('hello world')

var myNumb = prompt('choose a number between 1 and 100');

if(myNumb < 75 && myNumb > 25){
    console.log('your number is in between 25 and 75');
}
else if(myNumb > 75){
    console.log('your number is over 75');
}
else if(myNumb < 25){
    console.log('your number is under 25');
}
console.log(myNumb);


if(20 < 10){
    console.log('20 is less than 10')
}
else{
    console.log('20 is not less that ten')
}