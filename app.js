// var fullName = document.querySelector("#fullName")
// var rollNumber = document.querySelector("#rollNumber");
// var sub1 = document.querySelector("#sub1");
// var sub2 = document.querySelector("#sub2");
// var sub3 = document.querySelector("#sub3");
// var resul = document.querySelector("#result");

// function resultGenerator() {
//     var totaMarks = 400;
//     var obtainedMarks = +sub1.value + +sub2.value + +sub3.value;
//     var percentage = obtainedMarks / totaMarks * 100;
//     console.log(percentage);
    
//     var finalmessage = fullName.value + " with roll number  (" + rollNumber.value + ") has obtained" + obtainedMarks + " marks out of " + totaMarks + "and percentage is " + percentage + "%";
//     resul.innerHTML = finalmessage;
// }



let fruits = [
    "apple", "mango ", "banana", "melon"
]
// fruits.push("pineapple")
fruits.unshift("khan")
// fruits.shift("")
// fruits.pop()
// fruits.splice(2, 1 , "updated");
fruits[0, 2] = "updated";
console.log(fruits);
