let arr = [1, 2, 2, 3, 1, 4, 3];
let unique = [];

for (let i = 0; i < arr.length; i++) {
  let a = false;
  for (let j = 0; j < unique.length; j++) {
    if (arr[i] === unique[j]) {
      a = true;
    }
  }
  if (!a) {
    unique.push(arr[i]);
  }
}
console.log(unique); 
