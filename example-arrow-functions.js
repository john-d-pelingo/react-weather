// Arrow functions
// var names = ['Ep\'kazi', 'Kerigas'];
//
// names.forEach(function (name) {
//     console.log('forEach', name);
// });
//
// // Arrow functions are good for anonymous functions
// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log('arrowFuncConcise', name))
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('John'));
//
// // Anonymous functions have a this binding while arrow functions take their parent's this binding.
//
// // Explanation
// var person = {
//     name : 'John',
//     greet: function () {
//         // // Anonymous function example
//         // names.forEach(function (name) {
//         //     // this.name doesn't refer to John
//         //     console.log(this.name + ' says hi to ' + name);
//         // });
//         // Arrow function example
//         names.forEach((name) => {
//             // this.name refers to John
//             console.log(this.name + ' says hi to ' + name);
//         });
//     }
// };
//
// person.greet();

function add(a, b) {
    return a + b;
}

var add2 = (a, b) => {
    "use strict";
    return a + b;
};

var add3 = (a, b) => a + b;

console.log('Anonymous function: ' + add(1, 3));
console.log('Arrow function with brackets: ' + add2(1, 3));
console.log('Arrow functions without brackets: ' + add3(1, 3));