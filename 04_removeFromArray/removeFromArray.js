const removeFromArray = function(arr, number) {

    function fCheck(element){
        return element != number;
    }

    return  arr.filter(fCheck);
};

// Do not edit below this line
module.exports = removeFromArray;
