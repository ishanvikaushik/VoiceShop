// filepath: c:\Users\Ishanvi Kaushik\Documents\voiceshop\frontend\src\components\VoiceAssistant.jsx
import React, { useState } from 'react'

const VoiceAssistant = ({ onVoiceFilter }) => {
  const [listening, setListening] = useState(false)
  const [transcript, setTranscript] = useState('')

  const handleVoice = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Voice recognition not supported in this browser.')
      return
    }
    const recognition = new window.webkitSpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = 'en-US'

    recognition.onstart = () => setListening(true)
    recognition.onresult = event => {
      const text = event.results[0][0].transcript
      setTranscript(text)
      // Simple parsing for MVP
      let criteria = {}
      if (text.toLowerCase().includes('healthy')) criteria.healthy = true
      if (text.toLowerCase().includes('sustainable')) criteria.sustainable = true
      if (text.toLowerCase().includes('snack')) criteria.search = 'snack'
      if (text.toLowerCase().includes('beverage')) criteria.search = 'beverage'
      onVoiceFilter(criteria)
    }
    recognition.onerror = () => setListening(false)
    recognition.onend = () => setListening(false)
    recognition.start()
  }

  return (
    <div className="my-4 flex items-center gap-4">
      <button
        className={`px-4 py-2 rounded ${listening ? 'bg-red-500' : 'bg-blue-500'} text-white`}
        onClick={handleVoice}
        disabled={listening}
      >
        {listening ? 'Listening...' : 'Voice Filter'}
      </button>
      <span className="text-gray-700">{transcript}</span>
    </div>
  )
}

export default VoiceAssistant