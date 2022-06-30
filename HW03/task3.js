const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
]

/*Задания:
1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

**Пример:**

Предприятие 1 (45 сотрудников)
- Отдел тестирования (10 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Администрация (15 человек)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников)*/
enterprises.forEach((enterprise) => {
    let summEmployees = 0;
    enterprise.departments.forEach((department) => {
    summEmployees += department.employees_count
})
  if (summEmployees < 1) {
    console.log(`${enterprise.name} (нет сотрудников)`)
  }else{
    console.log(`${enterprise.name} (${summEmployees} сотрудников)`)
  }

  for (let i = 0; i < enterprise.departments.length; i++)
    if (enterprise.departments[i].employees_count < 1) {
      console.log(`- ${enterprise.departments[i].name} (нет сотрудников)`);
    } else {
      console.log(`- ${enterprise.departments[i].name} (${enterprise.departments[i].employees_count} сотрудников)`);
    }
})

/*2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

Пример:
getEnterpriseName(4) // Предприятие 1
getEnterpriseName("Отдел маркетинга") // Предприятие 2*/
const getEnterpriseName = function (data) {
      
    enterprises.forEach((enterprise) => {
        if (typeof data == "number" && enterprise.id == data) {
            console.log(enterprise.name);
        }else if (typeof data == "string"){
            enterprise.departments.forEach((department) =>{
                if (department.name == data){
                    console.log(enterprise.name)
                }
            })
        }    
    })
}
getEnterpriseName ('Отдел маркетинга');

/*3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

Пример:
addEnterprise("Название нового предприятия")*/
function addEnterprise(newEnterpriseName) {
  let newEnterprises = enterprises
  let currentId = [];
    enterprises.forEach((enterprise) => {
        currentId.push(enterprise.id)
        enterprise.departments.forEach((department) => {
            currentId.push(department.id)
        })
    })
  let nextId = Math.max(...currentId) + 1;
  
  const newEnterprise = {
    id: nextId,
    name: newEnterpriseName,
    departments: []
  }

  const findEnterpriseName = enterprises.find(el => el.name == newEnterpriseName)
  if (findEnterpriseName) {
    console.log(`This Enterprise already exists`);
  }else{
    newEnterprises.push(newEnterprise)
    console.log(newEnterprises);
  }
}
addEnterprise ('Предприятие 4');

/*4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

Пример:
addDepartment(1, "Название нового отдела")*/
function addDepartment(enterpriseId, newDepartmentName) {
  let currentId = [];
  enterprises.forEach((enterprise) => {
      currentId.push(enterprise.id)
      enterprise.departments.forEach((department) => {
          currentId.push(department.id)
      })
  })
  let nextId = Math.max(...currentId) + 1;

  const newDepartment = {
       id: nextId,
       name: newDepartmentName,
       employees_count: 0,
   }
  
   let findEnterpriseId = enterprises.find(el => el.id == enterpriseId)
      if (findEnterpriseId) {
          const findDepartmentName = findEnterpriseId.departments.find(el => el.name == newDepartmentName)
          if (findDepartmentName){
              console.log(`This Department in '${findEnterpriseId.name}' already exists: ${JSON.stringify(findDepartmentName)}`);
          }else{
              findEnterpriseId.departments.push(newDepartment)
              console.log(findEnterpriseId);
          }
      }else{
          console.log(`No enterprise with id: ${enterpriseId}`)
      }
}
addDepartment (1,'АХО');

/*5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

Пример:
editEnterprise(1, "Новое название предприятия")*/
function editEnterprise(enterpriseId, newEnterpriseName) {
  let newEnterprises = enterprises;
  let findEnterpriseId = enterprises.find(el => el.id == enterpriseId);
      if (findEnterpriseId) {
        findEnterpriseId.name = newEnterpriseName
        console.log(newEnterprises);
      }else{
        console.log(`No enterprise with id: ${enterpriseId}`)
        console.log(newEnterprises);
      }
}
editEnterprise (1,'Новое название предприятия');

/*6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

Пример:
editDepartment(7, "Новое название отдела")*/
function editDepartment(departmentId, newDepartmentName) {
    enterprises.forEach((enterprise) => {
        const findDepartment = enterprise.departments.find(el => el.id == departmentId)
        if (findDepartment) {
            findDepartment.name = newDepartmentName
            console.log(`${enterprise.name} - department with id: ${departmentId} has been changed to ${JSON.stringify(findDepartment.name)}`);
        }else{
            console.log(`${enterprise.name} - does not have a department with id: ${departmentId}`)
        }
    })
}
editDepartment (7,'Новое название отдела');

/*7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

Пример:
deleteEnterprise(1)*/
function deleteEnterprise(enterpriseId) {
    const findEnterpriseId = enterprises.find(el => el.id == enterpriseId);
        if (findEnterpriseId) {
            const enterpriseIndex = enterprises.indexOf(findEnterpriseId);
            enterprises.splice(enterpriseIndex, 1);
            console.log(enterprises);
        }else{
          console.log(`No enterprise with id: ${enterpriseId}`)
          console.log(enterprises);
        }
  }
  deleteEnterprise (5);

/*8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

Пример:
deleteDepartment(3)*/
function deleteDepartment(departmentId) {
    enterprises.forEach((enterprise) => {
        const findDepartment = enterprise.departments.find(el => el.id == departmentId)
        if (findDepartment) {
            if (findDepartment.employees_count == 0) {
                const departmentIndex = enterprise.departments.indexOf(findDepartment);
                enterprise.departments.splice(departmentIndex, 1)
                console.log(`Department '${findDepartment.name}' has been removed from '${enterprise.name}'`);
                console.log(enterprise);                
            }else{
                console.log(`A department can be removed only if it has no employees - '${findDepartment.name}' has ${findDepartment.employees_count} employees`);
            }
        }else{
        }
    })
}
deleteDepartment (10);

/*9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

Пример:
moveEmployees(2, 3)*/
function moveEmployees(sourceDepartmentId, destDepartmentId) {
    enterprises.forEach((enterprise) => {
      let findSourceDepartmentId = enterprise.departments.find(el => el.id == sourceDepartmentId)
      let findDestDepartmentId = enterprise.departments.find(el => el.id == destDepartmentId)
          if (findSourceDepartmentId && (findSourceDepartmentId.employees_count > 0) && findDestDepartmentId && findSourceDepartmentId!=findDestDepartmentId) {
            
            newSourceEmployees_count = findSourceDepartmentId.employees_count - findSourceDepartmentId.employees_count;
            
            findDestDepartmentId.employees_count = findDestDepartmentId.employees_count + findSourceDepartmentId.employees_count;
            findSourceDepartmentId.employees_count = newSourceEmployees_count

            const sourceDepartmentIndex = enterprise.departments.indexOf(findSourceDepartmentId);
            enterprise.departments.splice(sourceDepartmentIndex, 1, findSourceDepartmentId)
            console.log(enterprise);
          }else{
        
        }
      })
}
moveEmployees (2,3);
