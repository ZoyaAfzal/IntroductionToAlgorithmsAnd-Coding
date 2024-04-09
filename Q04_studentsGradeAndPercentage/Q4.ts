//Question4: Create a program to check a student's grade and percentage.

function studentsGradeAndPercentage(marks: number[]) : {grade: string, percentage: number} {
    const totalMarks = marks.reduce((acc, curr) => acc + curr, 0);
    const percentage = (totalMarks / (marks.length * 100)) * 100;
    let grade: string;

    if(percentage >= 90){
        grade = "A1";
    } else if (percentage < 90 && percentage >= 80){
        grade = "A+";
    } else if (percentage < 80 && percentage >= 70){
        grade  = "A";
    } else if (percentage < 70 && percentage >= 60){
        grade = "B";
    } else if (percentage < 60 && percentage >= 50){
        grade = "C";
    } else if (percentage < 50 && percentage >= 40){
        grade = "D";
    } else {
        grade = "F";
    }
    return {grade, percentage};
    
};
//Student scored given marks in all subjects:
const studentMarks: number[] = [90, 79, 70, 65, 50, 85];
const {grade, percentage} = studentsGradeAndPercentage(studentMarks);
console.log(`The student scored ${percentage.toFixed(2)}% and got a grade ${grade}`);
/*Here, first we need to find total marks by the given numbers of all subjects,then we need to find
percentage based on total marks and then finally we will find the grade based on percentage.*/
