# Storing Information in Javascript
## Simplification
This is a simplification. That's ok, you don't need to know all the details with 100% accuracy right now. For now, you just need to learn how to think about Javascript.

### Variables
Just like algebra, Javascript has variables. They are defined using the `var` keyword, the name of the variable, the assignment operator and the value.

``` javascript
var x = 5;
```

We only need the `var` keyword the first time we define a variable. After that first time, we can use it or modify it as much as we want.

To change a variable, we can just **assign** a new value to it with the **assignment operator** (which is a single equals character).

``` javascript
var superX = 5;
superX = 5;
```

To use a variable, we insert its name. Wherever we put the variable name, Javascript will read it as if we put it's value instead.

``` javascript
var favoriteNumber = 5;
var twiceMyFavoriteNumber = favoriteNumber + favoriteNumber;
```

### Types of Values
Variables always have a name and a value. There are different types of values, the most important types are numbers, strings, objects, and variables.

#### Numbers
Numbers are indicated with a span of numeric characters and nothing else, not even punctuation:

``` javascript
var number = 5;
var number = 59928374982374;
```

#### Strings
Text, or in programming speak, a set of characters **strung** together in a particular order, a.k.a., a **string** is indicated with quotes. It can contain letters, numbers, and other weird characters. Some characters can break strings and need special care (e.g. a quote mark).

``` javascript
var emptyString = "";
var myString = "hello";
var myLongString = "Hey, this is an entire sentence, what do you think about that?";
var myEmojiString = "You can think of strings as text 📝";
var myEscapedString = "I said to myself, \"what happens when I want to use quotes?\" but then I learned about escape characters.";
```

#### Objects
An object is just a list of variables. Each item in the object must have a name and a value, and each item is separated by a comma. The syntax for the variables inside objects is not the same as regular variables though. An object is indicated with curly braces.

``` javascript
var emptyObject = {};
var simpleObject = {
    firstItem: "first item is a string",
    secondItem: 23964,
    thirdItem: "third item is another string"
}
```

#### Variables as Values
A variable can also have another variable as its value. In the example below, both variables end up having the same value.

``` javascript
var variableOne = "First the worst!";
var variableTwo = variableOne;
```

When doing this, the variable itself isn't stored as the value though. Instead, the value is set to the *value* of the variable. In the example above, `variableTwo` does not technically hold the variable `variableOne`, but instead holds the string `"First the worst!"`.

This is important to know because variables can change. 

``` javascript
var variableOne = "First the worst!";
var variableTwo = variableOne;
variableOne = "Actually, I'm Zero the Hero!";
```

In the case above, `variableTwo` has not been updated to the new string that `variableOne` holds. 

``` javascript
var variableOne = "First the worst!";
var variableTwo = variableOne;
variableOne = "Actually, I'm Zero the Hero!";
variableOne = variableTwo;

```

In this example, `variableOne` has changed three times--in the end it has taken on it's original string value from `variableTwo`.

#### Objects as values
The values of the items in objects can be any data type, including objects.
``` javascript

var mediumObject = {
    firstItem: "first item is a string",
    secondItem: 23964,
    thirdItem: {},
    fourthItem: {
      fourPointOne: "I'm inside the fourth item",
      fourPointTwo: "I'm also inside the fourth item"
    }
}

var complexObject = {
    sarah : {
        name : "Sarah",
        domainomain : "sarahdontcare-a.com",
        lesson1 : "complete",
        lesson2 : "complete",
        lesson3 : "started",
    },
    bob : {
        name : "Bob",
        domainomain : "bob-is-your-uncle.com",
        lesson1 : "complete",
        lesson2 : "started",
    },
    jane : {
        name : "Jane",
        domainomain : "janeismyname.net",
        lesson1 : "complete",
        lesson2 : "complete",
    },
    jack : {
        name : "Jack",
        domainomain : "giantpumpkinsale.com",
        lesson1 : "complete",
        lesson3 : "started",
    },
};
```


