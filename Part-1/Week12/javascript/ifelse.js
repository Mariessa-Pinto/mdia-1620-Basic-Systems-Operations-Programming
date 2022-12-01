/**
 * @desc function to find out whether a number is odd or even
 * @param {*} num the number
 * @returns whether the number is odd or even
 */
function ifelse(num){
    if(num % 2 == 0){
        return "Is an event number."
    }else{
        return "Not a even number."
    }
};

module.exports = ifelse;