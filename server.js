
//server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const mysql = require('mysql');
const path = require('path');
const app = express();
const fs = require('fs');
const multer = require('multer');


// Set up the storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Set the destination folder where uploaded files will be stored
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    // Generate a unique file name
    const newFileName = `${Date.now()}_${file.originalname}`;
    cb(null, newFileName);
  },
});

// Initialize multer with the storage engine
const upload = multer({ storage });




app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Traderzik1231983',
  database: 'my_list'
});

app.post('/register', (req, res) => {
  const { userName, email, password } = req.body;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error(err);
      res.status(500).send('Database error');
    } else {
      connection.query(
        'INSERT INTO current_users (username, email, _password) VALUES (?, ?, ?)',
        [userName, email, password],
        (queryErr, result) => {
          connection.release();

          if (queryErr) {
            console.error(queryErr);
            res.status(500).send('Database error');
          } else {
            res.status(200).send('User registered successfully');
          }
        }
      );
    }
  });
});

app.post('/login', (req, res) => {
  console.log('req.body:',req.body);
  //console.log('result:',result)

  const { email, password } = req.body;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error(err);
      res.status(500).send('Database error');
    } else {
      connection.query(
        'SELECT * FROM current_users WHERE email = ? AND _password = ?',
        [email, password],
        (queryErr, result) => {
          connection.release();

          if (queryErr) {
            console.error(queryErr);
            res.status(500).send('Database error');
          } else {
            if (result.length === 1) {
              console.log('result:', result);
              // User found and credentials match
              const fetchedUsername = result[0].username;
              console.log('result[0]:',result[0].id_file);
              
              const fetchedUserId = result[0].id_file; 
              const fetchedUserPhoto = result[0].profile_photo;

              req.session.loggedIn= true;
              req.session.userId = fetchedUserId; // Set the user's ID in the session
              
              console.log('req.session:', req.session);
              console.log('req.session.userId:',req.session.userId);
              res.status(200).json({ message: 'Login successful', username: fetchedUsername, userPhoto: fetchedUserPhoto });
            } else {
              // User not found or credentials don't match
              res.status(401).send('Unauthorized');
            }
          }
        }
      );
    }
  });
});


app.post('/submit-appointment', (req, res) => {
  const { name, email, phone, message } = req.body;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error(err);
      res.status(500).send('Database error');
    } else {
      connection.query(
        'INSERT INTO appointments (name, email, phone, message) VALUES (?, ?, ?, ?)',
        [name, email, phone, message],
        (queryErr, result) => {
          connection.release();

          if (queryErr) {
            console.error(queryErr);
            res.status(500).send('Database error');
          } else {
            res.status(200).send('Appointment submitted successfully');
          }
        }
      );
    }
  });
});

app.use('/public', express.static(path.join(__dirname, 'public/uploads')));

app.post('/update-profile-photo', upload.single('photo'), (req, res) => {
  
  console.log('req.file:', req.file); // Print the uploaded file object
  console.log('req.body:', req.body);
  
  
  

  
  
  const {filename} = req.file;
  const { username } = req.body;

  const newFileName = `${filename}`;
  

  if (!req.file) {
    res.status(400).send('No photo uploaded');
    return;
  }

  
    // Use pool.getConnection to handle the database connection
  pool.getConnection((err, connection) => {
    if (err) {
      console.error(err);
      res.status(500).send('Database error');
    } else {
      // Logic to save the uploaded photo to the user's profile
      
      connection.query(
        'UPDATE current_users SET profile_photo = ? WHERE username = ?',
        [newFileName, username],
        (queryErr, result) => {
          connection.release();

          if (queryErr) {
            console.error(queryErr);
            res.status(500).send('Database error');
          } else {
            
            // Move the uploaded file to a designated folder
            const sourcePath = req.file.path;
            const destination = path.join(__dirname, 'public/uploads', newFileName);

            fs.rename(sourcePath, destination, (moveErr) => {
              if (moveErr) {
                console.error(moveErr);
                res.status(500).send('Error saving photo');
              } else {
                res.status(200).send('Profile photo updated successfully');
              }
            });
             
          }
        }
      );
    }
  });

  
});



app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
