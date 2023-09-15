const sumAll = function(num1, num2) {
    totalSum = 0;
    
    if (num1 < num2){
        for (let i = num1; i <= num2; i++){
            totalSum += i;
        }
    }
        else if (num1 > num2){
        for (let i = num2; i <= num1; i++){
            totalSum += i;
        }
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
//npm test sumAll.spec.js
