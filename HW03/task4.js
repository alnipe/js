const company = [
  {
    id: 1,
    name: "Компания",
    parent: null,
    users_count: 10,
    children: [
      {
        id: 2,
        name: "Отдел тестирования",
        parent: 1,
        users_count: 7,
        children: [
          {
            id: 3,
            name: "Тестирование Web",
            parent: 2,
            users_count: 5,
          },
          {
            id: 4,
            name: "Тестирование Mobile",
            parent: 2,
            users_count: 0,
          },
        ]
      },
      {
        id: 5,
        name: "Отдел маркетинга",
        parent: 1,
        users_count: 30,
      },
      {
        id: 6,
        name: "Администрация",
        parent: 1,
        users_count: 25,
        children: [
          {
            id: 7,
            name: "Бухгалтерия",
            parent: 6,
            users_count: 10,
          },
          {
            id: 8,
            name: "Менеджмент",
            parent: 6,
            users_count: 15,
            children: [
              {
                id: 9,
                name: "Подраздел менеджмента 1",
                parent: 8,
                users_count: 5,
              },
              {
                id: 10,
                name: "Подраздел менеджмента 2",
                parent: 8,
                users_count: 10,
              }
            ]
          },
          {
            id: 11,
           	name: "HR",
          	parent: 6,
            users_count: 1,
          }
        ]
      },
    ]
  }
]

/* 
Написать функцию: 

Функция строит древовидный список компании.
При ее вызове в консоль должен выветить список подразделений компании с указанием количества сотрудников и с соблюдение вложенности подразделений.

Пример:

Компания (10)
-- Отдел тестирования (7)
---- Тестирование Web (5)
---- Тестирование Mobile (0)
-- Отдел маркетинга (30)
-- Администрация (25)
---- Бухгалтерия (10)
---- Менеджмент (15)
------ Подраздел менеджмента 1 (5)
------ Подраздел менеджмента 2 (10)
---- HR (1)
*/

// function companyTree() {
//   company.forEach((comp) => {
//     console.log(`${comp.name} (${comp.users_count})`);
//       comp.children.forEach((child) => {
//         console.log(`-- ${child.name} (${child.users_count})`);
//         if (child.children) {
//           child.children.forEach((elm) => {
//           console.log(`---- ${elm.name} (${elm.users_count})`);
//           if (elm.children) {
//             elm.children.forEach((el) => {
//             console.log(`${'-'.repeat(el.parent)} ${el.name} (${el.users_count})`);
//             })
//           }else{
//           }
//           })
//         }else{
//         }
//       })
//   })

// }
// companyTree()
let count = ''
function СompanyTree(company) {
  for (let index = 0; index < company.length; index++) {
      const element = company[index];
      console.log(
          `${count} ${element.name}(${
              element.users_count
          })`
      );
      if (element.children) {
          count += '--';
          СompanyTree(element.children, count);
          count = count.slice (0,-2)
      }
  }
}
СompanyTree(company)