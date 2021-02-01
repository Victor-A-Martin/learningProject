"use strict"; /*Директива JS работать строго в современном режиме. Прописывать только в начале*/

/*a = 15; - В современном режиме нельзя использовать переменные без их объявления*/
/*consile.log(a); - Работать на будет*/

let number = 5; /*Изменяемая*/
const leftBorderWidth = 1; /*НЕ изменяемая*/
var name = "Ivan"; /*Устаревший формат НЕ ИСПОЛЬЗОВАТЬ!*/
const obj = { /*Можно и так*/
    name: 'John',
    age: 25,
    isMarried: false
};

console.log(obj.name);

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []]; /*Массив*/
                    /*Массив - это частный случай ОБЪЕКТА а не отдельный тип данных*/

console.log(arr[3]);

/*const result = confirm('Are you here?');
console.log(result);

const answer = prompt("Are you 18?", '');
console.log(typeof(answer));

const answers = [];

answers[0] = prompt('What is your first name?', '');
answers[1] = prompt('What is your last name?', '');
answers[2] = prompt('What is your age?', '');

document.write(answers);

const category = 'toys';

console.log(`https://someurl.com/${category}/5`) - Новый формат записи обращения к URL с добавлением в адрес переменной (подойдёт для ботов) Либо конкатинации Обрати внимание на кавычки, они на кнопке тильда.
const user = 'Ivan'

console.log(`Hi, ${user}`)*/
