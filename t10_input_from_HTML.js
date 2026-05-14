/* Paste your code from task 7 here*/
//Variables
var userName = nameField
var age = 15;
var newAge = age + 10;
var pocketMoney = 200;
var year = "2026"
var money = 200;

/************************** 
Main Code
***************************/
console.log("Running Task 10")
console.log("Hi " + userName)
console.log("As of " + year + " you are " + age + " years old")
console.log("You have $" + money + " dollars")
console.log("In 10 years you will be " + newAge + " years old")
money = money + 100;
console.log("You have $" + money + " dollars")
money = money/2;
console.log("You spend half your money now you have $" + money)
money = money + 3;
console.log("Then you get $3, now you have $ " + money)


/*****************************
 Functions
******************************/
function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    userName = NAME_FIELD.value;
    OUTPUT.innerHTML = "<p>Your name is "+userName+"</p>";
}