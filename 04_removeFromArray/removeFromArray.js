const removeFromArray = function(arr, ...numbers) {
    
    arr.filter(function(element){
        return element != numbers;
    });
};

// Do not edit below this line
module.exports = removeFromArray;
