"use strict";
/*Q9: Write a simple JavaScript program that checks if a person is eligible for a CNIC (show a message with the
    person's name).*/
Object.defineProperty(exports, "__esModule", { value: true });
//This function checks if a person is eligible for a CNIC or not:
function checkEligibleForCNIC(name, age) {
    if (age >= 18) {
        return `Congrats! ${name} you are now eligible for CNIC`;
    }
    else {
        return `Sorry! ${name} You are not eligible for CNIC yet`;
    }
}
;
const nameAndAge = checkEligibleForCNIC("Adele", 18);
console.log(nameAndAge);
