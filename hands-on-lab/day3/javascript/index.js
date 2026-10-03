let variable = "Peter Karanja";
const variable_2 = "Peter Karanja";

// data types
// string - "Peter Karanja"
// number - 123
// boolean - true
// array - [1, 2, 3]
// object - { name: "Peter Karanja" }
// null - null
// undefined - undefined

// operators
// arithmetic operators + - * / %(modulo)
// comparison operators == != > < >= <=
// logical operators && || !
// assignment operators = += -= *= /= %=
// ternary operators ? :
// type operators typeof instance of

let bank_balance = 2000;
const fuliza_limit = 200;

// const can_fuliza = (amount) => {
//   if (amount > fuliza_limit && amount > bank_balance) {
//     return "I am sorry, you can not fuliza";
//   } else if (amount <= fuliza_limit || amount == bank_balance) {
//     return "You can fuliza";
//   } else {
//     return "You can fuliza";
//   }
// };

for (i = 1; i <= 90; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is Even`);
  } else {
    console.log(`${i} is Odd`);
  }
}

let run = true;
while (run) {
  for (i = 1; i <= 10000; i++) {
    if (i == 90) {
      console.log(i);
      run = false;
    }
  }
}

let j = 10;
while (j <= 100) {
  console.log(j);
  j++;
}

let num = 1;

switch (num) {
  case (num = 1):
    console.log("One");
    break;
  case (num = 2):
    console.log("Two");
    break;
  case (num = 3):
    console.log("Three");
    break;
  case (num = 4):
    console.log("Four");
    break;
  case (num = 5):
    console.log("Five");
    break;
  case (num = 6):
    console.log("Six");
    break;
  case (num = 7):
    console.log("Seven");
    break;
  case (num = 8):
    console.log("Eight");
    break;
  case (num = 9):
    console.log("Nine");
    break;
  case (num = 10):
    console.log("Ten");
    break;
  default:
    console.log("Number is not between 1 and 10");
}
// run; check i is equal to 100 or less than 100 false
// increament i
// repeat until i is 100 or greater 100