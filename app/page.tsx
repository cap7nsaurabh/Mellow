'use client';
import { Music, Moon, Headphones, Timer, Smile } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      {/* Nav / Auth Buttons */}
      <nav className="w-full flex justify-end items-center px-8 pt-6 absolute top-0 left-0 z-20">
        <a
          href="/login"
          className="text-gray-700 hover:text-purple-600 font-medium mr-4 transition"
        >
          Log in
        </a>
        <a
          href="/signup"
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-xl font-semibold shadow transition"
        >
          Sign up
        </a>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center pt-24 pb-8">
        <div className="flex items-center mb-2">
          <Music className="w-10 h-10 text-purple-500 mr-2" />
          <span className="text-4xl font-bold text-gray-800 tracking-tight">Mellow</span>
        </div>
        <p className="text-xl text-gray-600 mb-6 text-center">Find your calm. Anytime. Anywhere.</p>
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-2xl shadow-lg text-lg font-semibold transition">
          Start Listening
        </button>
      </header>

      {/* Features */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Why Mellow?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <Music className="mx-auto w-8 h-8 text-purple-400 mb-2" />
            <p className="font-semibold text-gray-700">Curated Playlists</p>
            <p className="text-gray-500 text-sm">Carefully selected music for ultimate relaxation.</p>
          </div>
          <div>
            <Moon className="mx-auto w-8 h-8 text-purple-400 mb-2" />
            <p className="font-semibold text-gray-700">Sleep, Focus, Relax</p>
            <p className="text-gray-500 text-sm">Sounds for every mood and moment.</p>
          </div>
          <div>
            <Headphones className="mx-auto w-8 h-8 text-purple-400 mb-2" />
            <p className="font-semibold text-gray-700">Offline Listening</p>
            <p className="text-gray-500 text-sm">Listen anywhere, even without internet.</p>
          </div>
          <div>
            <Timer className="mx-auto w-8 h-8 text-purple-400 mb-2" />
            <p className="font-semibold text-gray-700">Timer & Scheduling</p>
            <p className="text-gray-500 text-sm">Set sessions that fit your routine.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-10">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="flex flex-col items-center">
            <Smile className="w-10 h-10 text-purple-400 mb-2" />
            <span className="font-semibold">Pick Your Mood</span>
            <span className="text-gray-500 text-sm">Choose how you want to feel</span>
          </div>
          <span className="text-3xl text-gray-400 font-thin hidden md:inline">→</span>
          <div className="flex flex-col items-center">
            <Headphones className="w-10 h-10 text-purple-400 mb-2" />
            <span className="font-semibold">Press Play</span>
            <span className="text-gray-500 text-sm">Instant calming music starts</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-2xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-purple-50 p-4 rounded-xl shadow">
            <p className="text-gray-700 mb-2">“Mellow helps me wind down after stressful days. The sleep sounds are amazing!”</p>
            <span className="text-gray-500 text-sm">– Priya</span>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl shadow">
            <p className="text-gray-700 mb-2">“I love the offline mode for flights and commutes. Game changer!”</p>
            <span className="text-gray-500 text-sm">– Rohan</span>
          </div>
        </div>
      </section>

      {/* Download / Signup */}
      <section className="flex flex-col items-center py-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Get Mellow on your device</h3>
        <div className="flex gap-4">
          <a
            href="#"
            className="bg-black text-white px-5 py-3 rounded-xl shadow hover:opacity-90 transition"
          >
            App Store
          </a>
          <a
            href="#"
            className="bg-black text-white px-5 py-3 rounded-xl shadow hover:opacity-90 transition"
          >
            Google Play
          </a>
          <a
            href="#"
            className="bg-purple-500 text-white px-5 py-3 rounded-xl shadow hover:bg-purple-600 transition"
          >
            Web App
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 border-t border-gray-200 text-center text-gray-500 text-sm">
        <div className="flex justify-center gap-6 mb-2">
          <a href="#" aria-label="Twitter" className="hover:text-purple-500">Twitter</a>
          <a href="#" aria-label="Instagram" className="hover:text-purple-500">Instagram</a>
          <a href="#" aria-label="Contact" className="hover:text-purple-500">Contact</a>
        </div>
        <div>© {new Date().getFullYear()} Mellow. All rights reserved.</div>
      </footer>
    </div>
  );
}
