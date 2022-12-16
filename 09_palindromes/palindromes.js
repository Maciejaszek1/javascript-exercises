const palindromes = function (string) {
    

    /*Removes punctuation and spaces*/
    string = string.split(" ").join("").split("!").join("").split(",").join("").split(".").join("").toUpperCase();

    /*Splits string in half and put both halves into an array*/
    let half = Math.floor(string.length/2);
    let arr = string.split(string[half]);

    /*Reverses the 2nd half and compares it to the 1st*/
    if (arr.length > 2) {
        arr[2] = arr[2].split("").reverse().join("")
        return arr[0] == arr[2];
    }
    else { 
        arr[1] = arr[1].split("").reverse().join("");
        return arr[0] == arr[1];
    }
};

// Do not edit below this line
module.exports = palindromes;
