let arr = [5, 8, 3, 9];
let num = 5;
let exists = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === num) {
    exists = true;
  }
}
console.log(exists); 
