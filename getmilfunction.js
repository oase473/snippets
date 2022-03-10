

function getMilk(budget) {   
    console.log(typeof(budget));
    numberOfBottles = budget / 1.5;
    console.log(numberOfBottles);
    numberOfBottles = numberOfBottles.toString().slice(0,1);
    console.log(typeof(numberOfBottles));
    console.log(numberOfBottles);
    console.log("Buy " + numberOfBottles + " bottles of milk")
    return budget % 1.5;
}

var change = getMilk(5);
console.log(change);