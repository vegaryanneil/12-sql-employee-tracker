const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Your password
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
const start = () => {
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


  // connect to the mysql server and sql database
  connection.connect((err) => {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });
  