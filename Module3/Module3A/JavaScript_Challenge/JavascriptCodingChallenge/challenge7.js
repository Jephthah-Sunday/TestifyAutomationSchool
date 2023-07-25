//Sort an array of numbers in descending order

const myArray = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

function sortArr(input) {
    input.sort();
    input.reverse();
    return input
}
console.log("This is the sorted array of [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25] in descending order. ")

console.log(sortArr(myArray))