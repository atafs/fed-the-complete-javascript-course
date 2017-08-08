/////////////////////////////////////
// Lecture: Hoisting

/*
// functions
calculateAge(1979);
function calculateAge(year) {
    console.log(2017 - year);
}

//retirement(1979);
var retirement = function(year) {
    console.log(65 - (2017 - year));
}
retirement(1979);


// variables
console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/



/////////////////////////////////////
// Lecture: Scoping

/*
// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/
/*
// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}
*/

/////////////////////////////////////
// Lecture: The this keyword


//console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2017 - year);
    console.log(this);
}

var americo = {
    name: 'Americo',
    yearOfBirth: 1979,
    calculateAge: function() {
        console.log(this);
        console.log(2017 - this.yearOfBirth);

        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

americo.calculateAge();

var ana = {
    name: 'Ana',
    yearOfBirth: 1976
};


ana.calculateAge = americo.calculateAge;
ana.calculateAge();
