// function sum(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }
// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }
    
// function displayResultPassive(data){
//     console.log("Sum's result is : " + data);
// }


function sum(num1, num2, func2Call) {
    let result = num1 + num2;
    func2Call(result);
}
function displayResult(data) {
    console.log("Result of the sum is : " + data);
}
    
function displayResultPassive(data){
    console.log("Sum's result is : " + data);
}

sum(10, 20, displayResult);