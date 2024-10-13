---
sidebar_position: 3
---

# Variables and Constants Declaration

This document provides examples of how to declare variables and constants in Flow-Wing.

## Variable Declaration

Variables in Flow-Wing can be declared with a specific data type and assigned a value.

### Example:
```ts
var integer: int = 10
var decimal: deci = 5.5
var _string: str = "Hello, Flow-Wing!"
var _boolean: bool = true
var someThing = "Hello, Flow-Wing!"
```

Here variable someThing is a `Dynamic Type Variable` that can be assigned any value. but its current value is `"Hello, Flow-Wing!"` which is a `string`.


## Dynamically Allocated Variables

Variables in Flow-Wing can be `dynamically allocated`. This means that they can be assigned a value at runtime.

### Example:
```ts
var number: int  = new 2
var string: str = new "Hello, Flow-Wing!"
var boolean: bool = new true
```

### Example with Complex Type:
```ts
type Person = {
    name: str,
    age: int,
    height: deci
}

var person: Person = { name: "Alice", age: 30, height: 5.5 }
print(person)
```

### Example with Array Type:
```ts
var numbers: int[5] = [1, 2, 3, 4, 5]
```

### Example with Default Value:

```ts
var numbers: int[5]
```

Here numbers is an `array` of `int` with a default value of `[0, 0, 0, 0, 0]`.

## Constant Declaration

Constants are immutable and cannot be changed after being assigned.

### Example:
```ts
const x: int = 2
```
