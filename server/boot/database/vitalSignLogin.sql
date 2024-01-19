CREATE SCHEMA IF NOT EXISTS vitalSignLogin;
USE vitalSignLogin;

-- Define tables without constraints

CREATE TABLE IF NOT EXISTS User (
    user_id INT PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR(255),
    name VARCHAR(255),
    role VARCHAR(50),
    profile_image_url VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Doctor (
    user_id INT PRIMARY KEY,
    speciality VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS Patient (
    user_id INT PRIMARY KEY,
    insurance_id VARCHAR(100)
);

-- Insert values into tables

INSERT INTO User (user_id, email, password, name, role, profile_image_url) VALUES
(1, 'doctor@example.com', 'password123', 'Dr. Smith', 'Doctor', '/images/doctor.jpg'),
(2, 'patient@example.com', 'password456', 'John Doe', 'Patient', '/images/patient.jpg');

INSERT INTO Doctor (user_id, speciality) VALUES
(1, 'Cardiology');

INSERT INTO Patient (user_id, insurance_id) VALUES
(2, '123456789');

-- Add constraints

ALTER TABLE Doctor
ADD FOREIGN KEY (user_id) REFERENCES User(user_id);

ALTER TABLE Patient
ADD FOREIGN KEY (user_id) REFERENCES User(user_id);
