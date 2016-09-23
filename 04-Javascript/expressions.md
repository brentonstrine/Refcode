# Javascript Expressions
An expression is something that Javascript reads and does something with. Expressions end in a `;`.

When Javascript encounters this expression, it creates a variable `x` and populates it with the number `5`.
``` javascript
var x = 5;
```

There are actually two expressions in this example. The value of this is actually an expression. Javascript will evaluate the expression `2 + 2` and return the result `4`, which it will then store into the variable `four`.
``` javascript
var four = 2 + 2;
```

In the example above, this is what's technically happening behind the scenes.
``` javascript
var four; // create variable four
2 + 2; // evaluate 2 + 2 (which results in 4)
four = 4; // assign the result of the expression to the variable four
```


