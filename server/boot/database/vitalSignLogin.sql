CREATE SCHEMA IF NOT EXISTS vitalSignLogin;
USE vitalSignLogin;

-- Define tables without constraints

CREATE TABLE IF NOT EXISTS User (
    user_id INT PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR(255),
    name VARCHAR(255),
    role VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS Doctor (
    user_id INT PRIMARY KEY,
    speciality VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS Patient (
    user_id INT PRIMARY KEY,
    insurance_id VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS Appointment (
    appointment_id INT PRIMARY KEY,
    doctor_id INT,
    patient_id INT,
    reason VARCHAR(255),
    date DATE,
    time TIME,
    duration INT
);

-- Insert values into tables

INSERT INTO User (user_id, email, password, name, role) VALUES
(1, 'doctor@example.com', 'password123', 'Dr. Smith', 'Doctor'),
(2, 'patient@example.com', 'password456', 'John Doe', 'Patient');

INSERT INTO Doctor (user_id, speciality) VALUES
(1, 'Cardiology');

INSERT INTO Patient (user_id, insurance_id) VALUES
(2, '123456789');

INSERT INTO Appointment (appointment_id, doctor_id, patient_id, reason, date, time, duration) VALUES
(1, 1, 2, 'Regular Checkup', '2024-01-15', '10:00:00', 60);

-- Add constraints

ALTER TABLE Doctor
ADD FOREIGN KEY (user_id) REFERENCES User(user_id);

ALTER TABLE Patient
ADD FOREIGN KEY (user_id) REFERENCES User(user_id);

ALTER TABLE Appointment
ADD FOREIGN KEY (doctor_id) REFERENCES Doctor(user_id),
ADD FOREIGN KEY (patient_id) REFERENCES Patient(user_id);
