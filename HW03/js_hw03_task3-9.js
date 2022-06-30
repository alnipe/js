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