function compare() {
  let a = 123;
  let b = "123";
  console.log(typeof a);
  console.log(typeof b);
}
// Создай переменную myVariable и условие if else, по которому консолит:
// "Переменная содержит значение null" или "Переменная содержит [А СЮДА ВСТАВЬ ЗНАЧЕНИЕ myVariable ]"
compare();
let myVariable;
if (myVariable === null) {
  console.log("myVariable содержит null");
} else if (myVariable === undefined) {
  console.log("myVariable is undefined");
} else {
  console.log("myVariable is " + myVariable);
}
// Создай переменную myVariable и условие if else, по которому консолит:
// "Значение переменной не было присвоено" или "Значение переменной было присвоено".
function check() {
  myVariable = 5;
  if (!myVariable) console.log("Значение переменной не было присвоено");
  else console.log("Значение переменной было присвоено");
}
check();
