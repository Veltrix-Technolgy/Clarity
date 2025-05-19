export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-center px-4 text-white">
      <h1 className="text-6xl md:text-7xl font-extrabold mb-6">CLARITY</h1>
      <p className="text-lg mb-6">
        Focus better with notes and a built-in Pomodoro timer.
      </p>
      <div className="space-x-4">
        <a
          href="/auth/login"
          className="px-6 py-2 bg-white text-blue-700 font-semibold rounded hover:bg-gray-100 transition"
        >
          Login
        </a>
        <a
          href="/auth/register"
          className="px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-purple-700 transition"
        >
          Register
        </a>
      </div>
    </main>
  );
}
