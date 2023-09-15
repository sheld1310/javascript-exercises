const sumAll = function(num1, num2) {

    if (num1 < 0 || typeof num1 !== 'number'|| num2 < 0 || typeof num2 !== 'number'){
        return 'ERROR';
    }

    let totalSum = 0;
    let temp = num1;
    num1 = Math.min(temp, num2);
    num2 = Math.max(temp, num2);
    
    if (num1 < num2){
        for (let i = num1; i <= num2; i++){
            totalSum += i;
        }
    }
        else{
        for (let i = num2; i <= num1; i++){
            totalSum += i;
        }
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;

