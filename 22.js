const arr = [5, 8, 3, 9, 19, 89];
let Max = arr[0];
let secondMax = arr[0]; 

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > Max) {
    secondMax = Max;   
    Max = arr[i];      
  } else if (arr[i] > secondMax && arr[i] < Max) {
    secondMax = arr[i]; 
  }
}

console.log(secondMax); 
