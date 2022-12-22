const fibonacci = function(fNum) {

    let num1 = 0;
    let num2 = 1;
    let num3 = 1;
    

    if (fNum < 1) return "OOPS";
    else
    for (let i = 2; i<fNum ; i++){
        
        num1 = num2;
        num2 = num3;
        num3 = num1 + num2;

    }

    return num3;
};

// Do not edit below this line
module.exports = fibonacci;
