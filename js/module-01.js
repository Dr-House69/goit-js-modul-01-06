/* task-05 */

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`

// console.log(message);

/* task-06 */

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// console.log(message);

/*  task-07 */

// function sayHi() {
//     console.log("Hello, this is my first function!");

// }
// sayHi();

/* task-08 */

// function add(a, b, c) {
//     console.log(`Addition result equals ${a+b+c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

/* task-09 */

// function add(a, b, c) {

//     return a + b + c;

// }

//     add(2, 5, 8); 

//     console.log(add(15, 27, 10));
//     console.log(add(10, 20, 30));
//     console.log(add(5, 10, 15));

/*  task-10 */

// function makeMessage (name, price) {

// const message = `You picked ${name}, price per item is ${price} credits`;

//  return message;
// }
// console.log(makeMessage('Radar', 6150));

/*  task-11 */

// function calculateTotalPrice (orderedQuantity, pricePerItem) {

//     const totalPrice = orderedQuantity * pricePerItem;


//   return totalPrice;
// };
// console.log(calculateTotalPrice(3, 400));

/* task-12 */

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

//     const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//     const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;



//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));

/* task-13 */

// function isAdult(age) {

//   const passed = age >= 18;

//   return passed;
// }
// console.log(isAdult(51));

/* task-14 */

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';

//   const isMatch = password === 'jqueryismyjam';

//   return isMatch;
// }
// console.log(isValidPassword('mangodab3st'));

/* task-15 */


// function checkAge(age) {
//   let message;

//   if ( age >= 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }
// console.log(checkAge(17));

/* task-16 */

// function checkStorage(available, ordered) {
//   let message;
//   if (available >= ordered) {
//     message = `Order is processed, our manager will contact you.`;
    
//   } else {
//     message = `Not enough goods in stock!`;
//   }
//   return message;
// }
// console.log(checkStorage(150, 151));

/* task-17 */

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// console.log(a, b, c, d);

/* task-18 */

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = `Insufficient funds!`
    
//   } else {
//     customerCredits -= totalPrice
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`
    
//   }
  
//   return message;
// }

// console.log(makeTransaction(500, 10, 5000));

/* task-19 */

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if ( password === null) { 
//     message =  'Canceled by user!';
//   } else if ( password === ADMIN_PASSWORD) { 
//     message = 'Welcome!';
//   } else { 
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// console.log(checkPassword('jqueryismyjamGoIT'));

/* task-20 */

// function checkStorage(available, ordered) {
//   let message;
//   if ( ordered === 0) {
//     message = `There are no products in the order!`;
    
//   } else if (ordered > available) {
//     message = `Your order is too large, there are not enough items in stock!`;
    
//   } else {
//     message = `The order is accepted, our manager will contact you`;

//   }
//   return message;
// }
// console.log(checkStorage(10, 0));

/* task-21 */

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; 

//   return isInRange;
// }
// console.log( isNumberInRange(10, 30, 17));

/* task-22 */

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip';

//   return canAccessContent;
// }
// console.log( checkIfCanAccessContent('starter'));

/* task-23 */

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; 

//   return isNotInRange;
// }
// console.log( isNumberNotInRange(10, 30, 17));

/* task-24 */

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
 
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
  
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
  
//   } else if (totalSpent >= 5000  && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
  
// } else {
//     totalSpent < 5000;
//     discount = BASE_DISCOUNT;
// }
  
//   return discount;
// }
// console.log( getDiscount(46900));

/* task-25 */

// function checkStorage(available, ordered) {
//   let message;
   
//     message = ordered > available ? 'Not enough goods in stock!' : 'The order is accepted, our manager will contact you';
  
//   return message;
// }
// console.log( checkStorage(100, 100));

/* task-26 */

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
 
//  message = password === ADMIN_PASSWORD ? 'Access is allowed' : 'Access denied, wrong password!';
  
//   return message;
// }
// console.log( checkPassword('jqueryismyjam'));

/* task-27 */

// function getSubscriptionPrice(type) {
//   let price;
  
//  switch (type) { 
//     case 'starter': 
//       price = 0;
//       break;

//     case 'professional': 
//       price = 20; 
//       break;

//     case 'organization': 
//       price = 50; 
//       break;
//   }

  
//   return price;
// }
// console.log( getSubscriptionPrice('professional'));

/* task-28 */

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;
//     switch (password) {

//         case null:
//             message = 'Canceled by user!';            
//             break;
        
//         case ADMIN_PASSWORD:
//             message = 'Welcome!';
//             break;
          
//         default:
//             message = 'Access denied, wrong password!';
            
//     }
    
//     return message;
// }
// console.log( checkPassword('jqueryismyjamGoIT'));