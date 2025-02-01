CREATE TABLE employee (
	emp_id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	email VARCHAR(100) NOT NULL UNIQUE,
	department VARCHAR(50) NOT NULL,
	salary DECIMAL(10, 2),
	joining_date DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO employee (first_name, last_name, email, department, salary, joining_date) VALUES
('Amit', 'Sharma', 'amit.sharma@example.com', 'IT', 75000.00, '2023-01-15'),
('Neha', 'Verma', 'neha.verma@example.com', 'HR', 65000.00, '2022-12-10'),
('Rahul', 'Gupta', 'rahul.gupta@example.com', 'Finance', 80000.00, '2021-08-25'),
('Pooja', 'Singh', 'pooja.singh@example.com', 'Marketing', 70000.00, '2020-07-05'),
('Vikram', 'Joshi', 'vikram.joshi@example.com', 'Operations', 72000.00, '2019-11-20'),
('Kiran', 'Mishra', 'kiran.mishra@example.com', 'IT', 77000.00, '2023-03-12'),
('Ravi', 'Tiwari', 'ravi.tiwari@example.com', 'HR', 66000.00, '2022-09-15'),
('Sneha', 'Dubey', 'sneha.dubey@example.com', 'Finance', 81000.00, '2021-04-30'),
('Arjun', 'Rathore', 'arjun.rathore@example.com', 'Marketing', 69000.00, '2020-06-18'),
('Simran', 'Kaur', 'simran.kaur@example.com', 'Operations', 73000.00, '2018-12-22');

INSERT INTO employee (first_name, last_name, email, department, salary) VALUES
('Manish', 'Kumar', 'manish.kumar@example.com', 'IT', 95000.00)

SELECT * FROM employee;
