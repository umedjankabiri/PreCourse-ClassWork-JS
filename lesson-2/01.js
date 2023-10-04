function showMe() {
  console.log("Hello!");
}
showMe();
function showMeNew(value) {
  console.log(value);
}
showMeNew("Hello!");
function showMessage2(val = "Hello!") {
  console.log(val);
}
showMessage2();
function showMessage3(val = "Hello!") {
  console.log(val);
}
showMessage3("By!");
// Стрелочная функция
const newSum = (a, b) => {
  console.log(a + b);
};
newSum(3, 4);
const newSum2 = (a, b) => console.log(a + b);
// ​Напишите функцию isPositive, которая принимает один аргумент - число, и возвращает true, если число положительное, и false в противном случае.
// Используйте условный оператор if и стрелочную функцию.
const isPositive = (someNumber) => {
  if (someNumber > 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isPositive(5));
const isPositive2 = (someNumber2) => (someNumber2 > 0 ? true : false);
console.log(isPositive2(-2));
// Перепеши  (заверни) наше старое задание создав функцию giveMeResult(), в которую будешь передавать день недели:
function giveMeResult(dayOfWeek) {
  if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
    dayOfWeek = "dayOff";
  } else {
    dayOfWeek = "weekday";
  }
  switch (dayOfWeek) {
    case "weekday":
      console.log("Будний день");
      break;
    case "dayOff":
      console.log("Выходной день");
      break;
    default:
      console.log("Некорректное значение дня недели");
  }
}
giveMeResult("Monday");
// Вывод функции giveMeResult с помощью стрелочной функции
const giveMeResult2 = (dayOfWeek) => {
  if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
    dayOfWeek = "dayOff";
  } else {
    dayOfWeek = "weekday";
  }
  switch (dayOfWeek) {
    case "weekday":
      console.log("Будний день");
      break;
    case "dayOff":
      console.log("Выходной день");
      break;
    default:
      console.log("Некорректное значение дня недели");
  }
};
giveMeResult2("Saturday");
