import React from 'react'

const HomePage = ({ onStart }) => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-green-400">
    <h1 className="text-5xl font-extrabold text-white mb-6">VoiceShop</h1>
    <p className="text-xl text-white mb-8">Shop smarter, together. Powered by voice and collaboration.</p>
    <button
      className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-blue-100 transition"
      onClick={onStart}
    >
      Start Shopping
    </button>
  </div>
)

export default HomePage