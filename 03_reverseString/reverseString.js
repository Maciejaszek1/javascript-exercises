const reverseString = function(string) {

    let chopped = string.split("");
    let length = chopped.length - 1;
    let reversed;

    for (let i = 0 ; length >= 0; length--){
        reversed += chopped[length];
    }

    if (string == "") return "";

    else return reversed.slice(9);
};

// Do not edit below this line
module.exports = reverseString;
