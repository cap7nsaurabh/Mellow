import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import NavBar from "../components/NavBar";

const demoMoods = [
  { name: "Calm", emoji: "🧘‍♂️", color: "from-blue-200 to-purple-300" },
  { name: "Focus", emoji: "🎧", color: "from-yellow-200 to-orange-300" },
  { name: "Sleep", emoji: "🌙", color: "from-indigo-200 to-blue-400" },
  { name: "Happy", emoji: "😊", color: "from-pink-200 to-yellow-200" },
  { name: "Energetic", emoji: "⚡", color: "from-green-200 to-yellow-300" },
  { name: "Sad", emoji: "😔", color: "from-gray-200 to-blue-200" },
];

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
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
        {demoMoods.map((mood) => (
          <div
            key={mood.name}
            className={`
              flex flex-col items-center justify-center rounded-2xl shadow-xl
              bg-gradient-to-br ${mood.color}
              hover:scale-105 hover:shadow-2xl transition-all duration-200 cursor-pointer
              h-48
            `}
          >
            <span className="text-5xl mb-2">{mood.emoji}</span>
            <span className="text-xl font-bold text-gray-700">{mood.name}</span>
          </div>
        ))}
      </main>
    </div>
  );
}
