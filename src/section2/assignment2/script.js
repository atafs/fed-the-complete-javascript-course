///////////////////////////////////////
// CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age

5. Finally, create a function called printFullAge which receives the array of years as an argument, executes the steps 2., 3. and 4. and returns an array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/


function printFullAge(years) {
    var ages = [];
    var fullAges = [];

    //Ages Array based on years of birth
    for (var i = 0; i < years.length; i++) {
        ages[i] = 2017 - years[i];
    }

    //Full Ages based on the ages array and a condition to check if they have more than 18 years old
    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
            fullAges.push(true);
        } else {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
            fullAges.push(false);
        }
    }

    //Array of boolean values
    return fullAges;
}

//Variables
var years = [1979, 1976, 1939, 1977, 2016];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);

//Prints
console.log('\nArrays with years of birth and boolean if person is full aged:');
console.log(years);
console.log(full_1);
