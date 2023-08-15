console.log("hello");

const age = 19;

let gender = "F";

console.log("Hello there, I am " + age + " years old, and I am a " + gender);
console.log(`Hello there, I am ${age} years old, and I am a ${gender}`);

let array1 = [66, "M", "Tope"];
let namesOfClubs = ["chelsea", "Man u"];
//index of an arr starts at 0
//for us to get 'chelsea' in the array above it'll be
//nameOfClubs[0]
//You can get the number of items in an string, arr
//using .length
//namesOfClubs.length => 2
namesOfClubs.push("Barcelona");
//console.log(namesOfClubs) => chelsea, Man u, Barcelona
//namesOfClubs.length => 3

let obj1 = {
  firstName: "Tope",
  age: 10,
  gender: "Male",
};
//Objects are key, value pairs.
// in the obj above `age` is the key, and `10` is the value
//If we want to get 'Male' obj1.gender
// Object.keys(obj1)
// (3) ['firstName', 'age', 'gender']
// Object.values(obj1)
// (3) ['Tope', 10, 'Male']
//Object.keys(obj1).length => 3
// console.log(Object.keys(obj1).length);

// if(exp == true){
//     this will run
// }else if(exp){
//     this will run only if the first exp wasn't true
// }else{
//     run only if all other exps were false
// }

if (age > 17) {
  console.log("Congrats you are an adult");
} else {
  console.log(`You will be an adult in ${18 - age} year(s)`);
}

if (age > 18) {
  console.log("Congrats you've been an adult");
} else if (age == 18) {
  console.log("Congrats you are now an adult");
} else {
  const yearsRemaining = 18 - age;
  if (yearsRemaining == 1) {
    console.log(`You will be an adult in ${18 - age} year`);
  } else {
    console.log(`You will be an adult in ${18 - age} years`);
  }
}

if (age > 17 && gender == "M") {
  //and = &&
  console.log("go to war");
} else if (age < 18 || gender == "F") {
  //or  = ||
  console.log("pray for your fighters");
}

function createSpace() {
  console.log("%c ", "padding: 30px 0;");
}

createSpace();

for (var i = 0; i < 10; i++) {
  console.log(i);
}

createSpace();

for (var i = -7; i < 10; i = i + 2) {
  console.log(i);
}

createSpace();

for (var i = 0; i < namesOfClubs.length; i++) {
  console.log(`${namesOfClubs[i]} is the ${i+1} position`);
}

createSpace();

for(const club of namesOfClubs){
    let i = namesOfClubs.indexOf(club)
    console.log(`${namesOfClubs[i]} is the ${i+1} position`);
}

createSpace();

createSpace();
