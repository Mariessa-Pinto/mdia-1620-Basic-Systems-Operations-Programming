var dimension = box(3, 2, 3);
var calculated = 0;

/**
 * @desc The calculation of the dimension of the box
 * @param {*} width the width of the box
 * @param {*} height the height of the box
 * @param {*} depth the depth of the box
 * @returns the calculated dimension of the box and whether the box is too small, medium or large
 */

function box(width, height, depth){
    calculated = (width * height * depth);
    if(calculated > 70){
        return "The box is large. It is " + calculated + " centimetres cubed.";
    }else if(calculated > 30){
        return "The box is medium. It is " + calculated + " centimetres cubed.";
    }else{
        return "The box is too small.";
    }
}

console.log(dimension); //The box is too small.


console.log("---");


var fruits = [];
fruits[0] = "apple";
fruits[3] = "pear";
fruits[5] = "grape";

console.log(fruits);
//[ 'apple', <2 empty items>, 'pear', <1 empty item>, 'grape' ]

fruits[4] = "orange";

console.log(fruits);
//[ 'apple', <2 empty items>, 'pear', 'orange', 'grape' ]