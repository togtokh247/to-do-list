let arr = [1, 2, 3, 2, 4, 2];
let target = 2;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) count++;
}
console.log(count);
