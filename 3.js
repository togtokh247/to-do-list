function guraw(a, b, c) {
  if (a > b) {
    if (a > c) {
      return a;
    } else {
      return c;
    }
  } else {
    if (b > c) {
      return b;
    } else {
      return c;
    }
  }
}
const result = guraw(30, 8, 33);
console.log(result);
 
