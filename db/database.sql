CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  salary INT NOT NULL,
  PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee VALUES
(1, 'John', 2000),
(2, 'Jane', 3000),
(3, 'Jack', 7000);
(4, 'Peter', 2000),
(5, 'Kate', 8000),
(6, 'Barbara', 4000);