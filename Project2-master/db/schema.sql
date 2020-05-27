DROP TABLE IF EXISTS university_db;
CREATE DATABASE university_db;
USE university_db;
CREATE TABLE university (
    id INT NOT NULL auto_increment,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email_address VARCHAR(100) NOT NULL,
    nationality VARCHAR(100) NOT NULL,
    highest_education VARCHAR(100) NOT NULL,
    desired_country VARCHAR(100) NOT NULL,
    student_visa BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);