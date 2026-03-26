import { useState } from "react";

export default function Bai1_Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Bài 1 - Form</h2>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="age"
        value={form.age}
        onChange={handleChange}
        placeholder="Age"
      />

      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
}
