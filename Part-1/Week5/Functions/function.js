/* 1
 ? Initialize the function on one line. 
 ? The function should be called: shape
 ? This function is initialized to the variables called: area
 ? The first value will be 3
 ? The second value will be 4
 ? 
 ? In the function create default values called width and height
 ? Will return the multiplied value of width times height
 ?
 ? Then console log out the area.
 */
var area = shape(3,4);

/**
 * @desc to calculate the area of a shape
 * @param {*} width the width of the shape
 * @param {*} height the height of the shape
 * @returns the area of the shape
 */

 function shape(width, height){
    return width * height;
 };

 console.log(area);

 /* 2
 ? Initialize the function on one line. 
 ? The function should be called: my electronics
 ? This function is initialized to the variables called: at home electronics
 ? The first value will be a String called Keyboard
 ? The second value will be a Integer with the value of 5
 ? 
 ? In the function create default values called item and quantity
 ? Will return the sentence to say:
 ? I have 5 Kayboards at home.
 ?
 ? Then console log out the variable at home electronics
 */

 var atHomeElectronics = myElectronics("keyboards", 5);
 
 function myElectronics(item, quantity){
    return `I have ${quantity} ${item} at home.`;
 };

 console.log(atHomeElectronics);

