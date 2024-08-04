# JavaScript - The Basics

## Web Development
Web development involves writing a lot of HTML, CSS, and JS code. Historically (and even today to some extent), browsers could only understand HTML, CSS, and JS. Any website that you see is a bunch of HTML, CSS, and JS files along with some assets (images, videos, etc).

### Facts/Callouts:
- React, Next.js are frameworks. They compile down to HTML, CSS, and JS in the end. That is what your browser understands.
- When you run your C++ code on LeetCode, it does not run on your browser/machine. It runs somewhere else. Your browser can’t (almost) compile and run C++ code.
- If someone asks, "What languages can your browser interpret?" the answer is HTML, CSS, JS, and WebAssembly. It can, technically, run C++/Rust code that is compiled down to Wasm.

## Properties of JavaScript

### 1. Interpreted
JavaScript is an interpreted language, meaning it's executed line-by-line at runtime by the JavaScript engine in the browser or server environment, rather than being compiled into machine code beforehand.

C++ code ---------> Binary code --------> Runs on your machine
JavaScript code ---------------------------> Runs on your machine

Upsides: 
- There is one less step to do before running your code

Downsides: 
- Performance Overhead:
- More prone to runtime errors

### 2. Dynamically typed
Variables in JavaScript are not bound to a specific data type. Types are determined at runtime and can change as the program executes

C++ code (Won't compile):

  ```cpp
#include <iostream>

int main() { 
    int a = 1;
    a = "hello";
    a = true;
}
  ```

JavaScript code will compile:

```javascript
var a = 1;
a = "harkirat";
a = true;

console.log(a)
```

### 3. Single threaded
JavaScript executes code in a single-threaded environment, meaning it processes one task at a time. We will dive deeper into this next week.

### 4. Garbage collected
JavaScript automatically manages memory allocation and deallocation through garbage collection, which helps prevent memory leaks by automatically reclaiming memory used by objects no longer in use.

## Conclusion
Is JS a good language?
Yes and no. It is beginner friendly, but has a lot of performance overhead. Bun is trying to solve for a lot of this, but there’s a long way to go before JS can compete with languages like C++/Rust
