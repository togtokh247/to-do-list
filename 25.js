let arr = [6, 3, 4, 8]; 

function factorial(n) {
  let a = 1;
  for (let i = 1; i <= n; i++) 
  a *= i;
  return a;
}

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += factorial(arr[i]);
}
console.log(sum);
