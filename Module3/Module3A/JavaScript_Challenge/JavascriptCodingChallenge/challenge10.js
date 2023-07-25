// Create a function that filters out negative numbers


const mathsAnswer = [-2,4,5,6,-7,0,-10,13,-14,10,4,-5,7,8,9,-1]

//Implemented Higher Order function
function numberfilter(inputone){

  const result = mathsAnswer.filter(negativeFilter)

  //callback function
  function negativeFilter (input){
    return input > -1
  }

  return result
}

console.log(numberfilter(mathsAnswer))