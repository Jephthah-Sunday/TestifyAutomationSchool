// My Personal Library 3

const books = [
    {
    title : 'HOW TO SELL ANYTHING TO ANYBODY',
    description : 'A Marketing Guide',
    numberOfPages : 238,
    author : 'Joe Girald',
    reading : true
    },
    {
    title : 'LEADERSHIP CAPACITY BUILDING',
    description : 'Personal Development',
    numberOfPages : 156,
    author : 'Jephthah Sunday',
    reading : false
    },
    {
    title : 'HOW TO BE ASSERTIVE',
    description : 'Personal Development',
    numberOfPages : 212,
    author : 'John West',
    reading : true
    },
    {
    title : 'HOW TO GROW YOUR INFLUENCE',
    description : 'Personal Development',
    numberOfPages : 120,
    author : 'Chimezie Sunday',
    reading : false
    },
    {
    title : 'HOW TO COMMUNICATE EFFECTIVELY',
    description : 'Personal Development',
    numberOfPages : 110,
    author : 'Peculiar Amutadi',
    reading : true
    },    
    
]

for(let i = 0; i <5; i++){
    if(books[i].reading === true){
    console.log(books[i])
    }
    
}