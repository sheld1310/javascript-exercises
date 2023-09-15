const leapYears = function(year) {

    let leapYear1 = year % 4 == 0
    let leapYear2 = year % 400 == 0;
    let notLeapYear = year % 100 == 0;
    if (leapYear2){
        return true;
    }
    else if (notLeapYear){
        return false;
    }
    else if (leapYear1){
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
