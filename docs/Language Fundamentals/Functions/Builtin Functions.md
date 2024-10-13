---
sidebar_position: 2
---

# Built-In Functions 

## Print Function
The `print` function is used to print a message to the console.

### Example:
```ts
print("Hello, World!")
print(2, 3, 4, "Hello")
print("Hello, World!\nHello, Flow-Wing!")
```
## Superclass Reference
The `super` keyword is used to refer to the superclass of the current class.

### Example:
```ts
class Dog extends Animal {
  init(age: int) -> nthg {
    super(age)
  }
}
```

## Input Function
The `input` function is used to read `input` from the user.

### Example:
```ts
var name: str = input("Enter your name: ")
```

**Return Type: `str`**

**Properties:**
    - Usage: Read input from the user


## Integer Conversion
The `Int32` function is used to convert a value to a 32-bit integer.

### Example:
```ts
var number: int = Int32("123")
```

## Decimal Conversion
The Decimal 64function is used to convert a value to a decimal 64-bit floating-point number.

### Example:
```ts
var number: deci = Decimal("123.45")
```

## Decimal32 Conversion
The Decimal32 function is used to convert a value to a `32-bit decimal`.

### Example:
```ts
var number: deci32 = Decimal32("123.45")
```

## String Conversion
The String function is used to convert a value to a `string`.

### Example:
```ts
var myStr: str = String(123)
```

## Boolean Conversion
The `Bool` function is used to convert a value to a boolean.

### Example:
```ts
var flag: bool = Bool(1)
```