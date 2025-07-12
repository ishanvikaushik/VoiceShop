import React from 'react'
import { auth, googleProvider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'

const Login = ({ onLogin }) => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const user = result.user
      onLogin(user.displayName || user.email)
    } catch (error) {
      alert('Google sign-in failed.')
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <button
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full justify-center"
          onClick={handleGoogleLogin}
        >
          <svg width="24" height="24" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303C33.91 32.062 29.28 35 24 35c-6.065 0-11-4.935-11-11s4.935-11 11-11c2.507 0 4.813.857 6.646 2.278l6.364-6.364C33.527 6.527 28.977 5 24 5 12.954 5 4 13.954 4 25s8.954 20 20 20c11.046 0 20-8.954 20-20 0-1.341-.138-2.651-.389-3.917z"/><path fill="#34A853" d="M6.306 14.691l6.571 4.819C14.655 16.347 19.01 13 24 13c2.507 0 4.813.857 6.646 2.278l6.364-6.364C33.527 6.527 28.977 5 24 5c-6.065 0-11 4.935-11 11 0 1.657.338 3.236.947 4.691z"/><path fill="#FBBC05" d="M24 43c5.177 0 9.807-1.977 13.303-5.188l-6.146-5.033C29.813 34.143 27.507 35 24 35c-5.28 0-9.91-2.938-12.303-7.083l-6.571 4.819C8.193 39.473 15.954 43 24 43z"/><path fill="#EA4335" d="M43.611 20.083H42V20H24v8h11.303c-1.938 3.938-6.568 7.083-11.303 7.083-5.28 0-9.91-2.938-12.303-7.083l-6.571 4.819C8.193 39.473 15.954 43 24 43c6.065 0 11-4.935 11-11 0-1.341-.138-2.651-.389-3.917z"/></g></svg>
          Sign in with Google
        </button>
      </div>
    </div>
  )
}

export default Login