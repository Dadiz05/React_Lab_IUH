import { useEffect, useState } from "react";

export default function Bai3_FetchById() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userId) {
      setUser(null);
      setError("");
      return;
    }

    const id = Number(userId);

    if (id < 1 || id > 10) {
      setError("User not found");
      setUser(null);
      return;
    }

    const fetchUser = async () => {
      try {
        setError("");
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
        );

        if (!res.ok) throw new Error("API error");

        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
        setUser(null);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <div>
      <h2>Bài 3 - Fetch by ID</h2>

      <input
        type="number"
        placeholder="Nhập ID (1-10)"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      )}
    </div>
  );
}
