USE emp_db;

-- Dummy data for database to test it
INSERT into department (name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Human Resources"), ("Organizational Leadership");
select * from department;

INSERT into role (title, salary, department_id)
VALUES ("Sales Lead", 45000, 1), ("Sales Representative", 35000, 1), ("Lead Engineer", 60000, 2), ("Accountant", 50000, 3),("Legal", 50000, 4), ("Manager", 55000, 5);
select * from role;


INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Emerson", "Headphones", 1), ("Emerson the Second", "Headphones", 2), ("Emerson the Third", "Headphones", 3), ("Emerson the Fourth", "Headphones", 4), ("Emerson the Fifth", "Headphones", 5);

select * from employee;
