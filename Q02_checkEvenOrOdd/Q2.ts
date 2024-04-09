//Question2: Write a program that checks if a number is even or odd.

//This function checks whether the number is even or odd:
function checkEvenOrOdd(number:number): string {
if(number % 2 == 0){
    return "Given Number is Even";
} else {
    return"Given Number is Odd";
}

}
console.log(checkEvenOrOdd(10));
console.log(checkEvenOrOdd(5));
//Here, we checked if the number is even or odd.