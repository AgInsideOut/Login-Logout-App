const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Paths to files
const dbPath = './users.db';

// User data
const usersData = [
    {
        dateOfBirth: '1995-12-15',
        firstName: 'Alex',
        lastName: 'Woodstock',
        email: 'awooodstock@gmail.com',
        username: 'awoody',
        password: 'P@ssw0rd123'
    },
    {
        dateOfBirth: '1997-07-25',
        firstName: 'Alexander',
        lastName: 'Johnson',
        email: 'ajohnson@gmail.com',
        username: 'johnny',
        password: 'StrongP@ssw0rd'
    },
    {
        dateOfBirth: '1990-03-16',
        firstName: 'Olivia',
        lastName: 'Williams',
        email: 'olivia.williams@gmail.com',
        username: 'olley',
        password: 'Secur3P@ss!'
    },
    {
        dateOfBirth: '1994-09-05',
        firstName: 'Ethan',
        lastName: 'Martinez',
        email: 'e.martinez@gmail.com',
        username: 'emartin',
        password: 'MyP@ssw0rd!'
    },
    {
        dateOfBirth: '1972-05-05',
        firstName: 'Sophia',
        lastName: 'Brown',
        email: 'sophia.b@gmail.com',
        username: 'sophy',
        password: 'C0mpl3xP@ss'
    },
    {
        dateOfBirth: '1985-11-08',
        firstName: 'Liam',
        lastName: 'Davis',
        email: 'ldavis@gmail.com',
        username: 'li',
        password: 'Sup3rS3cur3!'
    },
    {
        dateOfBirth: '2000-05-02',
        firstName: 'Ava',
        lastName: 'Miller',
        email: 'avam@gmail.com',
        username: 'ava',
        password: 'P@ssw0rd1234'
    },
    {
        dateOfBirth: '1988-03-14',
        firstName: 'Noah',
        lastName: 'Smith',
        email: 'n.smith@gmail.com',
        username: 'noah',
        password: '2F@ctorAuth'
    },
    {
        dateOfBirth: '1991-04-03',
        firstName: 'Isabella',
        lastName: 'Taylor',
        email: 'isabella.taylor@gmail.com',
        username: 'izzy',
        password: 'Unbr3ak@ble'
    },
    {
        dateOfBirth: '1996-01-15',
        firstName: 'Mia',
        lastName: 'Jones',
        email: 'miamaria@gmail.com',
        username: 'mia',
        password: '!HardP@ssw0rd'
    }
];

const usersDictionary = usersData.map((data, index) => {
    return {
        id: index + 1,
        dateOfBirth: data.dateOfBirth,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        username: data.username,
        password: data.password,
    };
});

console.log(usersDictionary);

// Create a connection to the database
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the database.');
        createTableAndInsertData();
    }
});

function createTableAndInsertData() {
    // Create the 'users' table
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            dateOfBirth TEXT,
            firstName TEXT,
            lastName TEXT,
            email TEXT,
            username TEXT,
            password TEXT
        )
    `;

    db.run(createTableQuery, (err) => {
        if (err) {
            console.error('Error creating table:', err);
        } else {
            console.log('Table created.');

            // Insert data into the 'users' table
            const insertQuery = `
            INSERT INTO users (dateOfBirth, firstName, lastName, email, username, password)
            VALUES (?, ?, ?, ?, ?, ?)
        `;        

            usersDictionary.forEach(user => {
            // Create .db file
                db.run(insertQuery, [user.dateOfBirth, user.firstName, user.lastName, user.email, user.username, user.password], (err) => {
                    if (err) {
                        console.error('Error inserting data:', err);
                    }
                });
            });

        }
    });
}

//STEPS FOR CREATING .DB FILE:

///Through the terminal navigate to the directory where you have saved the database.js
///*** Fix permissions if the following steps is throwing errors: sudo chown -R 501:20 "/Users/{USERNAME}/.npm"
///Run in the terminal: npm install sqlite3
///Run in the terminal : node database.js

//STEPS FOR VIEWING .DB FILE IN TERMINAL:

///Through the terminal navigate to the directory where you have saved the users.db
///Run sqlite3 users.db
///Run SELECT * FROM users;

