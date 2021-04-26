var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "hanah.rose1!",
    database: "emp_db",
});

connection.connect(function(err){
    if(err) throw err;
    start();
})