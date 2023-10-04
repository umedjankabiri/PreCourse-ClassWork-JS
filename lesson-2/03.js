function Output() {
  let prof = "proger";
  let age = 18;
  if (prof === "proger" || age !== 18) {
    console.log("Success!");
  }
  if (prof === "proger" && age !== 18) {
    console.log("Success!!");
  }
}
Output();
// Напишите функцию isInRange, которая принимает один аргумент - число, и возвращает true,
// если число находится в диапазоне от 10 до 20 включительно или равно 0 или равно 100,
// и false в противном случае. Используйте логические операторы && и ||.
function isInRange(number) {
  if ((number >= 10 && number <= 20) || number == 0 || number == 100)
    return true;
  else return false;
}
console.log(isInRange(20));
const isInRange2 = (num) =>
  (num >= 10 && num <= 20) || num == 0 || num == 100 ? true : false;
console.log(isInRange(88));
