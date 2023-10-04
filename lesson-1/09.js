switch (color) {
  case "red": {
    console.log("ok!");
    break;
  }
  case "black": {
    console.log("NOT ok!");
    break;
  }
  default:
    console.log("give me my color!");
}
// Дана переменная dayOfWeek, которая содержит день недели на английском языке. Используя switch,===,=,||,if else напишите код,
// который выводит на экран сообщение, соответствующее дню недели:
// Если dayOfWeek равна "Monday", "Tuesday", "Wednesday", "Thursday" или "Friday", выведите на экран сообщение "Будний день".
// Если dayOfWeek равна "Saturday" или "Sunday", выведите на экран сообщение "Выходной день".
// Если значение переменной dayOfWeek не соответствует ни одному из вышеперечисленных случаев, выведите на экран сообщение "Некорректное значение дня недели".
function week() {
  let dayOfWeek = "Monday";
  switch (dayOfWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      console.log("Будний день");
      break;
    case ("Saturday", "Sunday"):
      console.log("Выходной день");
      break;
    default:
      console.log("Некорректное значение дня недели");
  }
}
