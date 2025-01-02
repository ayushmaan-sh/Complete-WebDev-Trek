let DemoArray = [0,1,2,3,4,5];

console.log("Before : ", DemoArray)

DemoArray.push(7);
DemoArray.push(8);
DemoArray.pop();

DemoArray.unshift(0);
DemoArray.shift();

console.log("After : ", DemoArray);

console.log("Includes : ",DemoArray.includes(6));
console.log("IndexOf : ",DemoArray.indexOf(6));

const newArr = DemoArray.join()
console.log("Demo Array : ",DemoArray);
console.log("New Array : ", newArr);
console.log("Type of Demo Array :", typeof DemoArray);
console.log("Type of New Array :", typeof newArr);

console.log("A", DemoArray);

const SliceArray = DemoArray.slice(1,3);

console.log("Sliced :", SliceArray);

console.log("B", DemoArray);

const SpliceArray = DemoArray.splice(1, 3);
console.log("Spliced :", SpliceArray);
console.log("C", DemoArray);

const marvel_heros = ["CaptainAmerica", "Ironman", "Thor"]
const dc_heros = ["Superman", "Batman", "Flash"]

marvel_heros.push(dc_heros);
console.log(marvel_heros);

const MarvelConcatDc = marvel_heros.concat(dc_heros);
console.log(MarvelConcatDc);

const allHerosSpread = [...marvel_heros, ...dc_heros];
console.log(allHerosSpread);


const mixedArray = [1,2,3,[4,5],6,[7,8,[9,10,11,12]]];
const filteredArray = mixedArray.flat(2)
console.log(filteredArray);

console.log(Array.isArray("Ayush"));
console.log(Array.from("Ayush"));
