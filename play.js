const name = "Tim";
let age = 34;
const hasHobbies = true;

age = 35;

const summarizeUser = (userName, userAge, userHasHobbies) => {
    return (
        'Name is ' + 
        userName + 
        ', age is ' + 
        userAge +
        ' and the user has hobbies: ' +
        userHasHobbies
    );
};

// const add = (a, b) => a+b;
// console.log(add(2,2));
const addRandom = () => 1+2;

console.log(addRandom());

console.log(summarizeUser(name, age, hasHobbies));