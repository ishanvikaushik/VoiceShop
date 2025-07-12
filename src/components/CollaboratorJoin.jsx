import React, { useState } from 'react'

const CollaboratorJoin = ({ onJoin, onBack }) => {
  const [sessionId, setSessionId] = useState('')
  const [username, setUsername] = useState('')

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <button className="mb-4 bg-gray-200 px-3 py-1 rounded" onClick={onBack}>← Back</button>
        <h2 className="text-2xl font-bold mb-4">Join a Shared Cart</h2>
        <input
          className="border p-2 rounded w-full mb-4"
          type="text"
          placeholder="Session ID"
          value={sessionId}
          onChange={e => setSessionId(e.target.value)}
        />
        <input
          className="border p-2 rounded w-full mb-4"
          type="text"
          placeholder="Your Name"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
          onClick={() => onJoin(sessionId, username)}
        >
          Join
        </button>
      </div>
    </div>
  )
}

export default CollaboratorJoin