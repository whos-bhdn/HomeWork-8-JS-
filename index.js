// Завдання 1
// Користувач вводить текст в prompt. Потрібно порахувати і 
// вивести кількість пробілів, які були введені.
// ------------------------------------------------------------------------------------------

// let text = prompt('Enter a word');
// let a = (text.split(' ').length - 1);
// console.log(a);

// Завдання 2
// Користувач вводить email. Потрібно перевірити дані 
// на правильність введення. 
// Правильно введений email - це той, в якому міститься символ @. 
// Крім того символ @ не може бути на початку тексту або в кінці.
// Приклад правильно введених даних:
// student@ukr.net
// Приклад не правильно введених даних:
// @student.ukr.net
// student.ukr.net@
// student.ukr.net
// ------------------------------------------------------------------------------------------

// let email = prompt('Enter e-mail');

// if (email.includes('@') && email.startsWith('@') == false && email.endsWith('@') == false){
//    alert('You`re wellcome');
// } else {
//    alert('Wrong e-mail')
// }



// Завдання 3
// Людина вводить текст, в якому міститься слово html 
// (html може зустрічатись в тексті декілька разів). 
// Потрібно, вивести в консолі загальну кількість слів html у введеному тексті.
// Приклад роботи:
// Користувач вводить: “Text html javascript html css” – в консоль виводиться 2.
// ------------------------------------------------------------------------------------------

// let text = prompt('Enter text');
// function WordCount() {
//    // return text.split('html').lenght;

// }




// Завдання 4
// Користувач вводить URL адреса в prompt в форматі http або 
// https. 
// Виведіть тільки ім'я домена без префіксів http://, https:// в консолі.
// Приклад роботи:
// Користувач вводить: “https://www.google.com” – 
// в консоль виводиться www.google.com.
// Користувач вводить: “http://www.w3schools.com” – 
// в консоль виводиться w3schools.com.

// let input = prompt('Enter URL');
// let result = input.slice(11);

// if (input.startsWith('http://www.') || input.startsWith('https://www.')) {
//    console.log(result)
// } else {
//    console.log('Wrong url')
// }
