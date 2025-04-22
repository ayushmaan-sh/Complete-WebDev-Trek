const person = {
    name: "Ayush",
    greet(){
        console.log(`Hi I'm ${this.name}`);
    }
}

person.greet()

const greetFunction = person.greet
greetFunction()
