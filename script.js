function sayHello(name , age) {
    console.log("Hello, " + name + "! My name is " + name + " and I am " + age + " years old.");
}

sayHello("erick", 21);
sayHello("Bob", 30);
sayHello("Charlie", 35);
sayHello("David", 40);

//prints the sum
function addNumbers(num1, num2) {
    console.log(num1 + num2);
}

//returns the sum
function addNumbers(num1, num2) {
    return num1 + num2;
}
let result1 = addNumbers(5, 10); //15
console.log(result1);

//function and conditional
function checkAge(age) {
    if (age >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are a minor.");
    }
}

    checkAge(20); // You are an adult.
    checkAge(15); // You are a minor.

    //function with loop
    function countToFive() {
        for (let i = 1; i <= 5; i++) {
            console.log(i);
        }
    }
    
 countToFive();//prints 1,2,3,4,5 

 //SECTION 2
 //javascript & html

//get element by id
let title =document.getElementById("page-title");
 console.log(title); //wb & ai

//change text value of the element with id "page-title"
 title.textContent = "Welcome to Wb & ai";

 //button onclick
 function showWelcomeMessage() {
    alert("Welcome to Web Development & AI!");
    title.textContent = "showing the alert";
 }
 function showRegistrationMessage() {
    let name = document.getElementById("name").value;
    let message =document.getElementById("message");

    if(name==="") {
        message.textContent = "Please enter your name.";
    } else {
        console.log("Welcome, " + name + "! you have successfully registered for the course.");
    }
 }

 function showCheckEmail() {
    let email = document.getElementById("email").value;
    if(email === "") {
        console.log("Please enter your email address.");
    }else{
        console.log("Email entered: " + email);
    }
}
    
    
