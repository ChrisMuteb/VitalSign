const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcryptjs');

registerDoctor = (req, res) => {
    const { email, password, firstname, lastname, dob, role, profile_image_url, speciality } = req.body;
  
    // First insert into user
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Error hashing password:', err);
            return res.status(500).send('Internal Server Error');
        }
        db.query('INSERT INTO user (email, password, firstname, lastname, role, dob, profile_image_url) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [email, hashedPassword, firstname, lastname, role.charAt(0).toUpperCase() + role.slice(1).toLowerCase(), dob, profile_image_url],
        (err, userResult) => {
            if (err) {
                console.error('Error creating User:', err);
                return res.status(500).send('Internal Server Error For User');
            }

            // User inserted successfully, now insert into the doctor table
            const userId = userResult.insertId;
            db.query('INSERT INTO doctor (user_id, speciality) VALUES (?, ?)',
            [userId, speciality],
            (doctorErr, doctorResult) => {
                if (doctorErr) {
                    console.error('Error creating Doctor:', doctorErr);
                    db.query('DELETE FROM user WHERE user_id = ?', [userId], (rollbackErr, rollbackResult) => {
                        if (rollbackErr) {
                            console.error('Rollback Error:', rollbackErr);
                        }
                    });
                    return res.status(500).send('Internal Server Error For Doctor');
                }
                res.status(201).send({message:'Doctor created successfully', user:userResult});
            });
        });
    });
}



  registerPatient =  (req, res) => {
    const { email, password, firstname, lastname, dob, role, profile_image_url, insurance_id } = req.body;
  
    // First insert into user
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Error hashing password:', err);
            return res.status(500).send('Internal Server Error');
        }
    db.query('INSERT INTO user (email, password, firstname, lastname, role, dob, profile_image_url) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [email, hashedPassword, firstname, lastname, role.charAt(0).toUpperCase() + role.slice(1).toLowerCase(), dob, profile_image_url],
      (err, userResult) => {
        if (err) {
          console.error('Error creating User:', err);
          return res.status(500).send('Internal Server Error For User');
        }
  
        // User inserted successfully, now insert into the Patient table
        const userId = userResult.insertId;
        db.query('INSERT INTO patient (user_id, insurance_id) VALUES (?, ?)',
          [userId, insurance_id],
          (patientErr, patientResult) => {
            if (patientErr) {
              console.error('Error creating Patient:', patientErr);
              db.query('DELETE FROM user WHERE user_id = ?', [userId], (rollbackErr, rollbackResult) => {
                if (rollbackErr) {
                  console.error('Rollback Error:', rollbackErr);
                }
              });
              return res.status(500).send('Internal Server Error For Patient');
            }
            res.status(201).send({message:'Patient created successfully', user:userResult});
          });
      });
    });
  }


  login = (req, res) => {
    const { email, password } = req.body;
  
    db.query('SELECT * FROM user WHERE email = ?', [email], (err, results) => {
      if (err) {
        console.error('Error retrieving user:', err);
        res.status(500).send('Internal Server Error');
      } 
      
      else {
        if (results.length === 0) {
          res.status(404).send('User not found');
        } else {
          const user = results[0];
          bcrypt.compare(password, user.password, (err, passwordMatch) => {
            if (err) {
              console.error('Error comparing passwords:', err);
              res.status(500).send('Internal Server Error');
            } else {
              if (passwordMatch) {
                res.send({message:'Login successful',user:user});
              } else {
                res.status(401).send('Incorrect password');
              }
            }
          });
        }
      }
    });
  };


  logOut = (req, res) => {
    res.status(200).send('Logged out successfully');
  }

  module.exports = {registerDoctor, registerPatient, login, logOut}