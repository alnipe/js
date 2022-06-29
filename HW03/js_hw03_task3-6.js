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