//HW_2_JS Extra_Tasks.
//
//1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
let res =1;

for ( let i = 1; i <= 10; i++) {
 res = res*2
    console.log(res);
}

//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
const num = 2;
const exp = 10;

const expReal = function pow() {
    let res =1;
    for ( let i = 1; i <= exp; i++) {
        res = res*num;
        console.log(res);
    }
}
expReal(num,exp);

//2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
//Пример в консоли:
//:)
//:):)
//:):):)
//:):):):)
//:):):):):)

res =[':)',':):)',':):):)',':):):):)',':):):):):)'];

for ( let i = 0; i <= 4; i++) {
    console.log(res[i]);
}

//
res =':)';

for ( let i = 1; i <= 5; i++) {
    res= res + ':)'
    console.log(res.slice(2));
}
//
res =':)';
let acc = '';

for ( let i = 1; i <= 5; i++) {
    acc += res
    console.log(acc);
}

//2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
//e.g. function printSmile(stroka, numberOfRows)
let acc = '';

const count = (res, numberOfRows) => {
    for ( let i = 1; i <= numberOfRows; i++) {
        console.log(i, acc += res);
    }
}
count(':)', 5);



//3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
//e.g. function getWordStructure(word)
//В консоли: 
//Слово (word) состоит из  (число) гласных и (число) согласных букв
//
//Проверки: 'case', 'Case', 'Check-list'
//
//first_way
const getWord = (word) => {
    let vowels =  /[aeiou]/gi;
    let consonants = /(?![aeiou])[a-z]/gi;
    let resultVow = word.match(vowels);
    let countVow = resultVow.length;
    let resultCons = word.match(consonants);
    console.log (resultCons)
    let countCons = resultCons.length;
    console.log('Слово '+ word +' состоит из ' + countVow + ' гласных и ' + countCons + ' согласных букв');
}
getWord ('case');
getWord ('Case');
getWord ('Check-list');

//second_way
const getWord = (word) => {
    console.log('Слово '+ word +' состоит из ' + (word.match(/[aeiou]/gi) || []).length + ' гласных и ' + (word.match(/(?![aeiou])[a-z]/gi) || []).length + ' согласных букв');
}
getWord ('case');
getWord ('Case');
getWord ('Check-list');

//for different languages
const vowelsEn = /[aeiou]/gi;
const consonantsEn = /(?![aeiou])[a-z]/gi;
const vowelsRu = /[аяуюоеёэиы]/gi;
const consonantsRU = /(?![аяуюоеёэиы])[А-яЁё]/gi;

const getWord = (word) => {
    let quantityVowelsEn = word.match(vowelsEn);
    let quantityconsonantsEn = word.match(consonantsEn);
    let quantityVowelsRu = word.match(vowelsRu);
    let quantityconsonantsRu = word.match(consonantsRU);

    if ((quantityVowelsEn || quantityconsonantsEn)  && !quantityVowelsRu && !quantityconsonantsRu) {
        console.log('The Word '+ word +' consists of ' + (quantityVowelsEn || []).length + ' vowels and ' + (quantityconsonantsEn || []).length + ' consonant(s)');
    } else if ((quantityVowelsRu || quantityconsonantsRu) && !quantityVowelsEn && !quantityconsonantsEn){
        console.log('Слово '+ word +' состоит из ' + (quantityVowelsRu || []).length + ' гласных и ' + (quantityconsonantsRu || []).length + ' согласных букв');
    } else {
        console.log("Use only words - Используйте только слова!");
    }
}
getWord ('Алоэ');
getWord ('вера');
getWord ('case');
getWord ('Case');
getWord ('Check-list');

//4**. Написать функцию, которая проверяет, является ли слово палиндромом
//e.g. function isPalindrom(word)
//
//Проверки: 'abba', 'Abba'
