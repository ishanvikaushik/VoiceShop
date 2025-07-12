
import './App.css'

import React, { useState } from 'react'
import HomePage from './components/HomePage'
import Login from './components/Login'
import ProductSearch from './components/ProductSearch'
import SharedCart from './components/SharedCart'
import CollaboratorJoin from './components/CollaboratorJoin'

const App = () => {
  const [page, setPage] = useState('home')
  const [user, setUser] = useState(null)
  const [sessionId, setSessionId] = useState(null)

  if (page === 'home') return <HomePage onStart={() => setPage('login')} />
  if (page === 'login') return <Login onLogin={u => { setUser(u); setPage('search') }} />
  if (page === 'search') return (
    <ProductSearch
      user={user}
      onShare={sid => { setSessionId(sid); setPage('shared') }}
      onJoin={() => setPage('join')}
    />
  )
  if (page === 'shared') return (
    <SharedCart user={user} sessionId={sessionId} onBack={() => setPage('search')} />
  )
  if (page === 'join') return (
    <CollaboratorJoin
      onJoin={(sid, u) => { setSessionId(sid); setUser(u); setPage('shared') }}
      onBack={() => setPage('search')}
    />
  )
  return null
}

export default App