const leapYears = function(year) {
    // set variables to store the modula of year
    let leapYear1 = year % 4 == 0
    let leapYear2 = year % 400 == 0;
    let notLeapYear = year % 100 == 0;

    //add conditions that returns true or false for each
    //variable
    if (leapYear2){
        return true;
    }
    else if (leapYear1 && !(notLeapYear)){
        return true;
    }
    else {
        return false;
    }

    }
// Do not edit below this line
module.exports = leapYears;
