/**
 * @desc function to multiply the values in the array by 3
 * @param {*} values the values in the array
 * @returns the values in the array multiplied by 3
 */
function array(values){
    
    var newArray = [];
    for(var i = 0; i < values.length; i++){
        newArray.push(values[i] * 3);   
    }
    return newArray;
};

module.exports = array;