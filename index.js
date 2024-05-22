// console.group('1 task');
// const rectangleWhidth = prompt('Напишіть довжину прямокутника');
// const rectangleHeigth = prompt('Напишіть висоту прямокутника');
// if(confirm('Ви хочете розрахувати площу та периметр прямокутника?')){
//   alert('Площа прямокутника = ' + rectangleWhidth * rectangleHeigth + '\nПериметр прямокутника = ' + (Number(rectangleWhidth) + Number(rectangleHeigth)) * 2)

// }else{
//   alert(':(');
// };
// console.groupEnd();

// console.group("2 task");

// const PI = Math.PI;
// const radiusСircle = prompt("Введіть радіус кола");
// const areaСircle = PI * radiusСircle * radiusСircle;
// const widthСircle = PI * radiusСircle + PI * radiusСircle;

// if (confirm("Розщитать площу та довжину кола?")) {
//   alert(
//     "Якщо радіус кола = " +
//       radiusСircle +
//       " то " +
//       "\nПлоща кола = " +
//       areaСircle +
//       "\nДовжина кола дорівнює = " +
//       widthСircle
//   );
// } else {
// alert(':(');
// };

// console.groupEnd();

// console.group("3 task");

// const cubeEdge = prompt("Введіть сторону ребра куба");
// const cubeVolume = Number(cubeEdge ** 3);
// if (confirm("Розрахувати об'єм куба?")) {
//   alert(
//     "Якщо сторона ребра куба = " +
//       cubeEdge +
//       " то " +
//       "\nОб'єм куба = " +
//       cubeVolume
//   );
// } else {
//   alert(':(');
// }
// console.groupEnd();

// console.group("4 task");

// const radiusСylinder = prompt('Введіть радіус циліндра');
// const heightCylinder = prompt('Введіть висоту циліндра');
// const PI = Math.PI;
// const volumeCylinder = (PI*(radiusСylinder**2))*heightCylinder;
// if(confirm('Обчислити об\'єм циліндра?')){
//   alert('Якщо радіус циліндра = ' + radiusСylinder + ' а висота ' + heightCylinder + ' то ' + '\nОб\'єм циліндра = ' + volumeCylinder);
// }else{
//   alert(':(');
// }

// console.groupEnd();

// console.group("5 task");

// if(confirm('Хочете привітатися англійською мовою?')){
//   const userName = prompt('What is your name?');
//   alert('Hello ' + userName);
// }else{
//   const userName = prompt('Як тебе звати?');
//   alert('Привіт ' + userName);
// };

// console.groupEnd();

console.group("6 task");

const check = prompt("Яка сума рахунку?");

if (confirm("Хочете заплатити чайові?")) {
  const tips = prompt("Скільки % чайових хочете залишити?");
  checkTips = (Number(check) * Number(tips)) / 100 + Number(check);
  if (
    confirm("Сума чайових = " + tips + " разом " + checkTips + " Сплатити?")
  ) {
    alert("Сплачено - " + checkTips);
  } else {
    alert("Сплачено - " + check);
  }
} else {
  alert("Сплачено - " + check);
}

console.groupEnd();
