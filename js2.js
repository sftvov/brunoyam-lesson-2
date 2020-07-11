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

// Общая информаци по массивам
// ---------------------

// let numArray = [1, 2, 3];
// let secondArray = [];

// for (let element of numArray) {
//   x = element * element;
//   secondArray.push(x);
// }

// console.log(secondArray);

// Создали массив квадратов другого массива
// ------------------

// let newArray = [1, 2, 3, 4, 1234];
// let sum = 0;
// let pr = 1;

// for (el of newArray) {
//   sum += el;
//   pr *= el;
// }

// console.log(sum, pr);

// подсчитали сумму и произведение массива
// -------------------------

// if (!localStorage.getItem("exist")) {
//   alert("hello");
//   localStorage.setItem("exist", "1");
// }

// Выводить приветствие при первом запуске!
// --------------------------------------

// let visit = localStorage.getItem("numberOfVisit");

// if (visit) {
//   visit++;
//   localStorage.setItem("numberOfVisit", visit);
// } else {
//   visit = 1;
//   localStorage.setItem("numberOfVisit", 1);
// }

// if (visit == 1 || visit == 3) {
//   alert("hello");
// }

// Выводить приветствие при первом и третьем входе на сайт!
// --------------------------------------

let simpleNumbers = [];

for (let i=1; i<=1000; i++) {
  let a = 0;
  for (let c=1; c<=1000; c++) {
    let x = i % c;
    if (x==0) a++;    
  }
  if (a<=2) simpleNumbers.push(i);
}

console.log(simpleNumbers);

// Нашли массив простых чисел
// --------------------------------------