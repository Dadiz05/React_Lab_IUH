import { useEffect, useState } from "react";

export default function Bai4_SearchPost() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h2>Bài 4 - Search Posts</h2>

      <input
        placeholder="Search title..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
}
