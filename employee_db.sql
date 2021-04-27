-- Prevents create multiple of the same database
DROP DATABASE IF EXISTS emp_db;

CREATE DATABASE emp_db;

USE emp_db;

-- Tables based on README

CREATE TABLE department (
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(6) NOT NULL,
    department_id INTEGER NOT NULL,
    -- Constraint -> takes a column and allows it to be reference to another table
    INDEX (key_department_id), FOREIGN KEY (department_id) REFERENCES department(id),
    PRIMARY KEY(ID)
);

CREATE TABLE employee (
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    INDEX (key_role_id), FOREIGN KEY (role_id) REFERENCES role(id),
    manager_id integer ,
    INDEX (key_manager_id), FOREIGN KEY (manager_id) REFERENCES employee(id),
    PRIMARY KEY(id)
);

SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;


