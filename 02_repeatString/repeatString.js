const repeatString = function(string, num) {

    let output = "";

    if (num < 0) output = "ERROR";
    else 
        for(let x = 0; x<num; x++){

            output += string;
        }

    return output;
};

// Do not edit below this line
module.exports = repeatString;
