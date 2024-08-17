# I/O heavy operations
### I/O (Input/Output) heavy operations refer to tasks in a computer program that involve a lot of data transfer between the program and external systems or devices. These operations usually require waiting for data to be read from or written to sources like disks, networks, databases, or other external devices, which can be time-consuming compared to in-memory computations.

## Examples of I/O Heavy Operations:
- Reading a file
- Starting a clock
- HTTP Requests

# I/O bound tasks vs CPU bound tasks
## CPU bound tasks
CPU-bound tasks are operations that are limited by the speed and power of the CPU. These tasks require significant computation and processing power, meaning that the performance bottleneck is the CPU itself.

```
let ans = 0;
for (let i = 1; i <= 1000000; i++) {
	ans = ans + i
}
console.log(ans);	
```
A real world example of a CPU intensive task is running for 3 miles. Your legs/brain have to constantly be engaged for 3 miles while you run.

## I/O bound tasks
I/O-bound tasks are operations that are limited by the system’s input/output capabilities, such as disk I/O, network I/O, or any other form of data transfer. These tasks spend most of their time waiting for I/O operations to complete.

```
const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);
```
A real world example of an I/O bound task would be Boiling water. I don’t have to do much, I just have to put the water on the kettle, and my brain can be occupied elsewhere.
