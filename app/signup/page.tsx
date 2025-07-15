'use client';
import { User, Mail, Lock } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;

    const res = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      setSuccess(true);
      setTimeout(() => router.push('/login'), 1500);
    } else {
      const data = await res.json();
      setError(data.error || 'Signup failed.');
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <User className="w-10 h-10 text-purple-500 mb-2" />
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Sign up for Mellow</h2>
          <p className="text-gray-500">Create your free account</p>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <div className="flex items-center border rounded-xl px-3 py-2 bg-gray-50">
              <User className="w-5 h-5 text-purple-400 mr-2" />
              <input
                name="name"
                type="text"
                required
                placeholder="Your Name"
                className="bg-transparent focus:outline-none w-full"
                autoComplete="name"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="flex items-center border rounded-xl px-3 py-2 bg-gray-50">
              <Mail className="w-5 h-5 text-purple-400 mr-2" />
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="bg-transparent focus:outline-none w-full"
                autoComplete="email"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="flex items-center border rounded-xl px-3 py-2 bg-gray-50">
              <Lock className="w-5 h-5 text-purple-400 mr-2" />
              <input
                name="password"
                type="password"
                required
                placeholder="Create a password"
                className="bg-transparent focus:outline-none w-full"
                autoComplete="new-password"
              />
            </div>
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          {success && <div className="text-green-500 text-sm">Signup successful! Redirecting...</div>}
          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-xl font-semibold shadow transition"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign up"}
          </button>
        </form>
        <div className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="text-purple-500 hover:underline font-semibold">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
