// problem statement you are given an input array and you need to return another array with the element of the original array * 2;
// function by2(arr) {
//     const newArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] * 2;
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }


// input = [1,2,3,4,5];
// output = by2(input);
// console.log(output); // [2, 4, 6, 8, 10]

// via using map you can do the same thing with just creatina a transform function and passing it to map function

function transform(n){
    return n*2;
}

input = [1,2,3,4,5];
output = input.map(transform);
console.log(output); // [2, 4, 6, 8, 10]