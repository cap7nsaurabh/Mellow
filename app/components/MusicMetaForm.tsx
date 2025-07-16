"use client";
import { useState } from "react";

export default function MusicMetaForm() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [mood, setMood] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [musicUrl, setMusicUrl] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: call API to add music metadata
    alert("Music meta will be saved (implement backend)");
    // Optionally: reset form
    setTitle(""); setArtist(""); setMood(""); setThumbnailUrl(""); setMusicUrl(""); setDuration(""); setDate("");
  }

  return (
    <div className="p-8 max-w-xl mx-auto bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-6">Add Music Metadata</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input value={title} onChange={e=>setTitle(e.target.value)} required placeholder="Track Title" className="border p-2 rounded" />
        <input value={artist} onChange={e=>setArtist(e.target.value)} required placeholder="Artist" className="border p-2 rounded" />
        <input value={mood} onChange={e=>setMood(e.target.value)} required placeholder="Mood" className="border p-2 rounded" />
        <input value={thumbnailUrl} onChange={e=>setThumbnailUrl(e.target.value)} required placeholder="Thumbnail URL" className="border p-2 rounded" />
        <input value={musicUrl} onChange={e=>setMusicUrl(e.target.value)} required placeholder="Music URL" className="border p-2 rounded" />
        <input value={duration} onChange={e=>setDuration(e.target.value)} required placeholder="Duration (seconds)" className="border p-2 rounded" type="number" min="0" />
        <input value={date} onChange={e=>setDate(e.target.value)} placeholder="Release Date (optional)" className="border p-2 rounded" type="date" />
        <button className="bg-purple-500 text-white px-4 py-2 rounded self-end">Save Metadata</button>
      </form>
    </div>
  );
}
