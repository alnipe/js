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

function deleteEnterprise(enterpriseId) {
    let newEnterprises = enterprises;
    const findEnterpriseId = enterprises.find(el => el.id == enterpriseId);
        if (findEnterpriseId) {
            const enterpriseIndex = newEnterprises.indexOf(findEnterpriseId);
            newEnterprises.splice(enterpriseIndex, 1);
            console.log(newEnterprises);
        }else{
          console.log(`No enterprise with id: ${enterpriseId}`)
          console.log(newEnterprises);
        }
  }
  deleteEnterprise (1);