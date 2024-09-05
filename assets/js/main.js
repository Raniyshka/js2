'use strict';

//1
let admin;
let name;
name = String('Джон');
admin = name;
alert(admin);

//2
let cityName = prompt('Введите название города', 'Казань');
let cityYear = prompt('Введите год образования города', 1005);
let cityPeople = prompt('Введите население города', '1 300 000');
let cityAge = 2024-cityYear;
alert('Городу ' + cityName + ' исполнилось ' + cityAge + ' лет с момента его образования. Население - ' + cityPeople + ' человек.');

//3
let r = prompt('Введите радиус r круга', 10);
let s = Math.PI * r*r;
alert('Площадь круга ' + s);

//4
let a = +prompt('Введите первое число', 10);
let b = +prompt('Введите второе число', 5);
let sum = a+b;
let razn = a-b;
let delenie = a/b;
let proizv = a*b;
alert('Сумма: ' + sum + '; ' + 'Разность: ' + razn + '; ' + 'Частное: ' + delenie + '; ' + 'Произведение: ' + proizv);
