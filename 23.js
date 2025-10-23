let arr = [1, 2, 3, 4, 5];
let k = 4;
let rotate = []

for (let i = 0; i < arr.length; i++) {
    rotate[(i + k) % arr.length] = arr[i]
}
console.log(rotate); 