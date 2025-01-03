let computer = {cpu: 12, ram:16, ssd: 512}
let lenovo = {
    screen: "HD",
    __proto__: computer
}
let Acer = {}

// console.log(`lenovo`, lenovo.__proto__);

let car = {tyre: 4}

let tesla = {
    driver: "AI",
    charging: "solar panels",
    __proto__: car
}

// Object.setPrototypeOf(tesla, car)
// console.log(`tesla`, Object.getPrototypeOf(tesla));

console.log(`tesla`, tesla.__proto__);
