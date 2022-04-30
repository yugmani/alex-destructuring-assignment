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
