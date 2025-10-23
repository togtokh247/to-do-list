let arr = [-3, 5, -1, -7, -9, 2];
let positives = [];
let negatives = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 0) {
    negatives.push(arr[i]); 
  } else {
    positives.push(arr[i]); 
  }
}

let result = positives.concat(negatives);

console.log(result);
