// 1

let myYear = 2003;
let currentYear = 2025;

let myAge = currentYear - myYear;

console.log(myAge);


// 


// 2

let userAge = Number(prompt("Enter your Age"));
let userMovieType = prompt("Enter movie type (Regular or 3D)");
let timeOfDay = prompt("Enter time of day(matinee or evening)");
let discount = prompt("Do you have a discount? please leave empty if not");

let ticketPrice = 0;

if (userAge < 10) {
  ticketPrice += 5;
  if (userMovieType === "3D") {
    ticketPrice += 5;
  }
  if (timeOfDay === "evening") {
    ticketPrice += 5;
  }
} else if (userAge < 65) {
  ticketPrice += 15;
  if (userMovieType === "3D") {
    ticketPrice += 5;
  }
  if (timeOfDay === "evening") {
    ticketPrice += 5;
  }
} else if (userAge >= 65) {
  ticketPrice += 10;
  if (userMovieType === "3D") {
    ticketPrice += 5;
  }
  if (timeOfDay === "evening") {
    ticketPrice += 5;
  }
} else {
  console.log("You have made a mistake in spelling");
}

if (discount) {
  ticketPrice = ticketPrice - ticketPrice * 0.25;
}

console.log(`ბილეთის ფასი თქვენთვის არის: ${ticketPrice} ლარი`);


// 


// 3


let question = "";
let answer = "";

let initialAnswer = prompt(
  "Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math"
);

if (initialAnswer === "strings") {
  let question = "რა არის რა არის typeof(5)?";
  let answer = prompt(question);
  if (answer.toLowerCase() === "number") {
    console.log("სწორი პასუხია");
  } else {
    console.log("სამწუხაროდ ვერ გამოიცანით");
  }
} else if (initialAnswer === "variable") {
  let question = "შეიძლება თუ არა let-ის რედეკლალირება";
  let answer = prompt(question);
  if (answer.toLowerCase() === "yes") {
    console.log("სწორი პასუხია");
  } else {
    console.log("სამწუხაროდ ვერ გამოიცანით");
  }
} else if (initialAnswer === "math") {
  let question = "რას აბრუნებს console.log(Math.floor(2.1))";
  let answer = prompt(question);
  if (answer.toLowerCase() === "ori") {
    console.log("სწორი პასუხია");
  } else {
    console.log("სამწუხაროდ ვერ გამოიცანით");
  }
}

// 
