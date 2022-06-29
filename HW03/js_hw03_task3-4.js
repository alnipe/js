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

function addDepartment(enterpriseId, newDepartmentName) {
    let nextId = enterprises.length;
    enterprises.forEach((enterprise) => {
    nextId += enterprise.departments.length
    })
    const newDepartment = {
        id: nextId+1,
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