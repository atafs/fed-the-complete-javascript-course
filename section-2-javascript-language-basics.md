## Section 2
JavaScript:
- lightweight: language does not use much memory of the computer
- cross-platform: can be used in multiple systems
- object-oriented: language based on objects  

##
**InlineScript vs SeparateFile** to write js code:
- use the script tag in the html file
```javascript
<script></script>
```

- call an external js file with the src attribute
```javascript
<script src="script.js"></script>
```

##
**Variables and DataTypes**
- variable: is a container that stores values to use it multiple times in our code
```javascript
var name = 'Americo, Guida and Hugo Tomas';
```

##
**Camel case**:
- js uses this standard
```javascript
var nameOfOurFamily = 'Americo, Guida and Hugo Tomas';
```

##
**Data Types**
- **Primitive data types**: they are not objects
- **Number, String, Boolean, Undefined and Null**
- Numbers: are always floating point
- Undefined: variable with bo value yet
- **Dynamic Type**: means you do not need to define the variable type
```javascript
var name = 'string';
var number = 123;
var boolean = true;
```

##
**Type Coercion**
- means that when the **operands** of an operator are **different types**, one of them will be **converted to an "equivalent" value** of the other operand's type
- Concatenation in js: plus sign (+)
- **Automatic conversion** to a string (there is a string + number + boolean)
- Get them all into the same data type
```javascript
// String
var string = 'string' + 12 + true;
// Number
var numbers = 12 + 12 + 12;
```

##
**Multiple variable declaration**
- More than one in the same line
```javascript
var name, number, isNumber;
```

##
**Variable mutation**
- **Change the value** of a variable
- **var**: is only to declare the variable for the first time
```javascript
var name = 'Hello';
name = 'Hello again!!';
```

##
**Input data from the Console**
- **prompt**: is a function the shows a popup in the web browser to input data
- The input is **stored** in the variable
```javascript
var lastName = prompt('What is your last name?');
```

##
**Operators**
- Basic: \+, \-, \/, \*, \%
- **Operator precedence**: multiplication cames first from \+ or \-
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
- The higher the precedence value, the higher their priority

```javascript
var now = 2017;
var birthday = now - 37;
```

##
**IF Else Statements**
- Allows us to make decisions in our code
- It is a **control structure**
```javascript
var name = 'Guida';
var age = '27';
var isInLondon = 'yes';
if (isInLondon === 'yes') {
  console.log(name + ' is in London Already!!');
} else {
  console.log(name + ' is coming soon to London');
}
```

##
**Ternary Condition**
- Simpler sintaxe for if else statements
```javascript
var question = isInLondon === 'yes' ? console.log(name + ' is in London Already!!') : console.log(name + ' is coming soon to London');
```

##
**Comparison operator**
- **==**: double equal does type coercion (automatically convert numbers to strings for example)
- **===**: it is checking for type and value (without type coercion)
- Standard is the triple equal (safer)
```javascript
var isTrue = (23 == '23'); //true: string(number) == string
isTrue = (23 === '23'); //false: number === string
isTrue = (23 === 23); //true: number === number
```

##
**Boolean logic**
- Truth tables for the operatiors
- **and**: true when all are true (&&)
- **or**: true when one is true (||)
- **not**: reverts the logic (!)
```javascript
var age = 16;
var compare1 = age >= 20; //false
var compare2 = age < 30; //true
var compare3 = !(age < 30); //false

var operatorAND = compare1 && compare2; //false
var operatorOR =  compare1 || compare2; //true
var operatorNOT = compare3; //false
console.log(operatorAND + ' ' + operatorOR + ' ' + operatorNOT);
```

##
**Switch statement**
- It is more elegant than if else or nested if else
- **Escape symbole for js**: backslash
```javascript
var job = 'nurse';
switch (job) {
  case 'nurse':
  case 'teacher':
    console.log('Guida helps kids');
    break;
  case 'driver':
    console.log('Guida drives a cab in Lisbon');
    break;
  case 'police':
    console.log('Guida fights crime');
    break;
  default:
    console.log('Guida\'s is doing something else');
}
```

##
**Functions**
- Are usefull to **avoid repeating code**
- Seen as a **machine that receives an input** (parameters) **and return an output** (result from the logic applied inside the function)
- **DRY**: Don't Repeat Yourself
- Functions **don't need to return anything** (equivalent to void in java)
- Functions can **call other functions**
```javascript
//Function that returns an age
function calculateAge(yearOfBirth) {
  var age = 2017 - yearOfBirth;
  return age;
}
var americo = calculateAge(1979);
console.log(americo);

//Function that calls another Function that doesn't return any value
function yearsUntilRetirement(name, yearOfBirth) {
  var age = calculateAge(yearOfBirth);
  var retirement = 65 - age;

  if (retirement >= 0) {
    console.log(name + ' retires in ' + retirement + ' years');
  } else {
    console.log(name + ' is already retired');
  }
}
yearsUntilRetirement('guida', 1976);
yearsUntilRetirement('jose', 1939);
```

##
**Functions: Statement vs Expression**
- Statement: **performes an action**, nothing is stored as a result of this function
- Expression: **produces an value** (outcome)
```javascript
//Statement
function statement(state) {
  //do something here
}
if (x === 5) { /*do something*/ }

//Expression
var expression = function(state) {
  //do something here
}
var x = 3;
```

##
**Arrays**
- Allow to **bundle data** into a **single variable**
- Acts **like a collection** of multiple variables
- **Square brackets** is the most common way to create an array
- Arrays are **zero based**
- We can **mix data types** in a single array
- **push**: function or method that **adds an element** to the **end of the array**
- **unshift**: it **adds an element** at the **beginning of yhe array**
- **pop**: it **removes the last element** of the array
- **shift**: it **remove the first element** of the array
- **indexOf**: returns the **position of the element in the array**. -1 is the default value for not existing in the array
```javascript
var names = ['Americo', 'Guida', 'Hugo Tomas'];
console.log(names[2]);
//Change a value on the array or mutate
names[1] = 'Ana';
console.log(names[1]);

var americo = ['Americo', 'Tomas', 1979, 'Front End Developer'];
americo.push('blue');
console.log(americo);

john.push('blue');
americo.unshift('Mr.');
americo.pop();
americo.shift();
console.log(americo);

if (americo.indexOf('teacher') === -1) {
    console.log('Americo is NOT a teacher.');
}
```

##
**Objects and Properties**
- Data structure that uses **key/value pares**
- Can be **accessed by a specific key** (instead of a number like in the arrays)
- **Read a variable** from an object there are two main ways: **dot** or **square bracket notation**
- Dot notation: add the **variable name after the dot** in the object name
- Square bracket notation: add a **string inside a square brackets** (as if accessing an array)
- An object **can be created** with the reserved **keyword new** (another notation)

```javascript
//Create js object
var americo = {
    name: 'Americo',
    lastName: 'Tomas',
    yearOfBirth: 1979,
    job: 'Software Developer',
    isMarried: true
};

//Change or mutate a variable inside the object
americo.lastName = 'Tomas!!';
americo['job'] = 'Front End Developer';

//Another notation to create an oject and add variables to it
var guida = new Object();
guida.name = 'Guida';
guida.lastName: 'Batalha';

```

##
**Objects and Methods**
- Objects can **hold different types** of data (string, boolean, number)
- They can also **have other objects, arrays and/or functions**
- Functions **can also be called methods**
- The reserved keyword **this** is used to **access the object itself** and its properties
-
```javascript
var americo = {
    name: 'Americo',
    yearOfBirth: 1979,
    family: ['Batalha', 'Agrela', 'Guida', 'Tomas'],
    calculateAge: function() {
        this.age = 2017 - this.yearOfBirth;
    }
};

//Access the array in the object on a specific value
var firstFamilyName = americo.family[0];

//Call the function and access the property age in the object
americo.calculateAge();
var americoAge = americo.age;
```

##
**Loops and Iteration**
- It is a **control structure**
- Used for **repetitive tasks**
- Different **types** of loops: **for or while** loop
- Keyword **break**: **ends** the loop cicle
- Keyword **continue**: **jumps** a loop iteration and **continues the loop**

```javascript
var names = ['Americo', 'Tomas', 'Ana', 'Batalha', 'Hugo'];

// for loops from 0 to <array>.length
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// for loops from <array>.length to 0
for (var i = names.length-1; i >= 0; i--) {
    console.log(names[i]);
}

// while loops
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

// break and continue
for (var i = 1; i <= 5; i++) {
    console.log(i);
    if (i === 3) {
        break;
    }
}

for (var i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
```

##
**xxx**
- yyy
```javascript
zzz
```
