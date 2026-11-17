# Binary Search Trees

This project is a smart way to organize and search through numbers in JavaScript, built as part of **The Odin Project**.

## What is a Binary Search Tree?

Imagine playing a number guessing game from 1 to 100. Instead of guessing 1, 2, 3 one by one, you start right in the middle at 50. With one question ("Is it higher or lower?"), you immediately eliminate half of the numbers.

A **Binary Search Tree** organizes data the exact same way:
* It starts with a middle number at the top (called the **root**).
* Smaller numbers always go to the **left**.
* Larger numbers always go to the **right**.
* Every branch splits in two, making it very fast to find, add, or remove any number.

## What This Project Can Do

* **Build a Balanced Tree:** Takes any messy list of numbers, removes duplicates, puts them in order, and builds a neat, evenly balanced tree.
* **Search Fast:** Quickly checks whether a specific number exists in the tree.
* **Add and Remove Numbers:** Safely inserts new numbers or deletes existing ones while keeping the tree's rules intact.
* **Read the Tree in Different Orders:** Walks through every number in four different ways (level by level, smallest to largest, top-down, or bottom-up).
* **Self-Balance:** Checks if one side of the tree has grown too heavy or lopsided, and automatically reorganizes itself back into a balanced shape.

## How to Run It

1. Make sure you have **Node.js** installed on your computer.
2. Download or clone this project folder.
3. Open your terminal inside the folder and run:

```bash
node main.js
```

You will see a visual diagram of the tree printed right in your terminal, showing it start balanced, become unbalanced when large numbers are added, and fix itself again.