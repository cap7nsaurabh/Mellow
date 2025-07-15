
"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Music } from "lucide-react";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <nav className="w-full bg-white/90 shadow flex items-center justify-between px-6 py-3 sticky top-0 z-30">
      {/* Logo + Brand */}
      <div className="flex items-center gap-2">
        <Music className="w-7 h-7 text-purple-500" />
        <span className="text-xl font-bold text-gray-800 tracking-tight">Mellow</span>
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-6">
        <Link href="/dashboard" className="text-gray-700 hover:text-purple-600 font-semibold">
          Dashboard
        </Link>
        {session?.user?.name && (
          <span className="hidden sm:inline text-gray-500">
            Hi, <span className="font-semibold">{session.user.name}</span>
          </span>
        )}
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="ml-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl font-semibold shadow transition"
        >
          Log out
        </button>
      </div>
    </nav>
  );
}
