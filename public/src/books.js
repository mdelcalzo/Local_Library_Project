function findAuthorById(authors, id) {
  let author = [authors];
  let idMatch = authors.find((author) => author.id === id);
  return idMatch;
}

function findBookById(books, id) {
  let book = [books];
  let idMatch = books.find((book) => book.id === id);
  return idMatch;
}

function partitionBooksByBorrowedStatus(books) {
 const result=[];
    const borrowed=books.filter((book)=>book.borrows[0].returned===false);
    const returned=books.filter((book)=>book.borrows[0].returned===true);
  result.push(borrowed,returned)
  return result;
}
                


function getBorrowersForBook(book, accounts) {
  let result = [];
  accounts.forEach(account => {
    book.borrows.forEach(borrows => {
      let returned = borrows.returned;
      if (account.id === borrows.id) {
        const allInfo = {
              ...account, returned : returned }
        result.push(allInfo);
        }
    });
  });
  if (result.length > 10) {
    return result.slice(0, 10)
  }
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
