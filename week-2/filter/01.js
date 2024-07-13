// function even(arr){
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// let input = [1,2,3,4,5];
// let output = even(input);
// console.log(output); // [2, 4, 6, 8, 10]


// same logic with the filter function

function even(n){
    return n%2 === 0;
}

let input = [1,2,3,4,5];
let output = input.filter(even);
console.log(output); // [2, 4]