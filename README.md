# format-string-builder
Simple JS string builder

## Installation
    npm install format-string-builder

## Initialization
```javascript
var FormatStringBuilder = require("../lib/format-string-builder.js");
const Builder = new FormatStringBuilder();
```
## Functions
### constructor(str: string)
Sets the string, if none is supplied, uses empty string.
```javascript
const Builder = new FormatStringBuilder("Test string");
```

### append(str: string
Appends the given string to builder.
```javascript
Builder.append("I forgot this part");
```

### appendLn(str: string)
Appends the given string to builder with a newline.
```javascript
Builder.appendLn("I am followed by a new line");
```

### format(fullStr: str, arg1: str, arg2: str...)
Replaces placeholders with given arguments.
```javascript
Builder.format("Hello {0}, my name is {1} {2}", "reader", "Uncle", "Bob");
```

The string is formatted as:

    "Hello reader, my name is Uncle Bob"

### clear()
Clears the string.

```javascript
Builder.clear();
```

### toString()
Returns the built string.
```javascript
const builtString = Builder.toString();
```
## Properties
### newline
Get/set
Returns the set newline delimiter.
### length
Get
Returns the length of the built string
### lines
Get
Returns a split string array
