const removeFromArray = function(arr, ...values) {

    return arr.filter((value) => {
        return !values.includes(value);
    });
 
};

// Do not edit below this line
module.exports = removeFromArray;
