const color = "red";
if (color === "red") {
  console.log("ok!");
} else {
  console.log("give me my color!");
}
if (color === "red") {
  console.log("ok!");
} else if (color === "black") {
  console.log("NOT ok!");
} else {
  console.log("give me my color!");
}
const age = 19;
age > 18 ? console.log(true) : console.log(false);
// Напишите код, который сравнивает две переменные x и y, которые равны 42 (номер и строка), и выводит результаты сравнения на экран в следующем формате:
// • Если x и y равны по значению и типу, выведите сообщение "x и y равны по значению и типу"
// • Если x и y равны только по значению, выведите сообщение "x и y равны по значению, но не по типу"
// • Если x и y не равны ни по значению, ни по типу, выведите сообщение "x и y не равны ни по значению, ни по типу"
function compare() {
  let x = 42;
  let y = "42";
  if (x === y) console.log("X и Y равны по значению и типу");
  else if (x == y) console.log("X и Y равны по значению но не по типу");
  else console.log("X и Y не равны ни по значению ни по типу");
}
compare();
