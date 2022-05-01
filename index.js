// Import stylesheets
import './style.css';

// -------------------------------------------------------
// **************** Destructuring Arrays *****************
// -------------------------------------------------------

//create an Arrays
const array1 = [1, 2, 3, 4, 5];

//use Destructuring to assign some/all values from given array to new variables
const [first, second, third] = array1;

console.log(first); //1;
console.log(second); //2
console.log(third); //3

// Using different order
// -----------------------------------------------

const [itemThree, itemOne, itemTwo] = array1;

console.log(itemOne); // Output: 1
console.log(itemTwo); // Output: 2
console.log(itemThree); // Output: 3

//Destructuring also works when you want to declare variables and assign the later.
// -----------------------------------------------

const array2 = [0, 1, 2];

//Declare empty variables
let var1, var2, var3;

//assign variables later
[var1, var2, var3] = array2;

console.log(var1); //0;
console.log(var2); //1
console.log(var3); //2

//Destructuring allows you to assign that doesn't exist in the array
// -----------------------------------------------

const array3 = ['Joe', 'Victoria'];

const [friend1, friend2, friend3, friend4] = array3;
console.log(friend1); //Joe
console.log(friend2); //Victoria

console.log(friend3); //undefined -- ?
console.log(friend4); //undefined -- ?

// Skipping values in arrays
// -----------------------------------------------

//you can assign only some values from an array and skip those you don’t care about. You can do this by leaving the place for variable name in a specific position empty.
const myCourses = ['HTML', 'CSS', 'Python', 'Perl', 'C++'];

//Assigning first, third and fifth items of an array
const [course1, , course3, , course5] = myCourses;

console.log(course1); //HTML
// console.log(course2); //Error: course2 is not defined
console.log(course3); //Python
console.log(course5); //C++

//Assigning second and fourth items of an array
const [, course2, , course4] = myCourses;

console.log(course2); //CSS
console.log(course4); //Perl

//Arrays, destructuring and rest operator
// -----------------------------------------------

//Destructuring with arrays using rest operator we assign individual items to some variables and assign any remaining items to another variable.

const [beginnerCourse1, beginnerCourse2, ...advancedCourses] = myCourses;

console.log(beginnerCourse1); //HTML
console.log(beginnerCourse2); //CSS
console.log(advancedCourses); //["Python", "Perl", "C++"]

// const [...beginnerCourses, lastCourse] = myCourses;
//Error: Rest element must be last element

//Rest operator for empty remaining values
const fullName = ['Joe', 'Biden'];

const [firstName, lastName, ...otherName] = fullName;
console.log(otherName); //[]

//Swapping Values
// -----------------------------------------------

let a = 'I am B.';
let b = 'I am A.';

//Traditional way of swapping values;
let c = a;
a = b;
b = c;
console.log('a: ', a); //a: I am A.
console.log('b: ', b); //b: I am B.

//Destructuring to swapping values
[a, b] = [b, a];

console.log('a: ', a); //a: I am B.
console.log('b: ', b); //b: I am A.

// Swapping values quickly in an array itself by destructuring
const courses = ['HTML', 'CSS', 'JavaScript'];

[courses[0], courses[1], courses[2]] = [courses[2], courses[0], courses[1]];

console.log(courses); //["JavaScript", "HTML", "CSS"]

// Destructuring Nested Arrays
// -----------------------------------------------

// destructuring to get some value from nested array, you have to follow the structure of the original array.

const arr3 = ['HTML', ['CSS', 'TailWind', ['JavaScript', 'Python']]];

//Ignore the array items that you don't need
const [, [, , [, favoriteCourse]]] = arr3;

console.log(favoriteCourse); //Python

// Destructing Arrays with default values
// -----------------------------------------------

//When you try to extract value that doesn’t exist in an array it the value you will get is 'undefined'.
//You can provide default value for the variables that you want to assign with destructuring.

let users = ['Tony', 'Gary'];

let [user1, user2, user3 = 'Administrator'] = users;

console.log(user3); //Administrator

// --------------------------------------------------------
// ****************** Destructing Objects *****************
// --------------------------------------------------------

const myUser = {
  name: 'Stuart',
  age: 37,
  sex: 'male',
};

// Traditional ways to access property values of an object
const userSex = myUser.sex;
const userName = myUser.name;

console.log(userName); //Stuart
console.log(userSex); //male

// Destructing method in an object
const { age, name, grade } = myUser;

//accessing existing properties of an object
console.log(age); //37
console.log(name); //Stuart

//accessing non-existing property 'grade'
console.log(grade); //undefined -->variable assigned to non-existing property

