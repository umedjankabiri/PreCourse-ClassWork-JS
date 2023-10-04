function moreUsers() {
  const user = {
    name: "Igor",
    age: 30,
  };
  console.log(user.name);
  user.name = "Nastya";
  console.log(user.name);
  // const защищает от изменений только саму переменную user, а не её содержимое.
  // const выдаст ошибку только если мы присвоим переменной другое значение: user=....
  user.prof = "proger";
  console.log(user);
  delete user.prof;
  console.log(user);
  console.log(user["name"]); //обратиться можно через [но нужны ""]
  //копирование Объектов
  let user1 = { name: "Igor" };
  //let user2 = user;
  let user2 = { ...user };
  user.name = "Nastya";
  console.log(user1);
  console.log(user2);
  let prep = {
    name: "Igor",
    sizes: {
      height: 177,
      weight: 80,
    },
  };
  //let prep2 = { ...prep };
  let prep2 = { ...prep, sizes: { ...prep.sizes } };
  prep.name = "Nastya";
  prep.sizes.weight = 50;
  console.log(prep);
  console.log(prep2);
  //Сборка мусора - удаление ссылки-приводит к удалению объекта
}
moreUsers();
// Напишите функцию copyPrep, которая принимает один аргумент - объект prep,
// и возвращает новый объект, который является копией исходного объекта prep,
// в котором все тоже самое, но также появилось IsMarried: true.
// Используйте иммутабельный подход для создания копии объекта, включая его вложенные свойства.
function moreUsers1() {
  let prep = {
    name: "Igor",
    sizes: {
      height: 177,
      weight: 80,
    },
  };
  let copyPrep = { ...prep, IsMarried: true };
  console.log(prep);
  console.log(copyPrep);
}
moreUsers1();
