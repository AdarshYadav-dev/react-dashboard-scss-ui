import { useEffect, useState } from "react";
import "../styles/users.css";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="users-page">
      <h2>All Users</h2>
      <div className="users-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name.firstname} {user.name.lastname}</h3>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
