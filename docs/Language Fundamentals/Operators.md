---
sidebar_position: 5
---

# Operators

Flow-Wing supports the following operators, categorized for ease of understanding:

## Arithmetic Operators
| Operator | Description                |
|----------|----------------------------|
| `+`      | Addition                   |
| `-`      | Subtraction                |
| `*`      | Multiplication             |
| `/`      | Division                   |
| `%`      | Modulus                    |
| `^`      | Xor                        |
| `~`      | Bitwise NOT                |
| `//`     | Floor Division             |

## Examples:

```bash
print(true-true) /; Output: false
print(1.0 * 1.0) /; Output: 1.00000000000000
print("Hello"+2.0) /; Output: Hello2.00000000000000
print(1/2) /; 0.50000000000000
print(3//2) /; 1
print("Hello"+"FlowWing") /; HelloFlowWing
```

## Comparison Operators
| Operator | Description                |
|----------|----------------------------|
| `==`     | Equal to                   |
| `!=`     | Not equal to               |
| `<`      | Less than                  |
| `<=`     | Less than or equal to      |
| `>`      | Greater than               |
| `>=`     | Greater than or equal to   |

## Logical Operators
| Operator | Description                |
|----------|----------------------------|
| `&&`     | Logical AND                |
| `\|\|`     | Logical OR                 |

## Bitwise Operators
| Operator | Description                |
|----------|----------------------------|
| `&`      | Bitwise AND                |
| `\|`      | Bitwise OR                 |
| `^`      | Bitwise XOR                |

## Assignment Operators
| Operator | Description                |
|----------|----------------------------|
| `=`      | Assignment                 |
| `<-`     | Full Reassignment          |

## Miscellaneous Operators
| Operator | Description                |
|----------|----------------------------|
| `;`      | Return Statement terminator       |
| `,`      | Separator                  |
| `/#`      | Multiline Comment Beginning                         |
| `#/`      | Multiline Comment Ending                           |
| `/;`      | Singleline Comment                            |
| `:`      | Label or case separator     |
| `.`      | Member access operator      |
| `?`      | Ternary conditional operator |

## Parentheses and Brackets
| Operator | Description                |
|----------|----------------------------|
| `(`      | Open parenthesis            |
| `)`      | Close parenthesis           |
| `{`      | Open brace                  |
| `}`      | Close brace                 |
| `[`      | Open bracket                |
| `]`      | Close bracket               |