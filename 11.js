let arr = [1, 2, 2, 3, 4, 4, 6];
let unique = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] != arr[i - 1] + 1) {
    unique = (arr[i]) - 1;
  }
}

console.log(unique); 

