

let hoursSection = ["1130", "1137"]

let hoursBeginComplete = hoursSection[0];
let hoursEndComplete = hoursSection[1];

let hoursBegin = Number(hoursBeginComplete.slice(0,2));
let hoursBeginMin = Number(hoursBeginComplete.slice(2,4));
let hoursBeginStr = hoursBegin + ":" + hoursBeginMin;

let hoursEnd = Number(hoursEndComplete.slice(0,2));
let hoursEndMin = Number(hoursEndComplete.slice(2,4));
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

process.exit();