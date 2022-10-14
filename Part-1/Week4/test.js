//backticks ``
var dogType = "German Shepard";
var sentence = `I have a ${dogType} at home.`;

console.log(sentence);

console.log("---");

//function - option one
var number = multiplication(4,3);
function multiplication(numOne, numTwo) {
    return numOne * numTwo;
};
console.log(number);

console.log("---");

//function- proper naming
var area = shape(4,6);
/**
 * @desc to calculate the width by the height to give the area
 * @param {*} width the width of the shape
 * @param {*} height the height of the shape
 * @returns the area of the shape
 */
function shape(width, height){
    return width * height;
};
console.log(area);

console.log("---");

var proceed = true;
var i = 0;

function increment() {
    i++;
}

while(proceed) {
    increment()
    if(i == 3) {
        break;
    } else {
        //
    }
};

console.log(i);