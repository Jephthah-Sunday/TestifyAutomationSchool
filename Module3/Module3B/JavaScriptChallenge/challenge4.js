// Print a table containing multiplication tables

const multiplicationTable =prompt("Enter the desired multiplication table")


for(let i=1; i<=12; i++){
    const result = i * multiplicationTable

    console.log(multiplicationTable, '*', i, '=', result)
}