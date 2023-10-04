console.log(1 + 2);
console.log(5 % 2); // 1, остаток от деления 5 на 2);
console.log(2 ** 4); // 2⁴ = 16
// Инкремент / декремент
let counter = 2;
console.log(counter + 1); // 3
console.log(counter++); // 2
let newCounter = 2;
console.log(++newCounter); // 3
let newCounter2 = 100;
console.log(newCounter2--); // 100
console.log(--newCounter2); // 98
//Сокращённая арифметика с присваиванием
let n = 2;
n = n + 5;
console.log(n); //7
n += 5;
console.log(n); //12
// Напишите код, который проверяет, является ли число x (присвой ему 42) четным, и выводит результат проверки на экран в следующем формате:
// • Если x четное, выведите сообщение "Число x четное"
// • Если x нечетное, выведите сообщение "Число x нечетное"
function EvenOrOdd() {
  let x = 42;
  x % 2 === 0
    ? console.log("Число ", x, " четное")
    : console.log("Число ", x, " нечетное");
}
EvenOrOdd();
// При помощи сокращенной арифметики получи  total равный 195
function abbreviated() {
  let count1 = 10;
  let count2 = 20;
  let total = 0;

  total = (count1 + 3) * (count2 - 5);
  console.log(total);
}
abbreviated();
