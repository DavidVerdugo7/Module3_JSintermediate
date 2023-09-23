//====JS intermediate 1

function firstLetters(inputString) {
  const words = inputString.split(" "); //i n p u t s t r i n g

  const capitalizedWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });

  return capitalizedWords.join(" ");
}

console.log(firstLetters("los angeles"));

//====JS intermediate 2

function truncate(str, max) {
  if (str.length <= max) {
    return str;
  } else {
    return str.slice(0, max - 3) + "...";
  }
}
console.log(truncate("This text will be truncated if it is too long", 25));

//B
function truncate(str, max) {
  return str.length <= max ? str : str.slice(0, max - 3) + "...";
}

//====JS intermediate 3
// const animals = ["Tiger", "Giraffe"];
// console.log(animals);

//====JS intermediate 3
console.log("=============================");
// //A
// animals.push("Lion", "Elephant");

console.log("=============================");
// //B
// animals.unshift("Cat", "Dolphyn🐬");

console.log("=============================");
// //C
// animals.sort();
// console.log(animals);

console.log("=============================");
// //D
// function replaceMiddleAnimal(newValue) {
//   const middleword = Math.floor(animals.length / 2);
//   if (animals.length % 2 === 1) {
//     animals[middleword] = newValue;
//   } else {
//     animals[middleword - 1] = newValue;
//   }
// }

// replaceMiddleAnimal("Gazelle");

// console.log(animals);

console.log("=============================");
//E
const animals = ["Tiger", "Giraffe", "Lion", "Elephant"];

function findMatchingAnimals(beginsWith) {
  beginsWith = beginsWith.toLowerCase();

  const matchingAnimals = animals.filter((animal) => {
    const lowercaseAnimal = animal.toLowerCase();

    return lowercaseAnimal.startsWith(beginsWith);
  });

  return matchingAnimals;
}

const result = findMatchingAnimals("gi");

console.log(result);

console.log("==============4===============");

//====JS intermediate 4
// function camelCase(cssProp) {
//   const words = cssProp.split("-");

//   const camelCasedWords = words.map((word, index) => {
//     if (index === 0) {
//       return word;
//     } else {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }
//   });
//   return camelCasedWords.join("");
// }

console.log("=============================");
//B
function camelCase(cssProp) {
  const words = cssProp.split("-");
  let camelCased = words[0];

  for (const word of words.slice(1)) {
    camelCased += word.charAt(0).toUpperCase() + word.slice(1);
  }

  return camelCased;
}
console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

console.log("=============for  in================");

function camelCase(cssProp) {
  const words = cssProp.split("-");
  let camelCased = words[0];

  for (let i = 1; i < words.length; i++) {
    camelCased += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return camelCased;
}
console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

console.log("=============for  and conditional op================");

function camelCase(cssProp) {
  const words = cssProp.split("-");
  let camelCased = words[0];

  for (let i = 1; i < words.length; i++) {
    camelCased += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return camelCased;
}
console.log("=============5================");
//====JS intermediate 5
//a
// let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);
// console.log(fixedTwenty + fixedTen); //why is this not working?
/*toFixed returns string representation of numbers and using + operator that 
concatenate the strings and not numerical addition*/

console.log("================B=============");

//B
function currencyAddition(float1, float2) {
  const result = float1 + float2;
  return result;
}

const twentyCents = 0.2;
const tenCents = 0.1;
const total = currencyAddition(twentyCents, tenCents);

console.log(total);

//C
console.log("==============C===============");

function currencyOperation(float1, float2, operation) {
  const factor = 100;
  const int1 = Math.round(float1 * factor);
  const int2 = Math.round(float2 * factor);
  let result;

  switch (operation) {
    case "+":
      result = int1 + int2;
      break;
    case "-":
      result = int1 - int2;
      break;
    case "*":
      result = int1 * int2;
      break;
    case "/":
      result = int1 / int2;
      break;
    default:
      throw new Error('Invalid operation. Use "+", "-", "*", o "/"');
  }

  return result / factor;
}

console.log(0.3 == currencyOperation(0.1, 0.2, "+")); // true
console.log(0.3 == currencyOperation(0.1, 0.2, "-")); // true
console.log(0.3 == currencyOperation(0.1, 0.2, "*")); // true
console.log(0.3 == currencyOperation(0.6, 2, "/")); // true

//D
console.log("=============================");

function currencyOperation(float1, float2, operation, numDecimals) {
  if (numDecimals < 1 || numDecimals > 10) {
    throw new Error(
      "Invalid number of decimals. Use a value between 1 and 10."
    );
  }

  const factor = Math.pow(10, numDecimals);

  const int1 = Math.round(float1 * factor);
  const int2 = Math.round(float2 * factor);

  let result;

  switch (operation) {
    case "+":
      result = int1 + int2;
      break;
    case "-":
      result = int1 - int2;
      break;
    case "*":
      result = int1 * int2;
      break;
    case "/":
      result = int1 / int2;
      break;
    default:
      throw new Error('Invalid operation. Use "+", "-", "*", or "/"');
  }

  return result / factor;
}
//EG
console.log(0.3 == currencyOperation(0.1, 0.2, "+", 1));
console.log(0.3 == currencyOperation(0.1, 0.2, "+", 2));
console.log(0.3 == currencyOperation(0.1, 0.2, "+", 3));

console.log("=============================");
//====JS intermediate 6

function unique(duplicatesArray) {
  const uniqueSet = new Set(duplicatesArray);

  const uniqueArray = Array.from(uniqueSet);

  return uniqueArray;
}
// EG:
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];

console.log(unique(colours));
console.log(unique(testScores));

console.log("==============7===============");
//====JS intermediate 7
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

//A
console.log("==============A find===============");

const titles = books.map((book) => book.title);
console.log(titles);

console.log("=============================");
const bookToFind = "1984";
const foundBook = books.find((book) => book.title === bookToFind);

if (foundBook) {
  console.log(`Found book with title "${bookToFind}":`, foundBook);
} else {
  console.log(`Book with title "${bookToFind}" not found.`);
}

console.log("=============================");
const yearToFilter = 1950;
const booksAfter1950 = books.filter((book) => book.year > yearToFilter);
console.log(`Books published after ${yearToFilter}:`, booksAfter1950);
//B
console.log("==============B===============");

function getBookTitle(bookId) {
  const book = books.find(function (book) {
    return book.id === bookId;
  });
  if (book) {
    return book.title;
  } else {
    return "Libro no encontrado";
  }
}
const bookId = 3; // EG
const title = getBookTitle(bookId);
console.log(title);

//C
console.log("==============C===============");
function addGenre() {
  const booksWithGenre = books.map((book) => ({
    ...book,
    genre: "classic",
  }));

  return booksWithGenre;
}

// EG
const booksWithGenre = addGenre();
console.log(booksWithGenre);

//D
console.log("==============D===============");
function getTitles(authorInitial) {
  const filteredBooks = books.filter((book) =>
    book.author.startsWith(authorInitial)
  );
  const bookTitles = filteredBooks.map((book) => book.title);

  return bookTitles;
}

// EG
const authorInitial = "F";
const titlesByAuthor = getTitles(authorInitial);
console.log(titlesByAuthor);

//E
console.log("==============E===============");

function latestBook() {
  let latest = null;

  books.forEach((book) => {
    if (!latest || book.year > latest.year) {
      latest = book;
    }
  });

  return latest;
}

// EG
const latest = latestBook();
console.log(latest);

//====JS intermediate 8
console.log("==============8 - A===============");

// phoneBookABC.set("Annabelle", "0412312343");
// phoneBookABC.set("Barry", "0433221117");
// phoneBookABC.set("Caroline", "0455221182");
//A
// const phoneBookDEF = new Map();

// phoneBookDEF.set("David", "0477123456");
// phoneBookDEF.set("Emily", "0488334567");
// phoneBookDEF.set("Frank", "0499445678");

console.log("==============B===============");
//B

// const initialData = [
//   ["David", "0477123456"],
//   ["Emily", "0488334567"],
//   ["Frank", "0499445678"],
// ];

// const phoneBookDEF = new Map(initialData);

// console.log("==============C===============");
// //C
// phoneBookABC.set("Caroline", "newPhoneNumber");

// console.log("==============D===============");
// //D

// function printPhoneBook(contacts) {
//   for (let [name, phoneNumber] of contacts) {
//     console.log(`Name: ${name}, Phone Number: ${phoneNumber}`);
//   }
// }

// EG:
// const phoneBookABC = new Map();
// phoneBookABC.set("Annabelle", "0412312343");
// phoneBookABC.set("Barry", "0433221117");
// phoneBookABC.set("Caroline", "0455221182");

// printPhoneBook(phoneBookABC);

// console.log("==============E===============");
// //E
// const phoneBookABC = new Map();
// phoneBookABC.set("Annabelle", "0412312343");
// phoneBookABC.set("Barry", "0433221117");
// phoneBookABC.set("Caroline", "0455221182");

// const phoneBookDEF = new Map();
// phoneBookDEF.set("David", "0477123456");
// phoneBookDEF.set("Emily", "0488334567");
// phoneBookDEF.set("Frank", "0499445678");

// const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

// for (let [name, phoneNumber] of phoneBook) {
//   console.log(`Name: ${name}, Phone Number: ${phoneNumber}`);
// }

// console.log("==============F===============");
// //F

// const names = [];

// for (let name of phoneBook.keys()) {
//   names.push(name);
// }

// console.log("List of Names:");
// for (let name of names) {
//   console.log(name);
// }

//====JS intermediate 9
console.log("==============9 A===============");
// let salaries = {
//   Timothy: 35000,
//   David: 25000,
//   Mary: 55000,
//   Christina: 75000,
//   James: 43000,
// };

// function sumSalaries(salaries) {
//   let total = 0;
//   for (let person in salaries) {
//     total += salaries[person];
//   }
//   return total;
// }

// let totalSalaries = sumSalaries(salaries);
// console.log("the total salaries is :", totalSalaries);

console.log("==============9 B===============");
function topEarner(salaries) {
  let highestSalary = 0;
  let topEarnerName = "";

  for (let person in salaries) {
    if (salaries[person] > highestSalary) {
      highestSalary = salaries[person];
      topEarnerName = person;
    }
  }

  return topEarnerName;
}

let salariesB = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

let topEarnerName = topEarner(salariesB);
console.log("The top earner is:", topEarnerName);

//====JS intermediate 10
console.log("==============10 A===============");

const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

// total number of minutes
const totalMinutes = today.getHours() * 60 + today.getMinutes();
console.log(totalMinutes + " minutes have passed so far today");

console.log("==============10 B===============");
const todays = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

// total number of minutes
const totalMin = today.getHours() * 60 + today.getMinutes();
console.log(totalMin + " minutes have passed so far today");

// total number of seconds
const totalSeconds = totalMinutes * 60 + today.getSeconds();
console.log(totalSeconds + " seconds have passed so far today");

console.log("==============10 C===============");

const birthDate = new Date("1992-10-31");

const currentDate = new Date();

const ageInMilliseconds = currentDate - birthDate;
const ageInYears = Math.floor(
  ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)
);
const ageInMonths = Math.floor(
  (ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) /
    (30.44 * 24 * 60 * 60 * 1000)
);
const ageInDays = Math.floor(
  (ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
);

console.log(
  `I am ${ageInYears} years, ${ageInMonths} months, and ${ageInDays} days old.`
);

console.log("==============10 D===============");
function daysInBetween(date1, date2) {
  const date1Milliseconds = date1.getTime();
  const date2Milliseconds = date2.getTime();

  const timeDifference = Math.abs(date1Milliseconds - date2Milliseconds);

  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}

//run
const startDate = new Date("2023-01-01");
const endDate = new Date("2023-09-20");
const daysBetween = daysInBetween(startDate, endDate);

console.log(`There are ${daysBetween} days between the 2 dates.`);
