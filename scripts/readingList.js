/*
Reading List

Keep track of what books I have read and ones I have not

1. create a list of books
   array of objects
   each object = a book
   each book has a TITLE and a AUTHOR, if i have read it or not BOOLEAN / true-false
   TITLE = string, AUTHOR = string, has read = BOOLEAN

BOOKS = [
  {
    TITLE = string
    AUTHOR = string
    HASREAD = boolean
  },
  {
    TITLE = string
    AUTHOR = string
    HASREAD = boolean
  }
]

CODE 
====
const books = [
  {
    title: '',
    author: '',
    hasRead: true
  },
  {
    title: '',
    author: '',
    hasRead: false
  }
]

2. cycle through the list of books
   FOR each book show the TITLE and AUTHOR 'The Hobbit by J.R.R. Tolkien'
   FOR
    COUNTER
    CONDITION
    INCREASE COUNTERS VALUE

   FOR
    COUNTER = 0
    COUNTER < BOOKS.LENGTH
    COUNTER + 1

for(let counter = 0; counter < books.length; counter++ ) {

}

3. Show whether or not i have read the book
   IF has read = true
    THEN i have read the book

  IF has read = false
  i haven't read the book

  IF HASREAD = true
      'i have read the TITLE by AUTHOR'
      
  IF HASREAD = false
      'i haven't read the TITLE by AUTHOR'

  if(hasRead) {
    console.log(  'i have read the TITLE by AUTHOR' )
  } 
  
  if(!hasRead){
    'i haven't read the TITLE by AUTHOR'
  }


*/

const books = [
  {
    title: 'The lord of the rings',
    author: 'J.R.R. Tolkien',
    hasRead: true
  },
  {
    title: 'The hobbit',
    author: 'J.R.R. Tolkien',
    hasRead: false
  }
]

for(let counter = 0; counter < books.length; counter++ ) {
  // console.log( books[counter].title, books[counter].author  );

  if(books[counter].hasRead) {
    console.log( `i have read the ${books[counter].title} by ${books[counter].author}` );
  } else {
    `i haven't read the ${books[counter].title} by ${books[counter].author}`
  }

}
