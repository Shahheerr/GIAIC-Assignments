import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-slate-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-slate-700 mb-4">Page Not Found</h2>
      <p className="text-xl text-slate-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link 
        href="/"
        className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  )
}