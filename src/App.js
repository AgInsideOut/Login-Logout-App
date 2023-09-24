import React, { useState } from "react";
import './App.css';
import { Login } from "./login";
import { Register } from "./register";
import { Profile } from "./profile";
import { usersData } from "./users";
import { Recovery } from "./recovery";

function App() {
  const [currentForm, setCurrentForm] = useState('login'); // Dodajemy stan dla śledzenia formularza
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(usersData);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const handleLogin = (user) => {
    setUser(user);
    setLoggedIn(true);
  }

  const handleLogout = () => {
    setUser(null);
    setLoggedIn(false);
  }

  const handleRegister = (user) => {
    setUser(user);
    setLoggedIn(true);
    setCurrentForm('login');
    setUsers([...users, user]);
  }

  const handleRecoveryFormSwitch = () => {
    setCurrentForm('recovery');
  }

  let formComponent;
  if (loggedIn) {
    formComponent = <Profile user={user} onLogout={handleLogout} />;
  } else if (currentForm === "login") { // Dodajemy warunek dla formularza logowania
    formComponent = (
      <Login
        users={users}
        onFormSwitch={toggleForm}
        onLogin={handleLogin}
        onRecoveryFormSwitch={handleRecoveryFormSwitch}
      />
    );
  } else if (currentForm === "recovery") { // Dodajemy warunek dla formularza recovery
    formComponent = (
      <Recovery
        onFormSwitch={toggleForm}
      />
    );
  } else { // Dodajemy warunek dla formularza rejestracji
    formComponent = (
      <Register
        onFormSwitch={toggleForm}
        onRegister={handleRegister}
      />
    );
  }

  return (
    <div className="App">
      {formComponent}
    </div>
  );
}


export default App;
