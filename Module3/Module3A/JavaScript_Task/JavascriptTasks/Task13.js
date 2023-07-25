// My Personal Library 2

const book = {
    title : 'HOW TO SELL ANYTHING TO ANYBODY',
    description : 'A Marketing Guide',
    numberOfPages : 238,
    author : 'Joe Girald',
    reading : true,
    toggleReadingStatus : function(){
        if(book.reading===true){
            book.reading = 'Reading'
        } else{
            book.reading = 'Not Reading'
        }
    }
}

book.toggleReadingStatus()

console.log(book.reading)