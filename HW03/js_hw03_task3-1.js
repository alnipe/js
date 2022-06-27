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