const person = {
    name: "Tim",    
    age: 35,
    greet() {
        console.log("Hi, I am " + this.name);
    }
};

person.greet();