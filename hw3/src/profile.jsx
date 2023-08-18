import React from "react";


export const Profile = ({ user, onLogout }) => {
  return (
    <div className="profile-container">
      <h2>Hello, {user.email}!</h2>
      <button onClick={onLogout}>Log Out</button>
    </div>
  );
};
