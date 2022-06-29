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

function deleteDepartment(departmentId) {
    enterprises.forEach((enterprise) => {
        const findDepartment = enterprise.departments.find(el => el.id == departmentId)
        if (findDepartment) {
            if (findDepartment.employees_count == 0) {
                const enterpriseIndex = enterprise.departments.indexOf(findDepartment);
                enterprise.departments.splice(enterpriseIndex, 1)
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