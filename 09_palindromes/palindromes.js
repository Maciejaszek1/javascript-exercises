const palindromes = function (string) {
    let half = Math.floor(string.length/2);

    let arr = string.split(string[half]);
    arr[1] = arr[1].split("").reverse().join("");

    return arr[0] == arr[1];
};

// Do not edit below this line
module.exports = palindromes;
