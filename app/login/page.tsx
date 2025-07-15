'use client';
import { Lock, Mail } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError('Invalid email or password.');
      setLoading(false);
    } else {
      router.push('/dashboard'); // <-- redirect to dashboard!
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <Lock className="w-10 h-10 text-purple-500 mb-2" />
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Log in to Mellow</h2>
          <p className="text-gray-500">Welcome back! Please enter your details.</p>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
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
                placeholder="••••••••"
                className="bg-transparent focus:outline-none w-full"
                autoComplete="current-password"
              />
            </div>
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-xl font-semibold shadow transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>
        <div className="text-center mt-6 text-sm text-gray-600">
          Don't have an account?{' '}
          <Link href="/signup" className="text-purple-500 hover:underline font-semibold">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
