//Question3: Write a program to determine the greater of two numbers:
//This function determines the greater of two numbers:
function checkGreaterNumber(number1, number2) {
    if (number1 > number2) {
        return `${number1} is greater than ${number2}`;
    }
    else if (number1 < number2) {
        return `${number2} is greater than ${number1}`;
    }
    else {
        return "Both Numbers are Equal...";
    }
}
;
//Calling the function
console.log(checkGreaterNumber(25, 15));
console.log(checkGreaterNumber(12, 24));
console.log(checkGreaterNumber(10, 10));
export {};
/*Here,by using this function we will find the greater of two numbers and this function will also tell
if the numbers are equal*/ 
