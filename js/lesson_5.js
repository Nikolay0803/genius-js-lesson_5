// function createNewSum(n) {
//   return function () {
//     console.log(10 * n);
//   };
// }
// const calc = createNewSum(5);
// calc();

// function createNewNumber(n) {
//   return function (num) {
//     return n + num;
//   };
// }

// const addFive = createNewNumber(5);
// console.log(addFive(10))

// function createUrl(domain) {
//   return function (url) {
//     return `http://${url}.${domain}`
//   }
// }

// const comUrl = createUrl("com");
// console.log(comUrl("google"))
// console.log(comUrl("fb"))

// function hello() {
//   console.log('hello', this)
// }

// hello();

// const user = {
//   name: "Ivan",
//   city: "Odesa",
//   sayHello: hello,
// };
// user.sayHello()

// function abc() {
//   console.log("В функції");
//   console.log(this);
// }
// abc();
// document.querySelector('p').onclick = abc;

// function changeColor() {
//   this.style.background = 'green';
// }

// document.querySelector('div').onclick = changeColor;

// let user = document.querySelectorAll('div');
// user.forEach(function (element) {
//   element.onclick = changeColor;
// })

// const showList = () => {
//   console.log(this)
// };
// showList();

// const list = {
//   names: ["Ann", "Olga", "Nata"],
//   showList: showList,
// }

// list.showList();

// function hello() {
//   console.log(this)
// }

// const user = {
//   name: 'Ivan',
//   age: 30,
//   helo: hello,
//   sayHelloWindow: hello.bind(window),
//   info: function (city) {
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`City is ${city}`);
//   }
// }

// const Ann = {
//   name: "Anna",
//   age: 23,
// }

// const Nata = {
//   name: "Natalia",
//   age: 50,
// }

// user.info.bind(Ann)("Kyiv");
// const nataInfo = user.info.bind(Nata, "Odesa");
// nataInfo()

// const userInfo = {
//   name: "name",
//   age: 98,
//   logInfo: function (job) {
//     console.group(`${name} info:`);
//     console.log(`Name is : ${this.name}`);
//     console.log(`Age is : ${this.age}`);
//     console.log(`Job is : ${job}`);
//     console.groupEnd();
//   },
// };

// const Vano = {
//   name: "Ivan",
//   age:45,
// }

// userInfo.logInfo.call(Vano, "developer")

// const showUserInfo = {
//   name: name,
//   age: 87,
//   logInfo: function (job,city) {
//     console.group(`${name} info:`);
//     console.log(`Name is : ${this.name}`);
//     console.log(`Age is : ${this.age}`);
//     console.log(`Job is : ${job}`);
//     console.log(`City is : ${city}`);
//     console.groupEnd();
//   },
// }

// const Vano = {
//   name: "Ivan",
//   age:45,
// }

// showUserInfo.logInfo.apply(Vano, ["developer", "Lviv"]);

// const message = function (name, stars) {
//   console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}`)
// }

// const Bukovel = { hotel: "Bukovel" };
// const Turis = { hotel: "Turis" };

// message.call(Bukovel, "Ivan", "5");
// message.call(Turis, "Ivan", "3");

// message.apply(Bukovel, ["Ivan", "5"]);
// message.apply(Turis, ["Ivan", "3"]);

// message.bind(Bukovel, "Ivan", "5")();
// message.bind(Turis, "Ivan", "3")();

// const cart = {
//   showItems() {
//     console.log("В корзині:", this.items);
//   }
// }

// const woman = {
//   items:["Сукня, туфлі"]
// }
// const man = {
//   items:["Костюм, рубашка"]
// }
// const child = {
//   items:["Майка, шорти"]
// }

// document
//   .querySelector("#wom")
//   .addEventListener("click", cart.showItems.bind(woman));

// document
//   .querySelector("#man")
//   .addEventListener("click", cart.showItems.bind(man));

// document
//   .querySelector("#kid")
//   .addEventListener("click", cart.showItems.bind(child));

// const infoCar = {
//   name: "BMW",
//   model: "M7",
//   color: "white",
//   showInfo: function () {
//     console.log(
//       "Car: " + this.name + " model: " + this.model + " color: " + this.color
//     );
//   },
// };

// car2 = {
//   name: "Opel",
//   model: "Vectra",
//   color: "red",
// };

// infoCar.showInfo.bind(car2)();
// infoCar.showInfo.call(car2);
// infoCar.showInfo.apply(car2);

// Домашнє завдання
// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const studentInfo = {
//   name: "Vlad",
//   major: "developer",
//   averageBal: 8.7,
//   missedClass: 41,
//   showInfo: function () {
//     console.log(
//       "Name: " +
//         this.name +
//         " major: " +
//         this.major +
//         " averageBals: " +
//         this.averageBal +
//         " missedClasses: " +
//         this.missedClass

//     );
//   },
// };

// student2 = {
//   name: "Ruslan",
//   major: "doctor",
//   averageBal: 9.2,
//   missedClass: 21,
// };

// student3 = {
//   name: "Igor",
//   major: "lawyer",
//   averageBal: 9.5,
//   missedClass: 27,
// };

// student4 = {
//   name: "Bogdan",
//   major: "teacher",
//   averageBal: 7.1,
//   missedClass: 31,
// };
// studentInfo.showInfo();
// studentInfo.showInfo.bind(student2)();
// studentInfo.showInfo.call(student3);
// studentInfo.showInfo.apply(student4);

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке
// const infoHtml = function () {
//   alert(
//     "HTML — стандартизована мова розмітки документів для перегляду вебсторінок у браузері."
//   );
// };
// const infoCss = function () {
//   alert(
//     "CSS — це спеціальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду."
//   );
// };

// document.getElementById("html").addEventListener("click", infoHtml);
// document.getElementById("css").addEventListener("click", infoCss);
// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// const shop = function (name, total, price) {
//   return `Товар: ${name} Вартість: ${total * price}грн`;
// };
// console.log(shop("banana", 30, 4.5));
// console.log(shop("cherry", 58, 1.3));
// console.log(shop("orange", 89, 3.4));
