import React, { useState } from 'react'
import VoiceAssistant from './VoiceAssistant'

const MOCK_PRODUCTS = [
  { id: 1, name: "Doritos", category: "Snacks", price: 2.99, healthy: false, sustainable: false },
  { id: 2, name: "Pepsi", category: "Beverages", price: 1.99, healthy: false, sustainable: false },
  { id: 3, name: "Microwave Popcorn", category: "Snacks", price: 3.49, healthy: false, sustainable: false },
  { id: 4, name: "Organic Apples", category: "Fruits", price: 4.99, healthy: true, sustainable: true },
  { id: 5, name: "Almond Milk", category: "Beverages", price: 3.99, healthy: true, sustainable: true }
]

const ProductSearch = ({ user, onShare, onJoin }) => {
  const [search, setSearch] = useState('')
  const [filtered, setFiltered] = useState(MOCK_PRODUCTS)
  const [cart, setCart] = useState([])

  const filterProducts = (criteria = {}) => {
    let result = MOCK_PRODUCTS.filter(p =>
      (!criteria.search || p.name.toLowerCase().includes(criteria.search.toLowerCase())) &&
      (!criteria.healthy || p.healthy) &&
      (!criteria.sustainable || p.sustainable)
    )
    setFiltered(result)
  }

  const handleSearch = e => {
    setSearch(e.target.value)
    filterProducts({ search: e.target.value })
  }

  const handleVoiceFilter = criteria => {
    filterProducts(criteria)
  }

  const addToCart = product => {
    setCart(prev => [...prev, product])
  }

  // Generate a random session ID for demo
  const handleShare = () => {
    const sessionId = Math.random().toString(36).substring(2, 8)
    onShare(sessionId)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-3xl font-bold mb-4 md:mb-0">Welcome, {user}!</h2>
        <div className="flex gap-2">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={handleShare}>
            Share Cart
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={onJoin}>
            Join Cart
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          className="border p-2 rounded w-full md:w-1/3"
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleSearch}
        />
      </div>
      <VoiceAssistant onVoiceFilter={handleVoiceFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filtered.map((p, i) => (
          <div key={i} className="bg-white p-4 rounded shadow flex flex-col">
            <h3 className="font-bold text-lg">{p.name}</h3>
            <p className="text-gray-600">Category: {p.category}</p>
            <p className="text-gray-600">Price: ${p.price}</p>
            <p className={`text-sm ${p.healthy ? 'text-green-600' : 'text-red-600'}`}>
              {p.healthy ? 'Healthy' : 'Not Healthy'}
            </p>
            <p className={`text-sm ${p.sustainable ? 'text-green-600' : 'text-red-600'}`}>
              {p.sustainable ? 'Sustainable' : 'Not Sustainable'}
            </p>
            <button
              className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              onClick={() => addToCart(p)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Your Cart</h3>
        <ul>
          {cart.map((item, idx) => (
            <li key={idx} className="mb-1">{item.name} (${item.price})</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductSearch