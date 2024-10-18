import React, { useState } from "react";

const UserProfile: React.FC = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  const fetchUser = async () => {
    // Fetch user data from API
    const response = await fetch("/api/user");
    const userData = await response.json();
    setUser(userData);
  };

  const updateUser = async () => {
    // Update user data from API
    await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify(user),
    });
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div>
      <h1>User Profile</h1>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="email"
        value={user.name}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <button onClick={updateUser}>Update Profile</button>
    </div>
  );
};

export default UserProfile;
