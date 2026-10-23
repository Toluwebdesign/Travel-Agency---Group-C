import { useState } from 'react';
import { authClient } from '../auth-client';

function AuthModal({ onClose }) {
  const [mode, setMode] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setLoading(true);

    const result =
      mode === 'signup'
        ? await authClient.signUp.email({ name, email, password })
        : await authClient.signIn.email({ email, password });

    setLoading(false);

    if (result.error) {
      setError(result.error.message || 'Something went wrong');
    } else {
      onClose();
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-slate-900">
        <h2 className="text-xl font-bold">
          {mode === 'signup' ? 'Create account' : 'Log in'}
        </h2>

        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
          {mode === 'signup' && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="rounded-lg border border-slate-300 px-3 py-2"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-lg border border-slate-300 px-3 py-2"
          />
          <input
            type="password"
            placeholder="Password (min 8 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            className="rounded-lg border border-slate-300 px-3 py-2"
          />

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-amber-600 disabled:opacity-50"
          >
            {loading ? 'Please wait...' : mode === 'signup' ? 'Sign up' : 'Log in'}
          </button>
        </form>

        <button
          type="button"
          onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')}
          className="mt-4 text-sm text-slate-600 underline"
        >
          {mode === 'signup'
            ? 'Already have an account? Log in'
            : 'New here? Create an account'}
        </button>

        <button
          type="button"
          onClick={onClose}
          className="mt-2 block text-sm text-slate-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AuthModal;