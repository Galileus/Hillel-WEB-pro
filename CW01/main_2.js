alert('Став зразу 10, там все норм паше!!!');

var y1; var fname1; var lname1;
var y2; var fname2; var lname2;
var y3; var fname3; var lname3;


alert('Введіть особисті дані');

var y1 = prompt('Ваш вік');
var fname1 = prompt('Ім*я');
var lname1 = prompt('Прізвище');

console.log(y1, ':вік');
console.log(fname1, ':Ім*я');
console.log(lname1, ':Прізвище');

document.write('**********************************');
document.write("<br>");

document.write('1. ' + y1 + ' років' + ' ' + fname1 + ' ' + lname1);
document.write("<br>");

alert('Введіть особисті дані');

var y2 = prompt('Ваш вік');
var fname2 = prompt('Ім*я');
var lname2 = prompt('Прізвище');

console.log(y2, ':вік');
console.log(fname2, ':Ім*я');
console.log(lname2, ':Прізвище');


document.write('2. ' + y2 + ' років' + ' ' + fname2 + ' ' + lname2);
document.write("<br>");

alert('Введіть особисті дані');

var y3 = prompt('Ваш вік');
var fname3 = prompt('Ім*я');
var lname3 = prompt('Прізвище');

console.log(y3, ':вік');
console.log(fname3, ':Ім*я');
console.log(lname3, ':Прізвище');


document.write('3. ' + y3 + ' років' + ' ' + fname3 + ' ' + lname3);
document.write("<br>");

var ysum = y1+y2+y3;

var ymid = ysum/3;

document.write(ysum);
document.write("<br>");
document.write(ymid);
document.write("<br>");



document.write('------------' + 'middle age of students:' + ymid + '-----------');
document.write("<br>");

document.write('**********************************');
document.write("<br>");
