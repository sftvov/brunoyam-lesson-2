// let animalArray = ["dog", "cat"];
// let firstAnimal = animalArray[0];
// let secondAnimal = animalArray[1];

// let emptyArray = [];
// emptyArray.push("my-string1");
// emptyArray.push("my-string2");
// emptyArray.push("my-string3");
// console.log(emptyArray);

// for (let i = 0; i < emptyArray.length; i = i + 1) {
//   console.log(emptyArray[i]);
//   console.log(i);
// }

// for (const element of emptyArray) {
//   console.log(element);
// }

// ---------------------

// let numArray = [1, 2, 3];
// let secondArray = [];

// for (let element of numArray) {
//   x = element * element;
//   secondArray.push(x);
// }

// console.log(secondArray);

// ------------------

let newArray = [1, 2, 3, 4, 1234];
let sum = 0;
let pr = 1;

for (el of newArray) {
  sum += el;
  pr *= el;
}

console.log(sum, pr);

// -------------------------
