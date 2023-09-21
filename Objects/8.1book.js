/*1. Create an object that represents a book. It should have
4-5 properties that make sense for a book to have.*/



const myBook = 
{
    name: "Pragmatic Thinking and Learning",
    author:  "Andy Hunt",
    language: "English",
    ISBN: 1934356050,
    publishDate: "7th,Nov,2008"
}


// 2. Then write a function that has one argument, a book, that
// will return the following description from your book object:
// ‘The book <book name> was written by <author name> in
// the year <publishing year>

function discribeBook(book) 
{
    console.log(`the book ${book.name} 
                 was written by ${book.author} 
                 in the year ${book.publishDate}
                 ISBN: ${book.ISBN}`);

}


const bookDescription = discribeBook(myBook);
