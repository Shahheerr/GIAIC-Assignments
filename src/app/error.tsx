'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold text-slate-800 mb-4">Oops! Something went wrong.</h1>
      <p className="text-xl text-slate-600 mb-8">We apologize for the inconvenience. Please try again later.</p>
      <button
        onClick={() => reset()}
        className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition duration-300"
      >
        Try again
      </button>
    </div>
  )
}