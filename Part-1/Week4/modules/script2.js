import { Name, Age } from './script1.js';

var firstName = Name("Mariessa");
var age = Age(24);

var sentence = firstName + " " + age;

console.log(sentence);
document.getElementById("new").innerHTML = sentence;