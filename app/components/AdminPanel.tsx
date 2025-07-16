"use client";
import { useEffect, useState } from "react";
import { Mood } from "@/types/mood";


export default function AdminPanel() {
  const [moods, setMoods] = useState<Mood[]>([]);
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("");
  const [color, setColor] = useState("#ddd");

  useEffect(() => {
    fetch("/api/moods")
      .then((res) => res.json())
      .then((data) => setMoods(data.moods));
  }, []);

  async function handleAddMood(e: any) {
    e.preventDefault();
    const res = await fetch("/api/moods", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, emoji, color }),
    });
    if (res.ok) {
      const data = await res.json();
      setMoods([...moods, data.mood]);
      setName(""); setEmoji(""); setColor("#ddd");
    }
  }

  async function handleDelete(id: string) {
    if (!window.confirm("Delete this mood?")) return;
    await fetch(`/api/moods/${id}`, { method: "DELETE" });
    setMoods(moods.filter((m: any) => m._id !== id));
  }

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin – Manage Moods</h1>
      <form onSubmit={handleAddMood} className="flex gap-2 mb-6">
        <input value={name} onChange={e=>setName(e.target.value)} required placeholder="Mood name" className="border p-2 rounded" />
        <input value={emoji} onChange={e=>setEmoji(e.target.value)} required placeholder="Emoji" className="border p-2 rounded" />
        <input value={color} onChange={e=>setColor(e.target.value)} required type="color" className="border p-2 rounded w-10" />
        <button className="bg-purple-500 text-white px-4 py-2 rounded">Add</button>
      </form>
      <ul>
        {moods.map((m: any) => (
          <li key={m._id} className="flex items-center gap-4 py-2 border-b">
            <span style={{ background: m.color }} className="w-8 h-8 rounded-full flex items-center justify-center text-xl">{m.emoji}</span>
            <span>{m.name}</span>
            <button onClick={()=>handleDelete(m._id)} className="ml-auto text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
