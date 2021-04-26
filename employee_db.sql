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
    salary DECIMAL(2) NOT NULL,
    department_id INTEGER NOT NULL,

PRIMARY KEY(ID),
);

CREATE TABLE employee (
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER NOT NULL,
    PRIMARY KEY(id)
);

SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;


