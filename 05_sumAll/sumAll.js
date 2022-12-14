const sumAll = function(num1, num2) {

    if (typeof num1 != "number" || 
        typeof num2 != "number" || 
        num1<0 || num2<0)
        
        return "ERROR";
    
    else {

        let sum = 0;
    
        if(num1 > num2){
            let tempNum = num1;
            num1 = num2;
            num2 = tempNum;
        }

        for(;num1 <= num2; num1++){
            sum += num1;
        }

        return sum
    }
};

// Do not edit below this line
module.exports = sumAll;
