//Create a length converter function


function converter(centimeter) {
    const meter = centimeter / 100
    return meter
}

const length = converter(6500)

console.log('The length in meters is '+ length + 'm')