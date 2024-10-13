---
sidebar_position: 1
---

# Declare and Define Functions

Flow-Wing supports the creation of functions, which are blocks of reusable code that perform specific tasks.

## Function Definition

Functions in Flow-Wing can be defined with a specific data type and assigned a value.

### Example:

```ts
fun add(x: int, y: int) -> int {
    return x + y
}

var result: int = add(2, 3)
```

### Properties:

- **Arguments**: The function takes two arguments of type `int`.
- **Return Type**: The function returns an `int` value.


 ## Function with no return value

### Example:

```ts
fun doNothing() -> nthg {
    /; This function does not return anything
}

fun doNothing2() -> nthg {
    if true {
        return :
    }
}

```

Here, the function `doNothing` does not return anything. `return :` is used for early return in doNothing2 function.


## Only Function Declaration

Flow-Wing supports only function declaration.

### Example:

```ts
fun add(x: int, y: int) -> int decl
```

Here, the function `add` is declared. but not defined.

## Function Call

Functions in Flow-Wing can be called with arguments.

### Example:

```ts
fun add(x: int, y: int) -> int {
    return x + y
}

var result: int = add(2, 3)

print(result)
```

 By Default, the function arguments are passed by values.


 ## Function Parameters By Reference

 Flow-Wing supports passing function parameters by reference.

### Example:

```ts
fun add(inout x: int, y: int) -> int {
    x = 2
    return x + y
}

var x: int = 1
var result: int = add(x, 3)

print("x: ", x)
```

**Output:**
```bash
x: 2
```

Here, the function parameter `x` is passed by reference. `inout` indicates that the parameter is passed by reference.

## Function With Default Value Parameters

Flow-Wing supports passing function parameters with default values.

### Example:

```ts
fun add(x: int = 2, y: int = 0) -> int {
    return x + y
}

var result: int = add()
print("Result: ", result)
```

**Output:**
```bash
Result: 2
```

Here, the function parameters `x` and `y` have default values.


## Function Example with Multiple Return Values

Flow-Wing supports returning multiple values from a function.

### Example:

```ts
fun add(x: int, y: int) -> int, int {
    return x + y, x - y
}

var first: int, second: int = add(2, 3)

print("First: ", first)
print("\nSecond: ", second)
```

**Output:**
```bash
First:  5
Second:  -1
```

## Function Example with Container/Array Return Values and Parameters

Flow-Wing supports returning container/array values from a function.

### Example:

```ts
fun add(x: int, y: int) -> int[2] {
    return [x + y, x - y]
}

fun update(inout x: int[2]) -> int[2] {
    x[0] = 2
    return x
}

type Person = {
    name: str,
}

var person: Person = { name: "Alice" }
var people: Person[2] = [person, { name: "Bob" }]

fun addPerson(inout people: Person[2], person: Person) -> Person[2] {
    people[1] = person
    return people
}

var result: int[2] = add(2, 3)
```

Here, the `add` function returns a container/array value. The `update` function updates the container/array value.


## Function Example with Object Return Values and Parameters

Flow-Wing supports returning object values from a function.

### Example:

```ts
fun add(x: int, y: int) -> Person {
    return { name: "Alice" }    
}
```

Here, the `add` function returns an object value.


## Function Example with Class Return Values and Parameters

Flow-Wing supports returning class values from a function.

### Example:

```ts
class Person {
    var name: str
    var age: int

     init(name: str, age: int) -> nthg {
        self.name = name
        self.age = age 
    }

    toString() -> str {
        return "Name: " + self.name + ", Age: " + age
    }
}


fun add(x: int, y: int) -> Person {
    return new Person("Alice", 30)
}

var person: Person = add(2, 3)

print(person.toString())
```
Output: `Name: Alice, Age: 30`

## Function Example with Class a Parameter 

```ts
fun add(inout person: Person) -> nthg {
    person.age = 2
}
```

It is recommended to use `inout` parameter in Flow-Wing functions, when passing any complex types.





