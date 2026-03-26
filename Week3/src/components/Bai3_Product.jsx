import { useState, useMemo } from "react";

const products = Array.from({ length: 2000 }, (_, i) => ({
  id: i,
  name: "Product " + i,
  price: Math.floor(Math.random() * 1000),
}));

export default function Bai3_Product() {
  const [search, setSearch] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);

  console.time("filter");

  const filtered = useMemo(() => {
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        p.price >= min &&
        p.price <= max,
    );
  }, [search, min, max]);

  const total = useMemo(() => {
    return filtered.reduce((sum, p) => sum + p.price, 0);
  }, [filtered]);

  console.timeEnd("filter");

  return (
    <div>
      <h2>Bài 3 - Product</h2>

      <input placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
      <input
        type="number"
        placeholder="Min"
        onChange={(e) => setMin(+e.target.value)}
      />
      <input
        type="number"
        placeholder="Max"
        onChange={(e) => setMax(+e.target.value)}
      />

      <p>Tổng tiền: {total}</p>
      <p>Số lượng: {filtered.length}</p>
    </div>
  );
}
