
// function bblSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < (arr.length - i - 1); j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     console.log(arr);
// }
// let arr = [234, 43, 55, 63, 5, 6, 235, 547];
// bblSort(arr);

// function selectionSort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         let minIndex = i

//         for (let j = i; j <)
//     }
// }


// const product = {
//     name: "beef",
//     price: 17000,
//     description: " $ ",
//     ingredients: "protien",
//     origin: {
//     country:  "mongolia",
//     }
// }
// console.log(product.origin.country)

// const fruits = ["apple", "banana", "grapes", "mango", "orange"];
// function filterItems(arr, query) {
//   return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
// }

// console.log(filterItems(fruits, "ap")); 
// console.log(filterItems(fruits, "an"));

// const str = "Hello olleH"

// const reverseString = (str) => {
    // return str.split("").reverse().join("")
// };
// console.log(reverseString(str));


// const Palindrome = (str) => {
//     return str === str.split("").reverse().join("")
// };
// console.log(Palindrome("madam"))
// console.log(Palindrome("hello"))





function longestWord(ogvvlber) {
  let str = ogvvlber.split(" ");
  let longest = 0;
  let word = null;

  for (let i = 0; i < str.length; i++) { 
    if (longest < str[i].length) {
      longest = str[i].length;
      word = str[i];
    }
  }

  return word;
}

// console.log(longestWord("I love programming"));


// const name = { firstname: "bat", lastname: "bold" };

// const formatted =
//  name . lastname.charAt(0).toUpperCase() + '.' +
//  name . firstname.charAt(0).toUpperCase() + name. firstname.slice(1).toLowerCase();
// console.log(formatted);