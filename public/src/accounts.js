function findAccountById(accounts, id) {
  let account = [accounts];
  let idMatch = accounts.find((account) => account.id === id);
  return idMatch;
}

function sortAccountsByLastName(accounts) {
  let sortedName = accounts.sort((lastNameA, lastNameB) => lastNameA.name.last.toLowerCase() > lastNameB.name.last.toLowerCase() ? 1 : -1);
  return sortedName;
}

function getTotalNumberOfBorrows(account, books) {
  let count = 0;
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) { 
      if (books[i].borrows[j].id === account.id) {
        count += 1;
      }
    }      
  } return count;
}

function getBooksPossessedByAccount(account, books, authors) {
  const result = [];
  const accoundId = account.id;
  books.forEach((book) => {
    const borrowed = book.borrows;
    const authorId = book.authorId;
    borrowed.forEach((borrow) => {
      if (borrow.id === accoundId && !borrow.returned){
        authors.forEach ((author) => {
          if (author.id === authorId) {
            const allInfo = {
              ...book, author : author }
            result.push(allInfo);
            }
          });
        }
      });
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
