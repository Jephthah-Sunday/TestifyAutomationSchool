//Return the number of vowels in a string

const vowels = ['a','e','i','o','u']

function vowelCount(string){
    let count = 0

for(let letter of string.toLowerCase()){
    if (vowels.includes(letter)){
      count++
    }  
}
    return count
    
}

const string = ('Jephthah and Abimbola Javascript code challenge soulutions')
const result = vowelCount(string)
    
    console.log(result)