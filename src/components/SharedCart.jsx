import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { ref, onValue, set, push } from 'firebase/database'

const SharedCart = ({ user, sessionId, onBack }) => {
  const [cart, setCart] = useState([])
  const [input, setInput] = useState('')
  const [votes, setVotes] = useState({})

  useEffect(() => {
    const cartRef = ref(db, `carts/${sessionId}/items`)
    onValue(cartRef, snapshot => {
      const data = snapshot.val() || {}
      setCart(Object.entries(data).map(([id, item]) => ({ id, ...item })))
    })
  }, [sessionId])

  const addItem = () => {
    if (!input) return
    const cartRef = ref(db, `carts/${sessionId}/items`)
    const newItemRef = push(cartRef)
    set(newItemRef, { name: input, votes: 1 })
    setInput('')
  }

  const vote = id => {
    const itemRef = ref(db, `carts/${sessionId}/items/${id}/votes`)
    set(itemRef, (votes[id] || 1) + 1)
    setVotes(v => ({ ...v, [id]: (v[id] || 1) + 1 }))
  }

  return (
    <div className="min-h-screen bg-white p-6">
      <button className="mb-4 bg-gray-200 px-3 py-1 rounded" onClick={onBack}>← Back</button>
      <h2 className="text-2xl font-bold mb-4">Shared Cart (Session: {sessionId})</h2>
      <div className="mb-4 flex gap-2">
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Add product"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={addItem}>Add</button>
      </div>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="flex items-center gap-4 mb-2">
            <span className="font-bold">{item.name}</span>
            <span className="bg-green-200 px-2 rounded">Votes: {item.votes || 1}</span>
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
              onClick={() => vote(item.id)}
            >
              Vote
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SharedCart