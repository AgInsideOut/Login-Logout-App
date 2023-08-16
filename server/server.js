const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const bodyParser = require('body-parser'); // Parsing request bodies
const cors = require('cors');

const app = express();
const port = 3000;

// Database setup
const dbPath = './users.db';
const db = new sqlite3.Database(dbPath);

// Middleware setup
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serving the static files from the build folder (compiled React app)
app.use(express.static(path.join(__dirname, '../build')));

// Registration Route
app.post('/api/signup', (req, res) => {
  // Extract user registration data from request body
  const { dateOfBirth, firstName, lastName, email, username, password } = req.body;

  // Insert the user data into the 'users' table
  const insertQuery = `
    INSERT INTO users (dateOfBirth, firstName, lastName, email, username, password)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.run(insertQuery, [dateOfBirth, firstName, lastName, email, username, password], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: 'User registered successfully!' });
    }
  });
});

// Login Route
app.post('/api/signin', (req, res) => {
  const { username, password } = req.body;

  // Check user credentials against the database
  const selectQuery = `
    SELECT * FROM users
    WHERE username = ? AND password = ?
  `;

  db.get(selectQuery, [username, password], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      if (row) {
        res.json({ message: 'Signed in successful' });
      } else {
        res.status(401).json({ error: 'Invalid credentials. Try again.' });
      }
    }
  });
});

// Route to handle requests to the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Listen port

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//STEPS FOR RUNNING SERVER.JS FILE:

///Through the terminal navigate to the directory where you have saved the server.js
///Make sure you have the body-parser package installed, if not run in terminal npm install body-parser
///Also check the cors, and if needed install it through: npm install cors body-parser
///Run in the terminal: node server.js


