const books = [
  { title: 'Atomic Habits', author: 'James Clear', year: 2018 },
  { title: 'Deep Work', author: 'Cal Newport', year: 2016 },
  { title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', year: 1997 }
];

function getBookTitles(bookArray) {
  return bookArray.map(book => book.title);
}

console.log(getBookTitles(books)); 

// Output: [ 'Atomic Habits', 'Deep Work', 'Rich Dad Poor Dad' ]
