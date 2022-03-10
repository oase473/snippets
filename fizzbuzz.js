var output = [];
var count = 1;

function fizzBuzz() {
    i++;
    
    var fizzResult = i % 3;

    var buzzResult = i % 5;

    if ( fizzResult == 0 && buzzResult == 0 ) {

        output.push("fizzbuzz");
    
    } else if ( buzzResult == 0 ) {

        output.push("buzz");
        
    } else if ( fizzResult == 0 ) {

        output.push("fizz");
        
    }else {

        output.push(i);
    
    }
    
    console.log(output);

}

fizzBuzz();