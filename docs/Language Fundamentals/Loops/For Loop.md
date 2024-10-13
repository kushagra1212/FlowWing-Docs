---
sidebar_position: 1
---


# For Loop

Flow-Wing supports the `for` keyword to iterate over a sequence of values.

### Example Usage:

```ts
for var i = 0 to 10  {
    print(i + " ")
}
```

**Output:**
```bash
0 1 2 3 4 5 6 7 8 9 10
```

Here, the `for` keyword is used to iterate over a sequence of values. statment inside loop is executed 11 times.

## With Steper

Flow-Wing supports the `for` keyword to iterate over a sequence of values with a steper.

### Example Usage:

```ts
for var i = 0 to 10 : 2  {
    print(i + " ")
}
```

**Output:**
```bash
0 2 4 6 8 10
```

Here, the `for` keyword is used to iterate over a sequence of values with a steper. statment inside loop is executed 6 times.

