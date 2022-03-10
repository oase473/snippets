

let hoursBegin = 12;
let hoursBeginMin = 34;
let hoursBeginStr = hoursBegin + ":" + hoursBeginMin;

let hoursEnd = 15;
let hoursEndMin = 55;
let hoursEndStr = hoursEnd + ":" + hoursEndMin;


function getMinBy100( min ) {
	let minBy100 = Math.floor(min/60*100);
	return minBy100
}




let minBy100 = getMinBy100(hoursEndMin)/100;
let timeEnd = hoursEnd+minBy100;
// console.log(timeEnd);

minBy100 = getMinBy100(hoursBeginMin)/100;
let timeBegin = hoursBegin+minBy100;
// console.log(timeBegin);

let timeWorked = timeEnd - timeBegin;



console.log("Beginn: " + hoursBeginStr + ", Ende: "+ hoursEndStr + ", Anw: " + timeWorked);