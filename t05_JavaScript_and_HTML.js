/* Paste your code from task 3, Maths here *//****************************
Variables task 1
****************************/

//Variables
var userName = "Max"
var age = 15;
var newAge = age + 10;
var pocketMoney = 200;
var year = "2026"
var money = 200;

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML += "<h2>Added by JavaScript</h2>";
OUTPUT.innerHTML += "<p>Hello " + userName + "</p>";
OUTPUT.innerHTML += "<p> As of " + year + " you are " + age + " years old" + "</p";
OUTPUT.innerHTML += "<p> You have $" + pocketMoney + " dollars 🤑" + "</p>";
OUTPUT.innerHTML += "<p> In 10 years you will be " + newAge + " years old" + "</p";
pocketMoney = pocketMoney + 100;
OUTPUT.innerHTML += "<p> You have $" + pocketMoney + " dollars "+ "</p>";
pocketMoney = pocketMoney/2;
OUTPUT.innerHTML += "<p> You spend half your money now you have $" + pocketMoney + "</p>";
pocketMoney = pocketMoney + 3;
OUTPUT.innerHTML += "<p> Then you get $3, now you have $ " + pocketMoney + "</p>";

/************************** 
Main Code
***************************/
console.log("Hi " + userName)
console.log("As of " + year + " you are " + age + " years old")
console.log("You have $" + money + " dollars")
console.log("In 10 years you will be " + newAge + " years old")
pocketMoney = pocketMoney + 100;
console.log("You have $" + pocketMoney + " dollars")
pocketMoney = pocketMoney/2;
console.log("You spend half your money now you have $" + pocketMoney)
pocketMoney = pocketMoney + 3;
console.log("Then you get $3, now you have $ " + pocketMoney)



/*****************************
 Functions
******************************/

