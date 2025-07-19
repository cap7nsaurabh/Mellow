"use client";
import { useEffect, useRef, useState } from "react";
import { Play, Pause, Music as MusicIcon } from "lucide-react";
import { Music } from "@/types/Musics";

function formatDuration(seconds: number) {
  if (!seconds && seconds !== 0) return "-";
  const min = Math.floor(seconds / 60);
  const sec = String(seconds % 60).padStart(2, "0");
  return `${min}:${sec}`;
}

export default function MusicLibrary() {
  const [tracks, setTracks] = useState<Music[]>([]);
  const [loading, setLoading] = useState(true);
  const [playingId, setPlayingId] = useState<string | null>(null);

  // FIX: Use a React ref for the audio map
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});

  useEffect(() => {
    fetch("/api/music")
      .then((res) => res.json())
      .then((data) => {
        setTracks(data.music);
        setLoading(false);
      });
  }, []);

  const handlePlayPause = (id: string) => {
    // Pause any playing audio
    if (playingId && playingId !== id && audioRefs.current[playingId]) {
      audioRefs.current[playingId]?.pause();
    }
    if (playingId === id) {
      audioRefs.current[id]?.pause();
      setPlayingId(null);
    } else {
      audioRefs.current[id]?.play();
      setPlayingId(id);
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-purple-900">All Uploaded Music</h1>
      {loading ? (
        <div className="text-lg text-gray-500 text-center">Loading...</div>
      ) : tracks.length === 0 ? (
        <div className="text-lg text-gray-500 text-center">No music uploaded yet.</div>
      ) : (
        <ul className="flex flex-col gap-5">
          {tracks.map((track) => (
            <li
              key={track._id}
              className="bg-white shadow-md hover:shadow-xl transition rounded-2xl flex flex-col md:flex-row items-center px-6 py-4"
            >
              {/* Thumbnail or Icon */}
              <div className="flex-shrink-0 mr-4 mb-3 md:mb-0">
                {track.thumbnailUrl ? (
                  <img
                    src={track.thumbnailUrl}
                    alt={track.title}
                    className="w-20 h-20 object-cover rounded-xl shadow"
                  />
                ) : (
                  <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center text-4xl text-purple-400">
                    <MusicIcon className="w-10 h-10" />
                  </div>
                )}
              </div>
              {/* Details */}
              <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-3 w-full">
                <div className="flex-1 w-full">
                  <div className="font-bold text-lg text-purple-800">{track.title}</div>
                  <div className="text-gray-600">{track.artist}</div>
                  <div className="text-xs flex flex-row gap-2 items-center mt-1">
                    <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full">{track.mood}</span>
                    <span className="text-gray-400">{new Date(track.date).toLocaleDateString()}</span>
                    <span className="text-gray-400">{formatDuration(track.duration)}</span>
                  </div>
                </div>
                {/* Player */}
                <div className="flex flex-row items-center gap-3 min-w-[190px]">
                  <button
                    type="button"
                    aria-label={playingId === track._id ? "Pause" : "Play"}
                    onClick={() => handlePlayPause(track._id)}
                    className={`rounded-full bg-purple-100 hover:bg-purple-200 p-3 transition 
                      shadow-md focus:outline-none focus:ring-2 focus:ring-purple-300`}
                  >
                    {playingId === track._id ? (
                      <Pause className="text-purple-700 w-6 h-6" />
                    ) : (
                      <Play className="text-purple-700 w-6 h-6" />
                    )}
                  </button>
                  <audio
                    ref={el => { audioRefs.current[track._id] = el; }}
                    src={track.musicUrl}
                    onPlay={() => setPlayingId(track._id)}
                    onPause={() => setPlayingId(null)}
                    onEnded={() => setPlayingId(null)}
                    className="hidden"
                  />
                  <span className="text-gray-400 text-xs hidden md:inline">Preview</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
