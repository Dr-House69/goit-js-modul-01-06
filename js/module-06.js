/* task-01 */

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

// //   for (let i = 0; i < orderedItems.length; i += 1) {
// //     totalPrice += orderedItems[i];
// //   }
//     orderedItems.forEach((item, idx) => totalPrice += orderedItems[idx]);

//   // Пиши код выше этой строки
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

/* task-02 */

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки

//     // for (let i = 0; i < numbers.length; i += 1) {
//     //   if (numbers[i] > value) {
//     //     filteredNumbers.push(numbers[i]);
//     //   }
//     // }
//     numbers.forEach((number, index) => {
//         if (number > value)
//         { filteredNumbers.push(number); }
//     }

//   );

//     // Пиши код выше этой строки
//     return filteredNumbers;
// }

// console.log(filterArray([12, 24, 8, 41, 76], 20));

/* task-03 */

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки

//     // for (let i = 0; i < firstArray.length; i += 1) {
//     //   if (secondArray.includes(firstArray[i])) {
//     //     commonElements.push(firstArray[i]);
//     //   }
//     // }
//     firstArray.forEach((element) => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//   }

//   });
//     return commonElements;
//     // Пиши код выше этой строки
// }
//   console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

/* task-04 */

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }

// console.log(calculateTotalPrice(3, 400));

/* task-05 */

// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => 
//   quantity * pricePerItem;
// ;
// // Пиши код выше этой строки

// console.log(calculateTotalPrice(8, 60));

/* task-06 */

// Пиши код ниже этой строки
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) =>
    (totalPrice += item));
  return totalPrice;

}
// Пиши код выше этой строки
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

/* task-07 */

// Пиши код ниже этой строки
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Пиши код выше этой строки
  return filteredNumbers;
}

console.log(filterArray([12, 24, 8, 41, 76], 38));

/* task-08 */

// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Пиши код выше этой строки
  return commonElements;
}

console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

/* task-09 */

function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  // const newNumbers = [...numbers];

  // for (let i = 0; i < newNumbers.length; i += 1) {
  //   if (newNumbers[i] % 2 === 0) {
  //   newNumbers[i] += value;
  //   }
  // }

  // return newNumbers;

  const newNumbers = [];
   numbers.forEach(number => {newNumbers.push(number % 2 === 0 ? number + value : number);
    
   });
  return newNumbers;
  // Пиши код выше этой строки
}

console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

/* task-10 */

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map(planet => planet.length);

console.log(planetsLengths);

/* task-11 */

// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
  
// const titles = books.map(book => book.title);
  
// console.log(titles);

/* task-12 */

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки
  
// const genres = books.flatMap(book => book.genres);
  
// console.log(genres);

/* task-13 */

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

// console.table(users);

const getUserNames = users => {
  const names = users.map(user => user.name);
  
return names;
};
  
console.log(getUserNames(users));

/* task-14 */

// Пиши код ниже этой строки
// const getUserEmails = users => {
//   const emails = users.map(user => user.email);
//   return emails;

//   };

const getUserEmails = users =>  users.map(user => user.email);
  
 
  // Пиши код выше этой строки

console.log(getUserEmails(users));
  
/* task-15 */

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);

console.log(evenNumbers);
console.log(oddNumbers);

/* task-16 */

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter((genre,index) => allGenres.indexOf(genre) === index);
  
// console.log(allGenres);
// console.log(uniqueGenres);

/* task-17 */

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

/* task-18 */

const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);
 
console.log(getUsersWithEyeColor(users,'blue'));

// Пиши код выше этой строки

/* task-19 */

// Пиши код ниже этой строки
const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age > minAge && user.age < maxAge);
 

console.log(getUsersWithAge(users,20,30));
// Пиши код выше этой строки

/* task-20 */

// Пиши код ниже этой строки
const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName));
   
console.log(getUsersWithFriend(users,'Briana Decker'));
// Пиши код выше этой строки

/* task-21 */

// Пиши код ниже этой строки
const getFriends = (users) =>
  users.flatMap(user => user.friends).filter((friend, index, allFriends) => allFriends.indexOf(friend) === index);
   
console.log(getFriends(users));
// Пиши код выше этой строки

/* task-22 */

// Пиши код ниже этой строки
const getActiveUsers = (users) => users.filter(user => user.isActive )
   
;
// Пиши код выше этой строки
console.log(getActiveUsers(users));

/* task-23 */

const getInactiveUsers = (users) => users.filter(user => !user.isActive )
   
;
// Пиши код выше этой строки

console.log(getInactiveUsers(users));

/* task-24 */

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

/* task-25 */

// Пиши код ниже этой строки
const getUserWithEmail = (users, email) => users.find(user => user.email === email);

// Пиши код выше этой строки
console.log(getUserWithEmail(users, 'blackburndotson@furnigeer.com'));

/* task-26 */

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every(number => number % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(number => number % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(number => number % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(number => number % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(number => number % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(number => number % 2 !== 0);

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);
// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);
// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);

/* task-27 */

const isEveryUserActive = (users) => users.every(user => user.isActive)

console.log(isEveryUserActive(users));

/* task-28 */

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(number => number % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(number => number % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(number => number % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(number => number % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(number => number % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(number => number % 2 !== 0);

console.log(anyElementInFirstIsEven);
console.log(anyElementInFirstIsOdd);
console.log(anyElementInSecondIsEven);
console.log(anyElementInSecondIsOdd);
console.log(anyElementInThirdIsEven);
console.log(anyElementInThirdIsOdd);

/* task-29 */

const isAnyUserActive = users => users.some(user => user.isActive);

console.log(isAnyUserActive(users));

/* task-30 */

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((acc,value) => acc + value,0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime);
// console.log(averagePlayTime);

/* task-31 */

const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce((totalPlayTime, { playtime, gamesPlayed }) => totalPlayTime + playtime / gamesPlayed, 0);
  
// const totalAveragePlaytimePerGame = players.reduce((totalPlayTime, player) => totalPlayTime + player.playtime / player.gamesPlayed, 0);
console.log(totalAveragePlaytimePerGame);
  
/* task-32 */

const calculateTotalBalance = users => users.reduce((totalBalance, user) => totalBalance + user.balance, 0);

console.log(calculateTotalBalance(users));

/* task-33 */

const getTotalFriendCount = users => users.reduce((totalFriend, user) => totalFriend + user.friends.length,0);

console.log(getTotalFriendCount(users));

/* task-34 */

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);
// console.log(releaseDates);
// console.log(authors);

/* task-35 */

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((start,end) => start - end);

const descendingReleaseDates = [...releaseDates].sort((start, end) => end - start);

console.log(ascendingReleaseDates);
console.log(descendingReleaseDates);

/* task-36 */

const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  // Пиши код ниже этой строки
  
  const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));
  
  const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a));
  
console.log(authorsInAlphabetOrder);
console.log(authorsInReversedOrder);

/* task-37 */

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName =
//   [...books].sort((firstAuthor, secondAuthor) =>
//     firstAuthor.author.localeCompare(secondAuthor.author));

// const sortedByReversedAuthorName =
//   [...books].sort((firstAuthor, secondAuthor) =>
//     secondAuthor.author.localeCompare(firstAuthor.author));

// const sortedByAscendingRating =
//   [...books].sort((firstAuthor, secondAuthor) =>
//     firstAuthor.rating - secondAuthor.rating);

// const sortedByDescentingRating =
//   [...books].sort((firstAuthor, secondAuthor) =>
//     secondAuthor.rating - firstAuthor.rating);


// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

/* task-38 */

const sortByAscendingBalance =
  users => [...users].sort((prevBalance, nextBalance) => prevBalance.balance - nextBalance.balance);
  

  
console.log(sortByAscendingBalance(users));

/* task-39 */

const sortByDescendingFriendCount =
  users => [...users].sort((prevCount, nextCount) => nextCount.friends.length - prevCount.friends.length);

console.log(sortByDescendingFriendCount(users));
  
/* task-40 */

const sortByName =
  users => [...users].sort((prevName, nextName) => prevName.name.localeCompare(nextName.name));

console.log(sortByName(users));
  
/* task-41 */

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = [...books].filter((book) => book.rating >= MIN_BOOK_RATING)
  .sort((firstAuthor, secondAuthor) => firstAuthor.author.localeCompare(secondAuthor.author))
  .map(book => book.author);

console.log(names);

/* task-42 */

const getNamesSortedByFriendCount = users =>
  [...users].sort((prevCount, nextCount) => prevCount.friends.length - nextCount.friends.length)
    .map(user => user.name);

    console.log(getNamesSortedByFriendCount(users));

/* task-43 */
  
const getSortedFriends = users => [...users].flatMap(user => user.friends)
  .filter((friend, index, allFriends) => allFriends.indexOf(friend) === index)
  .sort((prevName, nextName) => prevName.localeCompare(nextName));

  console.log(getSortedFriends(users));

  /* task-44 */

const getTotalBalanceByGender = (users, gender) =>
  users.filter(user => user.gender === gender)
    .reduce((totalBalance, user) => totalBalance + user.balance, 0);

  console.log(getTotalBalanceByGender(users, 'male'));
  console.log(getTotalBalanceByGender(users, 'female'));
    