/* task-01 */
// function checkAge(age) {
//   if (age >= 18) { 
//     return 'You are an adult';
//   }

//   return 'You are a minor';
// }
// console.log( checkAge(15));

/* task-02 */

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';


//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   } 
//     return 'Access denied, wrong password!';
//   }
//  console.log(checkPassword('jqueryismyjamGoIT'));

/* task-03 */

// function checkStorage(available, ordered) {

//     if (ordered === 0) {
//         return 'Your order is empty!';
//     }
//     if (ordered > available) {
//         return 'Your order is too large, not enough goods in stock!';
//     }

//         return 'The order is accepted, our manager will contact you';


// }
// console.log( checkStorage(10,0));

/* task-04 */

// const fruits = ["apple", "plum", "pear", "orange"];


/* task-05 */

// const fruits = ["apple", "plum", "pear", "orange"];


// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];
// console.log(fruits);


/* task-06 */


// const fruits = ["apple", "plum", "pear", "orange"];


// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits[1]);

/* task-07 */


// const fruits = ["apple", "peach", "pear", "banana"];

// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);


/* task-08 */

// const fruits = ["apple", "peach", "pear", "banana"];


// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElement);


/* task-09 */

// function getExtremeElements(array) {

//     // const firstElement = array[0];
//     // const lastElement = array[array.length - 1];
//     array = [array[0], array[array.length - 1]];

//     return  array;
  

// }
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));


/* task-10 */

// function splitMessage(message, delimeter) {
//   let words;

   //   words = message.split(delimeter);
    
//   return words;
// }
// console.log(splitMessage('Mango_hurries_to_the_train','_'));


/* task-11 */

// function calculateEngravingPrice(message, pricePerWord) {
    
   
//    return message.split(' ').length * pricePerWord;
  
// }
// console.log(calculateEngravingPrice("Web-development is creative work", 40));

/* task-12 */

// function makeStringFromArray(array, delimeter) {
//   let string;
  
//    string = array.join(delimeter);

//    return string;
// }
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));

/* task-13 */

// function slugify(title) {
 
//    return title.toLowerCase().split(' ').join('-');
   
// }
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));

/* task-14 */

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];


// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, - 1);
// const lastThreeEls = fruits.slice(- 3);

// console.log(fruits.slice(1, - 1));

/* task-15 */

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

// console.log(allClients);

/* task-16 */

// function makeArray(firstArray, secondArray, maxLength) {
  
   
//    return firstArray.concat(secondArray).slice(0,maxLength);

   
// }
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 3));
  
/* task-17 */

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
   
//   console.log(i);
// }

/* task-18 */

// function calculateTotal(number) {

//    let total = 0;
 
//    for (let i = 0; i <= number; i += 1) {

//       total += i;
//    }
   
//    return total;
// }
// console.log(calculateTotal(24));
 
/* task-19 */

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { 
//   const fruit = fruits[i]; 
//   console.log(fruit);
// }

/* task-20 */

// function calculateTotalPrice(order) {

//    let total = 0;
   
//    for (const item of order) {

//       total += item;
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

/* task-21 */

// function findLongestWord(string) {

//    const arrayString = string.split(' ');
   
//    let longestWord = '';
//    for (const word of arrayString) {
//      console.log(word);
//      if (word.length > longestWord.length) {
//         longestWord = word;
//      }
//   }
   
     
//        return longestWord;
//    }
   // return string.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);


//  console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

/* task-22 */

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
  
//    for (let i = min; i <= max; i++) {
//    console.log(i);
//   numbers.push(i);
//    }
//    // numbers.push(max)
  
//   return numbers;
// }
// console.log(createArrayOfNumbers(5, 12));

/* task-23 */

// function filterArray(numbers, value) {
      
//    const newArray= [];
  
//    for (const number of numbers) {
//        if (number > value) {
//          //  console.log(number);
//           newArray.push(number);   
//     }
         
//    }

//       return newArray;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 20));
 
/* task-24 */

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); 
// }
// console.log(checkFruit('fruit'));

/* task-25 */

// function getCommonElements(array1, array2) {
//   
//    const commonElements = [];
   

//    for (const element of array1) {
//       console.log(element);
//       if (array2.includes(element)) {

//          commonElements.push(element);
//       }
//    }
//    return commonElements;

//  
// }
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

/* task-26 */

// function calculateTotalPrice(order) {
//   let total = 0;
//   
//  for (const item of order) {
//     total += item;
//  }
// //   for (let i = 0; i < order.length; i += 1) {
// //     total += order[i];
// //   }

//   
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

/* task-27 */

// function filterArray(numbers, value) {
//   
//     const filteredNumbers = [];
  
//     for (const number of numbers) {
//         if (number > value) {
//           //  console.log(number);
//           filteredNumbers.push(number);   
//     }
         
//    }

//        return filteredNumbers;
// //   const filteredNumbers = [];

// //   for (let i = 0; i < numbers.length; i += 1) {
// //     const number = numbers[i];

// //     if (number > value) {
// //       filteredNumbers.push(number);
// //     }
// //   }

// //   return filteredNumbers;
//   
// }
// console.log(filterArray([12, 24, 8, 41, 76], 20));

/* task-28 */

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log(e);

/* task-29 */

// function getEvenNumbers(start, end) {
//    
//    const evenNumbers = [];

  
//    for (let i = start; i <= end; i += 1) {
      
//       if (i % 2 === 0) {
         
//          evenNumbers.push(i)
//       }
//    }
//    return evenNumbers;

//     
// }
// console.log(getEvenNumbers(6, 12));
  
/* task-30 */

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//      number = i;
//      break;
//   }
// }
// console.log(number);

/* task-31 */

// function findNumber(start, end, divisor) {
//   
 

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
      
//     }
//   }

  
//   
// }
// console.log(findNumber(16, 35, 7)); //21

/* task-32 */

function includes(array, value) {
  
    
   for (let i = 0; i < array.length; i++) {
      
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}
  
console.log(includes([1, 2, 3, 4, 5], 17));