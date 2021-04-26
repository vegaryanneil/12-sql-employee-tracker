-- Prevents create multiple of the same database
DROP DATABASE IF EXISTS emp_db;

CREATE DATABASE emp_db;

USE emp_db;

-- Tables based on README

CREATE TABLE department (
id INTEGER auto_increment NOT NULL,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE role (
id INTEGER auto_increment NOT NULL,
title VARCHAR(30) NOT NULL,
salary DECIMAL(2) NOT NULL,
department_id INTEGER NOT NULL,

PRIMARY KEY(ID),
);




