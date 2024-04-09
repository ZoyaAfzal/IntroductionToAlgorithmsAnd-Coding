//Question1: Write a program that checks whether the given number is positive or negative.

//This function checks whether the number is positive or negative:
function checkNumber(number:number): string {
if(number > 0){
    return "Given Number is Positive";
}else if(number < 0){
    return "Given Number is Negative";
}else {
    return "Given Number is Zero";
}

}

console.log(checkNumber(6));
console.log(checkNumber(-10));
console.log(checkNumber(0));
//By using this function we can easily find whether the number is positive, negative or equal to zero.