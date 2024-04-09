/*Question5: Write a program that greets a user based on the time of day. Display "Good Morning", "Good Afternoon"
or "Good Evening" based on the time of day when you run the code.*/

//It will check the current hours based on the time of a day:
const currentTime = new Date();
if(currentTime.getHours() > 5 && currentTime.getHours() < 12){
    console.log("Good Morning");
} else if (currentTime.getHours()  > 12 && currentTime.getHours() < 17){
    console.log("Good Afternoon");
} else if (currentTime.getHours() > 17 && currentTime.getHours() < 21){
    console.log("Good Evening");
} else {
    console.log("Good Night");
}
//This simply helps us greet user approximately based on the time of a day.