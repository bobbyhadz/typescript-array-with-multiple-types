export {};

// EXAMPLE 1 - Define an Array with Multiple types in TypeScript

const arr: (string | number)[] = ['a', 'b', 1, 2];

console.log(arr);

// ---------------------------------------------------

// // EXAMPLE 2 - Defining an array that contains objects of multiple types

// type Bird = {
//   canFly: boolean;
// };

// type Dog = {
//   canSwim: boolean;
// };

// const bird: Bird = {
//   canFly: true,
// };

// const dog: Dog = {
//   canSwim: false,
// };

// const arr1: (Bird | Dog)[] = [bird, dog];

// if ('canFly' in arr1[0]) {
//   console.log(arr1[0].canFly); // 👉️ true
// } else {
//   console.log(arr1[0].canSwim);
// }

// ---------------------------------------------------

// // EXAMPLE 3 - Define an Array with Multiple types of length N

// const arr: [string, number] = ['x', 100];

// console.log(arr);
