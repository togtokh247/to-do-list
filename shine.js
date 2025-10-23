const today = new Date();
const birthday = new Date("2005-07-12");

const ms = today.getTime();

const ms2 = birthday.getTime();
const year = (ms - ms2) / (1000 * 60 * 60 * 24 * 365);
console.log(year);