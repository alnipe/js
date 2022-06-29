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

function addEnterprise(newEnterpriseName) {
  let newEnterprises = enterprises
  let nextId = enterprises.length;   
  
  enterprises.forEach((enterprise) => {
    nextId += enterprise.departments.length
  })
  
  const newEnterprise = {
    id: nextId+1,
    name: newEnterpriseName,
    departments: []
  }

  const findEnterpriseName = enterprises.find(el => el.name == newEnterpriseName)
  if (!!!findEnterpriseName) {
    newEnterprises.push(newEnterprise)
    console.log(newEnterprises);
  }else{
    console.log(`This Enterprise already exists`);
  }
}
addEnterprise ('Предприятие 4');