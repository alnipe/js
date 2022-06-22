//JS HW03 Extra from Anatoly

/*Task 1.
Написать функцию, которая найдет и выведет в консоль юзеров, зарегистрированных 09.10.2021 и 10.10.2021). Массив в task1.txt */

// Чтобы не грузит код делал через импорт/экспорт, предварительно переименовав файл с массивом.
import {users} from './task1.mjs';

const registration = (date1, date2) => {
    for (let i = 0; i < (users.length); i++) {
        if (users[i].registrationDate == date1 || users[i].registrationDate ==date2){
            console.log(users[i]);
        } else {
         
        }
    }

}
registration('09.10.2021', '10.10.2021')


/*Task 2*

Откройте в VSCode task2.json файл. Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную).

Дан массив объектов. Каждый объект является идентификационной карточкой человека. Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.*/

Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании

Task 3**
В файле task3.txt найдете структуру компании и задания, необходимые выполнить.

Примечание: ВСЕ задания выполнять не обязательно, если вам люто сложно. Но ПЕРВОЕ - прям надо всем:)

Task 4****

В файле task4.txt вы найдете разноуровневый массив объектов. Очень похожий на массив из 3го задания, только количество вложенностей может быть не ограничено. 

Задание: написать функцию: 

Функция строит древовидный список компании.
При ее вызове в консоль должен вывестись список подразделений компании с указанием количества сотрудников и с соблюдение вложенности подразделений.