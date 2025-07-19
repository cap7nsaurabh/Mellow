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
  const [musicFile, setMusicFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  async function handleMusicUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.[0]) return;
    setMusicFile(e.target.files[0]);
  }

  async function uploadMusicFile(): Promise<string> {
    if (!musicFile) return "";
    setUploading(true);
    const formData = new FormData();
    formData.append("file", musicFile);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    setUploading(false);
    const data = await res.json();
    if (res.ok && data.url) {
      setMusicUrl(data.url);
      return data.url;
    } else {
      alert("Upload failed.");
      return "";
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    let uploadedMusicUrl = musicUrl;
    if (musicFile && !musicUrl) {
      uploadedMusicUrl = await uploadMusicFile();
      if (!uploadedMusicUrl) return; // abort if upload failed
    }

    // Now, save metadata to backend
    const res = await fetch("/api/music", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        artist,
        mood,
        thumbnailUrl,
        musicUrl: uploadedMusicUrl,
        duration: Number(duration),
        date,
      }),
    });

    if (res.ok) {
      alert("Music metadata saved!");
      setTitle("");
      setArtist("");
      setMood("");
      setThumbnailUrl("");
      setMusicUrl("");
      setDuration("");
      setDate("");
      setMusicFile(null);
    } else {
      alert("Failed to save metadata");
    }
  }

  return (
    <div className="p-8 max-w-xl mx-auto bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-6">Add Music Metadata</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input value={title} onChange={e=>setTitle(e.target.value)} required placeholder="Track Title" className="border p-2 rounded" />
        <input value={artist} onChange={e=>setArtist(e.target.value)} required placeholder="Artist" className="border p-2 rounded" />
        <input value={mood} onChange={e=>setMood(e.target.value)} required placeholder="Mood" className="border p-2 rounded" />
        <input value={thumbnailUrl} onChange={e=>setThumbnailUrl(e.target.value)} required placeholder="Thumbnail URL" className="border p-2 rounded" />
        {/* --- Music File Upload --- */}
        <div>
          <input
            type="file"
            accept="audio/*"
            onChange={handleMusicUpload}
            className="border p-2 rounded"
          />
          {musicFile && <span className="ml-2 text-sm text-gray-500">{musicFile.name}</span>}
          {uploading && <span className="ml-2 text-xs text-purple-500">Uploading...</span>}
        </div>
        {/* Preview uploaded file (optional) */}
        {musicUrl && (
          <audio src={musicUrl} controls className="w-full my-2" />
        )}
        <input value={duration} onChange={e=>setDuration(e.target.value)} required placeholder="Duration (seconds)" className="border p-2 rounded" type="number" min="0" />
        <input value={date} onChange={e=>setDate(e.target.value)} placeholder="Release Date (optional)" className="border p-2 rounded" type="date" />
        <button className="bg-purple-500 text-white px-4 py-2 rounded self-end" disabled={uploading}>Save Metadata</button>
      </form>
    </div>
  );
}
