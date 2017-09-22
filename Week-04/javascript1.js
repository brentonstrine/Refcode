// GUESSING GAME:

// There are some variables with values
var ten = 10;
var pickle = 3;

// Q: What is the value of the variable `pickle`?
// A: 3

var twiceTen = ten + ten;
// Q: What is the value of `twiceTen`?
// A: 20

var twiceTwo = pickle + pickle;
// Q: What is the value of `twicePickle`?
// A: twicePickle is not define

var fiveTimesTen = ten * 5;
// Q: What is the value of `fiveTimesTen`?
// A: 50

var big = 100;
var small = 2;

var divide = big / small;

// Q: What is the value of `divide`?
// A: 50


// EXERCISES:

// Some vars
var big = 100;
var small = 2;

// In the area below, write a variable named `sum` that adds the big number to the small number
// You will see the word `undefined`, which you need to replace with the correct expression.

var sum = big + small;

// Top 5 Tallest Buildings and how many floors they have

var burjKhalifa = 163;
var shanghaiTower = 128;
var abrajAlBait = 120;
var pingAn = 115;
var lotte = 123;

// Create a variable that calculates the total number of floors of each building.
// The total is calculated by adding all five values together
var totalFloors = burjKhalifa + shanghaiTower + abrajAlBait + pingAn + lotte;

// Create a variable that calculates the average number of floors.
// The average is calculated by dividing the total by the number of items (in our case, five)
var average = (burjKhalifa + shanghaiTower + abrajAlBait + pingAn + lotte) / 5;

// Objects
var brenton = {
    height: "five foot eleven",
    eyeColor: "brown",
    hairColor: "brown",
};

// Q: How would you programmatically retreive the value of `brenton`'s `height`?
// A: brenton.height

// Q: How would you get the value of the property `eyeColor` in the object `brenton`?
// A: brenton.eyeColor


var america = {
    georgia: {
        atlanta: {
            population: 472522,
        },
        clarkston: {
            population: 7554,
        },
        alpharetta: {
            population: 57551,
            }
        },
    },
};

// Q: How would you get the value of Clarkston's population?
// A: america.georgia.clarkston.population 
