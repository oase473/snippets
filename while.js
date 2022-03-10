
var count = 100;

while ( count >= 0 ) {

    var temp = count - 1;
    
    if ( count > 0 ) {
        console.log(count + " bottles," + temp + " left");
    } else {
        console.log("no more");
    }
        
    count--;
}