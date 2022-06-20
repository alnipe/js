// HW_1* 
// Задания с разным количеством звездочек:)
//
// 1*: Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
const age_2 = 18;
const age_3 = 60;

const checkAge = function (age = 10) {
    if ( age < age_2){
        console.log("You don't have access cause your age is " + age + " It's less then")
    } else if ((age >= age_2)&&(age < age_3)) {
        console.log("Welcome  !")
    } else if (age > age_3){
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }
}
checkAge();
// Вывести в консоль результат работы функции с возрастами 17, 18, 61
checkAge(17);
checkAge(18);
checkAge(61);

// 2*: Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
const age_2 = 18;
const age_3 = 60;

const checkAge = (age = 10) => {
    if (typeof age !== 'number'){
		console.log("Warning! Only number value!");
	}else if ( age < age_2){
        console.log("You don't have access cause your age is " + age + " It's less then")
    } else if ((age >= age_2)&&(age < age_3)) {
        console.log("Welcome  !")
    } else if (age > age_3){
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }
}
checkAge(2);


// 3**: Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
const age_2 = 18;
const age_3 = 60;
const isOnlyFigure = /^([0-9])$/;

 const checkAge = (age = 10) => {
    if (isOnlyFigure.test(Number(age)) || typeof age === 'number'){
        if ( age < age_2){
            console.log("You don't have access cause your age is " + age + " It's less then")
        } else if ((age >= age_2)&&(age < age_3)) {
          console.log("Welcome  !")
        } else if (age >=age_3){
          console.log("Keep calm and look Culture channel")
        } else {
          console.log("Technical work")
        }
    } else if (typeof age !== 'number') {
 		console.log("Warning! Only number value!")
    }
}
 checkAge(61);

// 4***: Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
<!DOCTYPE html>
<script>
"use strict";

const age_2 = 18;
const age_3 = 60;
const age = Number(prompt('How old are you?'));

 const checkAge = function () {
      if (!isNaN (age)){
        if ( age < age_2){
            console.log("You don't have access cause your age is " + age + " It's less then")
        } else if ((age >= age_2)&&(age < age_3)) {
          console.log("Welcome  !")
        } else if (age > age_3){
          console.log("Keep calm and look Culture channel")
        } else {
          console.log("Technical work")
        }
    } else {
 		  console.log("Warning! Only number value!")
    }
}
checkAge();
</script>

