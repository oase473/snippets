timestampAsInEmpro = () => {
    let timestamp = new Date().toISOString().slice(0,19) + "Z";
    return timestamp;
}

let timestamp = timestampAsInEmpro();
console.log(timestamp);