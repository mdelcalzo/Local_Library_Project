function getTotalBooksCount(books) {
  let bookCount = 0;
  for (let book in books) {
    bookCount += 1;
  }
  return bookCount; 
}

function getTotalAccountsCount(accounts) {
  let accountCount = 0;
  for (let account in accounts) {
    accountCount += 1;
  }
  return accountCount;
}

function getBooksBorrowedCount(books) {
  let borrowedCount = 0;
  books.forEach(book => {
    if (book.borrows[0].returned === false) 
      borrowedCount += 1;});
     return borrowedCount;
}

function getMostCommonGenres(books) {
  const genresOfBooks = books.map((book) => book.genre);
  const fiveCommonGenres = [];
  genresOfBooks.map((genre) => {
    const location = fiveCommonGenres.findIndex((element) => element.name === genre);
      if (location >= 0) {fiveCommonGenres[location].count = fiveCommonGenres[location].count + 1;} 
      else {fiveCommonGenres.push({name: genre, count: 1});}});
  fiveCommonGenres.sort((a, b) => b.count - a.count); 
    if (fiveCommonGenres.length > 5) {return fiveCommonGenres.slice(0, 5); }
  return fiveCommonGenres;
}

function topFive(array) {
  array.sort((a, b) => b.count - a.count);
  if (array.length > 5) {
    return array.slice(0, 5)
  }
}
  
function getMostPopularBooks(books) {  
  let popularBooks = [];
  books.forEach(book => {
    popularBooks.push({name: book.title, count: book.borrows.length});  
  }); 
  return topFive(popularBooks);
}


function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];
  let count = 0;
  authors.forEach(author => {
    let authorName = `${author.name.first} ${author.name.last}`;
    books.forEach(book => {
      if (author.id === book.authorId) {
        let count = book.borrows.length;
        let authorObject = {name: authorName, count: count};
        popularAuthors.push(authorObject);
      }
    });
  }); 
  return topFive(popularAuthors);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
