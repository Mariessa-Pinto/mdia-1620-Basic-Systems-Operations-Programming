var day = "sunny";
day = "rainy";
day = "snowy";

console.log(day);
var sentence = `The day today is ${day}.`;

console.log(sentence);

// i is used for upper case case
// g is used for only lower case
// can be used together for all cases

console.log(sentence.replace(/snowy/i, "windy"));