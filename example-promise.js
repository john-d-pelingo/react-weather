// // Callbacks
// // temp is temperature
// function getTempCallback(location, callback) {
//     // Success case
//     callback(undefined, 78);
//
//     // Error case
//     callback('City not found');
//
// }
//
// getTempCallback('Philadelphia', function (error, temp) {
//     if (error) {
//         // Things didn't went well
//         console.log('error', error);
//     } else {
//         // Things went well
//         console.log('success', error);
//     }
// });
//
// // Problems of callbacks
// // One callback function that is responsible for differentiating between error and success cases
// // We have to write code manually every time to determine when things went right or when things went wrong
// // Called callback twice
//
// // Promises
// function getTempPromise(location) {
//     return new Promise(function (resolve, reject) {
//         // Fake the delay
//         setTimeout(function () {
//             // If things go well
//             resolve(79);
//             reject('City not found');
//         }, 1000);
//     });
// }
//
// // We'll receive 2 separate functions but will be executed at most 1 time
// getTempPromise('Philadelphia').then(
//     function (temperature) {
//         // Success case
//         console.log('promise success', temperature);
//     }, function (error) {
//         // Error case
//         console.log('promise fail', error);
//     }
// );

// Check if something is something
// if (typeof someNumber === 'number') {
//
// }

function addPromise(a, b) {
    "use strict";
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('Both parameters should be numbers!');
        }
    });
}

addPromise(2, 2, 3).then(
    function (sum) {
        console.log('promise success', sum);
    },
    function (error) {
        console.log('promise fail', error);
    }
);
