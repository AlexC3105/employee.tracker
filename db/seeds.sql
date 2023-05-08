INSERT INTO departments (name)
VALUES ("Sales"),
("Development"),
("Finances"),
("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Manager",50000, 4),
("Sales Rep",40000, 3),
("Senior Engineer",100000, 2),
("Junior Engineer",80000, 1),
("Attorney",150000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Alex", "Bobby", 1, null),
("Cynthia", "Derrek", 2, 1),
("Eugene", "Fitz", 3, null),
("George", "Hull", 5, 3),
("Isaiah", "jordan", 4, null),
;