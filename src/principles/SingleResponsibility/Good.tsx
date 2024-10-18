import React, { useState } from "react";

// User data fetching
const useUserData = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  const fetchUser = async () => {
    const response = await fetch("/api/user");
    const userData = await response.json();
    setUser(userData);
  };

  const updateUser = async (userData: { name: string; email: string }) => {
    await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify(userData),
    });
  };

  return { user, setUser, fetchUser, updateUser };
};

// Email validation
const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const UserProfile: React.FC = () => {
  const { user, setUser, updateUser } = useUserData();

  const handleUpdate = () => {
    if (validateEmail(user.email)) {
      updateUser(user);
    } else {
      alert("Invalid email");
    }
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
      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
};

export default UserProfile;
