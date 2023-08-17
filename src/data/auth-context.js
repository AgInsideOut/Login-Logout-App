import React, { createContext, useContext, useState } from 'react';
import { openDatabase } from './database';

const AuthContext = createContext();

// AUTHENTICATION OF USERS ON LOGIN AND INSERTING USERS DATA ON REGISTRY

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const db = openDatabase();

    db.get(
      'SELECT * FROM users WHERE username = ? AND password = ?',
      [username, password],
      (err, row) => {
        if (err) {
          console.error('Error during login:', err);
          return;
        }

        if (row) {
          setUser(row);
        }
      }
    );

    db.close();
  };

  const logout = () => {
    setUser(null);
  };

  const register = (userData) => {
    const db = openDatabase();

    db.run(
      'INSERT INTO users (dateOfBirth, firstName, lastName, email, username, password) VALUES (?, ?, ?, ?, ?, ?)',
      [
        userData.dateOfBirth,
        userData.firstName,
        userData.lastName,
        userData.email,
        userData.username,
        userData.password,
      ],
      (err) => {
        if (err) {
          console.error('Error during registration:', err);
        } else {
          // LOG IN NEWLY REGISTERED USER
          login(userData.username, userData.password);
        }
      }
    );

    db.close();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
