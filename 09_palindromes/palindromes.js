const palindromes = function (string) {
    
    let string2 = string.split(" ").join("").split("!").join("").split(",").join("").split(".").join("").toUpperCase();

    let half = Math.floor(string2.length/2);
    let arr = string2.split(string2[half]);
    arr[1] = arr[1].split("").reverse().join("");

    return arr[0] == arr[1];
};

// Do not edit below this line
module.exports = palindromes;
