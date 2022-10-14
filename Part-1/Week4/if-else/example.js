var guess = 4;
var sentence = "";

if(guess==3 || guess == 5) {
    sentence = "You are close";
}else if(guess == 4) {
    sentence = "You guessed correctly";
} else {
    sentence = "You guessed wrong"
};

console.log(sentence);

console.log("---");

var guess = 6;
var sentence = "";

if(guess == 6) {
    sentence = "You guessed right.";
}else {
    sentence = "You guessed wrong.";
}

console.log(sentence);