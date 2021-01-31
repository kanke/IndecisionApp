//ES5
function square(x){
   return x * x;
}
 // const square = function(x){
 //     return x * x;
 // }

//ES6
// const squareArrow = (x) => {
//     return x * x;
// }

//Arrow function Expression syntax
const squareArrow = (x) => x * x;

console.log(square(8));
console.log(squareArrow(9));

const getFirstname = (name) => {
    return name.split(' ')[0]
}
console.log(getFirstname('Kanke Ishaku'));

const getFirstname2 = (name) => name.split(' ')[0];
console.log(getFirstname2('Kanke Ishaku'));
