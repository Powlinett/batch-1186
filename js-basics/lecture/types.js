// TYPES

const string = 'hello';

console.log(typeof string); // 'string'

const number = Number.parseInt('42', 10);
const numberAsString = (42).toString();

console.log(number, typeof number); // 42, number
console.log(numberAsString, typeof numberAsString); // '42', string


// ASSIGNMENTS

let counter = 1;
counter = counter + 1; // counter += 1;
console.log(counter);


// STRING MANIPULATION

const firstName = 'John';

const firstLetter = firstName[0];
console.log(firstLetter);
console.log(firstName.substring(1)); // 'oh'
console.log(firstName.toUpperCase()); // JOHN
console.log(firstName.toLowerCase()); // john


const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const months = monthString.split(",");
console.log(months);


// INTERPOLATION

const beatleFirstName = "Ringo";
const beatleLastName = "Starr";

const beatleMessage = `${beatleFirstName} ${beatleLastName} is a drummer`;
console.log(beatleMessage);


// ARRAY

const fruits = ['apple', 'kiwi'];

// CREATE
fruits.push('banana');
// READ
const kiwi = fruits[1];
// UPDATE
fruits[1] = 'orange';
// DELETE
fruits.splice(1,1);

// ITERATION

const beatles = ["paul", "john", "ringo", "george"];

beatles.forEach((beatle) => {
  console.log(beatle.toUpperCase());
}); // returns undefined

const result = beatles.map((beatle) => {
  return beatle.toUpperCase();
}); // returns array copy
console.log(result);


// COMPARISON

console.log(42 === 42); // true
console.log('42' === 42); // false
console.log('42' == 42); // true


// OBJECT

const student = {
  firstName: "Boris",
  lastName: "Paillard"
};

// CREATE
student['age'] = 24; // OR student.age = 42;

// READ
console.log(student.firstName); // 'Boris'

// UPDATE
student.firstName = 'Romain';

// DELETE
delete student.age; // OR student.age = undefined; (doesn't remove key)



// FUNCTIONS

const square = (x) => {
  return x * x;
};

console.log(square(2));


const message = 'coucou Fanny!';

const capitalize = (string) => {
  // Get first letter
  // UpperCase it
  // Get the rest of the word
  // return the whole capitalized string

  const firstLetter = string[0].toUpperCase();
  const restOfString = string.substring(1);

  return `${firstLetter}${restOfString}`;
};


console.log(capitalize(message));
