var erasers;
var cables;
var pens;
var suppliesAverage;

erasers = 2;
cables = 4;
pens = 8;
suppliesAverage = (erasers + cables + pens)/3;

console.log(suppliesAverage);

var sentence = `The average number of supplies I have is: ${suppliesAverage}.`;

console.log(sentence);

console.log(sentence.replace(/supplies/i, "materials"));