"use client";
import { useState } from "react";
import AdminPanel from "./AdminPanel";
import MusicMetaForm from "./MusicMetaForm";

import { Music, Sparkles, ArrowLeft, ListMusic } from "lucide-react";
import MusicLibrary from "./MusicLibrary";

export default function AdminHub() {
  const [activeTab, setActiveTab] = useState<"moods" | "music" | "library" | null>(null);

  // Manage Moods Tab
  if (activeTab === "moods") {
    return (
      <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <button
          type="button"
          onClick={() => setActiveTab(null)}
          className="flex items-center gap-2 text-purple-700 border border-purple-200 px-4 py-2 rounded-xl mb-6 mt-12 hover:bg-purple-50 hover:border-purple-300 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Admin</span>
        </button>
        <AdminPanel />
      </div>
    );
  }

  // Add Music Metadata Tab
  if (activeTab === "music") {
    return (
      <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <button
          type="button"
          onClick={() => setActiveTab(null)}
          className="flex items-center gap-2 text-purple-700 border border-purple-200 px-4 py-2 rounded-xl mb-6 mt-12 hover:bg-purple-50 hover:border-purple-300 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Admin</span>
        </button>
        <MusicMetaForm />
      </div>
    );
  }

  // Music Library Tab
  if (activeTab === "library") {
    return (
      <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <button
          type="button"
          onClick={() => setActiveTab(null)}
          className="flex items-center gap-2 text-purple-700 border border-purple-200 px-4 py-2 rounded-xl mb-6 mt-12 hover:bg-purple-50 hover:border-purple-300 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Admin</span>
        </button>
        <MusicLibrary />
      </div>
    );
  }

  // Main Admin Hub with all 3 cards
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 mt-12">Admin Panel</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
        <button
          onClick={() => setActiveTab("moods")}
          className="bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center h-52 hover:scale-105 hover:shadow-2xl transition-all duration-200 border border-purple-200"
        >
          <Sparkles className="w-14 h-14 text-purple-500 mb-4" />
          <span className="text-xl font-bold text-gray-700 mb-2">Manage Moods</span>
          <span className="text-gray-500 text-sm">Add, edit, or remove moods</span>
        </button>
        <button
          onClick={() => setActiveTab("music")}
          className="bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center h-52 hover:scale-105 hover:shadow-2xl transition-all duration-200 border border-purple-200"
        >
          <Music className="w-14 h-14 text-purple-500 mb-4" />
          <span className="text-xl font-bold text-gray-700 mb-2">Add Music Metadata</span>
          <span className="text-gray-500 text-sm">Upload or edit music details</span>
        </button>
        <button
          onClick={() => setActiveTab("library")}
          className="bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center h-52 hover:scale-105 hover:shadow-2xl transition-all duration-200 border border-purple-200"
        >
          <ListMusic className="w-14 h-14 text-purple-500 mb-4" />
          <span className="text-xl font-bold text-gray-700 mb-2">View All Music</span>
          <span className="text-gray-500 text-sm">Browse and stream uploaded music</span>
        </button>
      </div>
    </div>
  );
}
