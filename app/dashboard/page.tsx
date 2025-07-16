"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import NavBar from "../components/NavBar";
import { Mood } from "@/types/Mood";


export default function DashboardPage() {
  const [moods, setMoods] = useState<Mood[]>([]);
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
    if (status === "authenticated") {
      fetch("/api/moods")
        .then((res) => res.json())
        .then((data) => {
          setMoods(data.moods);
          setLoading(false);
        });
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-lg text-gray-600">Loading...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center">
      <NavBar />
      <header className="w-full py-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Choose Your Mood</h1>
        <p className="text-gray-600 text-lg mb-6">
          {session?.user?.name ? `Welcome, ${session.user.name}!` : "How are you feeling today?"}
        </p>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl px-4">
        {loading ? (
          <div className="col-span-full text-gray-500 text-xl">Loading moods...</div>
        ) : moods.length === 0 ? (
          <div className="col-span-full text-gray-500 text-xl">No moods yet. Add some in the admin panel!</div>
        ) : (
          moods.map((mood) => (
            <div
              key={mood._id}
              className="
                flex flex-col items-center justify-center rounded-2xl shadow-xl
                hover:scale-105 hover:shadow-2xl transition-all duration-200 cursor-pointer
                h-48 w-full
              "
              style={{ background: mood.color }}
            >
              <span className="text-5xl mb-2">{mood.emoji}</span>
              <span className="text-xl font-bold text-gray-700">{mood.name}</span>
            </div>
          ))
        )}
      </main>
    </div>
  );
}
