document.write('**********************************');
document.write("<br>");

// Перший студент

alert('Введіть особисті дані');

 y = prompt('Ваш вік');
 fname = prompt('Ім*я');
 lname = prompt('Прізвище');

console.log('---Перший студент---');
console.log(y, ':вік');
console.log(fname, ':Ім*я');
console.log(lname, ':Прізвище');

document.write('1. ' + y + ' років' + ' ' + fname + ' ' + lname);
document.write("<br>");

personOne = y + fname + lname;
personOne = parseInt(personOne);

// Другий студент

alert('Введіть особисті дані');

 y = prompt('Ваш вік');
 fname = prompt('Ім*я');
 lname = prompt('Прізвище');

console.log('---Другий студент---');
console.log(y, ':вік');
console.log(fname, ':Ім*я');
console.log(lname, ':Прізвище');


document.write('2. ' + y + ' років' + ' ' + fname + ' ' + lname);
document.write("<br>");

personTwo = y + fname + lname;
personTwo = parseInt(personTwo);


// Третій студент

alert('Введіть особисті дані');

 y = prompt('Ваш вік');
 fname = prompt('Ім*я');
 lname = prompt('Прізвище');

console.log('---Третій студент---');
console.log(y, ':вік');
console.log(fname, ':Ім*я');
console.log(lname, ':Прізвище');


document.write('3. ' + y + ' років' + ' ' + fname + ' ' + lname);
document.write("<br>");

personThree = y + fname + lname;
personThree = parseInt(personThree);

// Середній вік

personOne = (personOne + personTwo + personThree)/3;

console.log('---середній вік---');
console.log(personOne, ': вік');

document.write('------------' + 'середній вік студентів:' + personOne + '-----------');
document.write("<br>");

document.write('**********************************');
document.write("<br>");
