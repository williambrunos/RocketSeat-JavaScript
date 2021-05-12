const booksPerCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      }
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      }
    ]
  }
];

console.log("Amount of categories: " + booksPerCategory.length);
let authorsAmount = 0;

for(let catalog of booksPerCategory) {
  console.log("Category: " + catalog.category);
  console.log("Amount of books: " + catalog.books.length);
}

let authors = [];
for(let catalog of booksPerCategory) {
  for(let book of catalog.books) {
    if(!authors.includes(book.author)) {
      authorsAmount++;
      authors.push(book.author);
    }
  }
}

console.log("Amount of authors: " + authorsAmount);

const authorName = "Augusto Cury";
console.log(`\nBooks wrote by ${authorName} \n`);

for(let catalog of booksPerCategory) {
  for(let book of catalog.books) {
    let isWroteAugustoCury = book.author === authorName;

    if(isWroteAugustoCury) {
      console.log(book.title);
    }
  }
}