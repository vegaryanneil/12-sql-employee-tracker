const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'hanah.rose1!',
    database: 'emp_db',
  });

const viewOptions = [
    "View Departments",
    "View Roles",
    "View Employees",
    "Update Employee",
    "Exit"
]

const employeeList = [
    ""
]

const updateOptions = [
    "First Name",
    "Last Name",
    "Role",
    "Exit"
];

function findSchemaInfo () {
    inquirer
      .prompt({
        name: 'firstOption',
        type: 'list',
        message: 'What would you like to do?',
        choices: viewOptions,
      })
      .then((answer) => {
        // based on their answer, it will route you to different question sets
        switch (answer.firstOption) {
            case viewOptions[0]:
                viewDepartment();
                break;

            case viewOptions[1]:
                viewRole();
                break;

            case viewOptions[2]:
                viewEmployee();
                break;

            case viewOptions[3]:
                updateEmployee();

            case updateOptions[4]:
                connection.end();
                break
        }
      });
  };

  function viewDepartment() {
    var dbInfo = "SELECT * FROM department";
    connection.query(dbInfo, function (err, result) {
        if (err) throw err;
        console.table(result)
        findSchemaInfo();
    })
}

function viewEmployee() {
    var dbInfo = "SELECT first_name, last_name, title, salary FROM employee ";
    dbInfo += "LEFT JOIN role ";
    dbInfo += "ON employee.role_id = role.id"
    connection.query(dbInfo, function (err, result) {
        if (err) throw err;

        console.table(result)
        findSchemaInfo();
    })
}

function viewRole() {
    var dbInfo = "SELECT * FROM role";
    connection.query(dbInfo, function (err, result) {
        if (err) throw err;

        console.table(result)
        findSchemaInfo();
    })
}


const updateEmployee = () => {

    function updateEmployee() {
        inquirer
            .prompt({
                name: "action",
                type: "list",
                message: "Which employee do you want to update?",
                choices: employeeList
            })
           
    }
    updateEmployee();  
}


  // connect to the mysql server and sql database
  connection.connect((err) => {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    findSchemaInfo();
  });
  