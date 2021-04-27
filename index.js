const mysql = require('mysql');
const inquirer = require('inquirer');
const consoletable = require('console.table');

// Connection
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
    "Add Employee",
    "Exit"
]

// Function to run CLI via inquirer and mysql
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
                break;
            
            case viewOptions[4]:
                addEmployee();
                break;
// Kills connection if user hits exit
            case viewOptions[5]:
                connection.end();
                break
        }
      });
  };

  function viewDepartment() {
    // pulls from mysql DB everything from department
    var dbInfo = "SELECT * FROM department";
    connection.query(dbInfo, function (err, result) {
        if (err) throw err;
        console.table(result)
        findSchemaInfo();
    })
}

function viewEmployee() {
  // pulls different information from multiple tables and joins them together
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
  // pulls all information from rol table
    var dbInfo = "SELECT * FROM role";
    connection.query(dbInfo, function (err, result) {
        if (err) throw err;

        console.table(result)
        findSchemaInfo();
    })
}
// IN PROGRESS
// const updateEmployee = () => {
//     // query the database for all items being auctioned
//     connection.query('SELECT * FROM employee', (err, results) => {
//       if (err) throw err;
//       // once you have the items, prompt the user for which they'd like to bid on
//       inquirer
//         .prompt([
//           {
//             name: 'update1',
//             type: 'rawlist',
//             choices() {
//               const choiceArray = [];
//               results.forEach(({ first_name }) => {
//                 choiceArray.push(first_name);
//               });
//               return choiceArray;
//             },
//             message: 'Who would you like to update?',
//           },
//           {
//             name: 'update2',
//             type: 'input',
//             message: 'What Role?',
//           },
//         ])
//         .then((answer) => {
//           let updatedEmployee;
//           results.forEach((item) => {
//             if (employee.first_name === answer.choice) {
//               updatedEmployee = first_name;
            
//           });

//           connection.query(
//             'UPDATE employee SET ? WHERE ?',
//             [
//               {
//                 role_id: answer.update2,
//               },
//             ],
//             (error) => {
//               if (error) throw err;
//               console.log('Update Successful!');
//               findSchemaInfo();
//             }
//     });
// });
// };

const addEmployee = () => {
    // prompt for info about the item being put up for auction
    inquirer
      .prompt([
        {
          name: 'firstName',
          type: 'input',
          message: 'First name?',
        },
        {
          name: 'lastName',
          type: 'input',
          message: 'Last name?',
        },
        {
          name: 'role',
          type: 'input',
          message: 'Role ID?',
        },
      ])
      .then((answer) => {

        connection.query(
          // Adds answers to employee table
          'INSERT INTO employee SET ?',
          {
            first_name: answer.firstName,
            last_name: answer.lastName,
            role_id: answer.role,
          },
          (err) => {
            if (err) throw err;
            console.log('Employee Added!');
            findSchemaInfo();
          }
        );
      });
    }

  // connect to the mysql server and sql database
  connection.connect((err) => {
    if (err) throw err;
    // run the function after the connection is made to prompt the user
    findSchemaInfo();
  });