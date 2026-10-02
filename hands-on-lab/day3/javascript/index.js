let variable = "Joe Doe"
const variable_2 = "Joe Doe"

// data types
// string - "Joe Doe"
// number - 42
// boolean - true or false
// null - null
// undefined - undefined
// object - { name: "Joe Doe", age: 30 }
// array - [1, 2, 3, 4, 5]

// operators
// arithmetic operators - +, -, *, /, %
// assignment operators - =, +=, -=, *=, /=, %=
// comparison operators - ==, ===, !=, !==, >, <, >=, <=
// logical operators - &&, ||, !
// ternary operator - condition ? expressionIfTrue : expressionIfFalse
// typeof operator - returns the data type of a variable
// logical operators - &&, ||, !

let bank_balance = 1000;
const fuliza_limit = 500;


const can_fuliza = (amount) => {
    if (amount > fuliza_limit) {
        return "I am sorry, you cannot fuliza more than "
    } else if (amount <= fuliza_limit || amount == bank_balance) {
        return "You can fuliza "
    } else {
        return "You can fuliza "
    }
}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

console.log(`Hello Joe, ${can_fuliza(600)}`)