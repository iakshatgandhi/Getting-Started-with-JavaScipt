function calculateArithmatic(a, b, callback) {
  return callback(a, b);
}

function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}  
function mod(a, b) {
    return a % b;
}

const value = calculateArithmatic(10, 20, sum);
console.log(value);