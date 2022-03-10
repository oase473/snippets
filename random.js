
var myVar = Math.random() * 100;

myVar = Math.floor(myVar)+1;

console.log(myVar);

if ( myVar >= 80 ) {
    alert("Your love score is: GREAT");
}

if ( myVar >= 50 && myVar < 80 ) {
    alert("Your love score is: OK");
}

if ( myVar < 50 ) {
    alert("Your love score is: NOK");
}
