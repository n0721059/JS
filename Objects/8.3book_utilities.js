const book1 = {name:"HOLLY",author:"Stephen King",year:2023};
const book2 = {name:"FOURTH WING",author:" Rebecca Yarros",year:2020};

const bookUtils = {};

bookUtils.getFirstPublished = function(bookA, bookB) {
    if (bookA.year < bookB.year) {
      return bookA;
    } else {
      return bookB;
    }
  };


  const firstPublishedBook = bookUtils.getFirstPublished(book1, book2);
  console.log("The book with the smaller year is:", firstPublishedBook.name,"by ",
             firstPublishedBook.author);