import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
   
    const token = localStorage.getItem("token");

    if (!token) {
      setError("No token found. Please login again.");
      return;
    }

   
    axios
      .get("https://881ed8dd43b2.ngrok-free.app/api/details", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        setError("Failed to fetch user details");
        console.error(err);
      });
  }, []);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Welcome, to our page</h2>
     
    </div>
  );
}

export default Dashboard;

