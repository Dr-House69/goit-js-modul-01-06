/* task-01 */

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],

// };
// console.log(apartment);

/* task-02 */

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//         name: 'Henry',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com',

//     },

// };
// console.log(apartment);

/* task-03 */

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };


// const aptRating = apartment.rating;
// console.log(aptRating);
// const aptDescr = apartment.descr;
// console.log(aptDescr);
// const aptPrice = apartment.price;
// console.log(aptPrice);
// const aptTags = apartment.tags;
// console.log(aptTags);

/* task-04 */

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//         name: 'Henry',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com',

//     },

// };
// console.log(apartment);

// const ownerName = apartment.owner.name;
// console.log(ownerName);
// const ownerPhone = apartment.owner.phone;
// console.log(ownerPhone);
// const ownerEmail = apartment.owner.email;
// console.log(ownerEmail);
// const numberOfTags = apartment.tags.length;
// console.log(numberOfTags);
// const firstTag = apartment.tags[0];
// console.log(firstTag);
// const lastTag = apartment.tags[2];
// console.log(lastTag);

/* task-05 */

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };


// const aptRating = apartment['rating'];
// console.log(aptRating);
// const aptDescr = apartment['descr'];
// console.log(aptDescr);
// const aptPrice = apartment['price'];
// console.log(aptPrice);
// const aptTags = apartment['tags'];
// console.log(aptTags);

/* task-06 */

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//         name: 'Henry',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com',

//     },

// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');
// console.log(apartment);

/* task-07 */

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//         name: 'Henry',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com',

//     },

// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {country:'Jamaica', city:'Kingston'};

// console.log(apartment);

/* task-08 */

// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//     name,
//     price,
//     image,
//     tags

// };
// console.log(product);

/* task-09 */

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//     [emailInputName]: 'henry.carter@aptmail.com',
//     [passwordInputName]: 'jqueryismyjam'
// };
// console.log(credentials);

/* task-10 */

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key])
//     console.log(keys);
//     console.log(values);
// }



/* task-11 */

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
 
// if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
// }
  
// }
// console.log(keys);
// console.log(values);

/* task-12 */

// function countProps(object) {
//   let propCount = 0;
  
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount  += 1;
            
//         }
//     }

  
//   return propCount;
// }
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

/* task-13 */

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//     values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

/* task-14 */

// function countProps(object) {
  
//     let propCount = 0;
    
//     const keys = Object.keys(object);

//     console.log(keys);

//     propCount = keys.length;
// //   for (const key of keys) {
   
// //       propCount += 1;
    
// //   }

//   return propCount;
  
// }
// console.log(countProps({ name: "Mango", age: 2 }));

/* task-15 */

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

/* task-16 */

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//     const values = Object.values(salaries);
//     for (const value of values) {
//         totalSalary += value;
//     }

//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

/* task-17 */

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];


// for (const color of colors) {
     
//     hexColors.push(color.hex);       
//     rgbColors.push(color.rgb);
    
// }

// console.log(hexColors);
// console.log(rgbColors);

/* task-18 */

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
  
//   for (const { name, price }  of products) {
//     console.log(name,price);
//     if (name === productName) {
//       return price;
//     }
//   }
//   return null;
  
  

// console.log(getProductPrice('Grip'));
// console.log(getProductPrice('Engine'));

/* task-19 */

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const properties = [];
  
//   for (const property of products) {
    
// if (property.hasOwnProperty(propName)) {
  
//   properties.push(property[propName]);
//     }
    
//   }
//   return properties;
  
//   // Change code above this line
// }
// console.log(getAllPropValues('name'));

/* task-20 */

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
  
//   let totalPrice = 0;
//   for (const { name, price, quantity } of products) {
//     if (name === productName) {
//       totalPrice = price * quantity;
//       return totalPrice;
//     }

//     }
//     return 0;
    
// }
// console.log(calculateTotalPrice('Droid'));

/* task-21 */

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow } = highTemperatures;
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

/* task-22 */

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow, icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } = highTemperatures;

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

/* task-23 */

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg', } = highTemperatures;
// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);

/* task-24 */

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex,rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

/* task-25 */

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const { today: { low: lowToday, high: highToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg' },
// tomorrow: { low: lowTomorrow, high: highTomorrow,icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}} = forecast;
// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;
// console.log(forecast);

/* task-26 */

// Change code below this line
// function calculateMeanTemperature({ today: {low: todayLow,high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh}}) {

//   // const { today: {low: todayLow,high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh}} = forecast;
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }));

/* task-27 */

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

/* task-28 */

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores,...secondGroupScores,...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(bestScore);
// console.log(worstScore);

/* task-29 */

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings,...overrideSettings};

// console.log(finalSettings);

/* task-30 */

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   const finalTask = { completed, category, priority, ...data };
//   return finalTask;
//   // Change code above this line
// }

// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));

/* task-31 */

// Change code below this line
// function add(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
//   // Change code above this line
// }

// console.log(add(74, 11, 62, 46, 12, 36));

/* task-32 */

// Change code below this line
// function addOverNum(firstNumber,...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
    
//   }
// return total;
  
//   // Change code above this line
// }

// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

/* task-33 */

// // Change code below this line
// function findMatches(arrayMatches,...otherMatches) {
//   const matches = []; // Don't change this line
//   for (const number of otherMatches) {
//     if (arrayMatches.includes(number)) {
//       matches.push(number);
//     }
    
//   }

//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));

/* task-34 */

// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName,newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   }
//   // Change code above this line
// };

// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

/* task-35 */

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     let indexBook = this.books.indexOf(oldName);
//     this.books.splice(indexBook, 1, newName);
	
	
//     // Change code above this line
//   },
// };
// bookShelf.updateBook('Haze', 'Dungeon chronicles');
// console.table(bookShelf);

/* task-(36-40) */

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
//    removePotion(potionName) {
    
//      let indexPotion = this.potions.indexOf(potionName);
//      this.potions.splice(indexPotion, 1);
    
//   },
//     updatePotionName(oldName, newName) {
//     // Change code below this line
//  let indexPotion = this.potions.indexOf(oldName);
//      this.potions.splice(indexPotion, 1,newName);
//     // Change code above this line
//   },
// };
// atTheOldToad.updatePotionName("Stone skin", "Invisibility");

/* task-41 */

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
// getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Potion ${newPotion.name} is already equipped!`;
//       }
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       const potion = this.potions[i];
//       if (potion.name === potionName) {
//         this.potions.splice(i, 1);
//         return;
//       }
//     }

//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
    

//     for (let i = 0; i < this.potions.length; i++) {
//       const potion = this.potions[i];
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },



  
//   // getPotions() {
//   //   return this.potions;
//   // },
//   // addPotion(potionName) {
//   //   if (this.potions.includes(potionName)) {
//   //     return `Potion ${potionName} is already equipped!`;
//   //   }

//   //   this.potions.push(potionName);
//   // },
//   // removePotion(potionName) {
//   //   const potionIndex = this.potions.indexOf(potionName);

//   //   if (potionIndex === -1) {
//   //     return `Potion ${potionName} is not in inventory!`;
//   //   }

//   //   this.potions.splice(potionIndex, 1);
//   // },
//   // updatePotionName(oldName, newName) {
//   //   const potionIndex = this.potions.indexOf(oldName);

//   //   if (potionIndex === -1) {
//   //     return `Potion ${oldName} is not in inventory!`;
//   //   }

//   //   this.potions.splice(potionIndex, 1, newName);
//   // },
//   // Change code above this line
// };
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
// console.log(atTheOldToad.removePotion("Dragon breath"));


// Задача. Расширяем инвентарь
// Задание
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
// Тесты
// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.getPotions это метод объекта
// Вызов метода atTheOldToad.getPotions() для исходного объекта возвращает [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
// Значение свойства atTheOldToad.addPotion это метод объекта.
// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: "Invisibility", price: 620 }), в массиве potions последним элементом будет этот объект
// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: "Power potion", price: 270 }), в массиве potions последним элементом будет этот объект
// Значение свойства atTheOldToad.removePotion это метод объекта
// Для исходного объекта после вызова метода atTheOldToad.removePotion("Dragon breath"), в свойстве potions будет массив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// Для исходного объекта после вызова метода atTheOldToad.removePotion("Speed potion"), в свойстве potions будет массив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// Значение свойства atTheOldToad.updatePotionName это метод объекта
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"), в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]