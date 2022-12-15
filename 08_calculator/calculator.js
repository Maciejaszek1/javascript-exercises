const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	
  let sum = 0;
  nums.forEach(num => {
    sum += num;
  });
  return sum;
};

const multiply = function(nums) {
	
  let output = 1;
  nums.forEach(num => {
    output *= num;
  });
  return output;
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(num) {

  let output = 1;

  if(num > 0){
    for(;num > 0; num--){
      output *= num;
    }
  }
  else return 1;

  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
