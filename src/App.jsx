import { useRef, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Story from './pages/Story'
import Proposal from './pages/Proposal'
import Slideshow from './pages/Slideshow'
import Ending from './pages/Ending'

export default function App() {
  const audioRef = useRef(null)
  const [audioStarted, setAudioStarted] = useState(false)

  useEffect(() => {
    audioRef.current = new Audio('/assets/bg-music.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.4
    audioRef.current.currentTime = 0.5
  }, [])

  const startAudio = async () => {
    try {
      await audioRef.current.play()
      setAudioStarted(true)
    } catch (err) {
      console.log('🔇 Autoplay blocked:', err)
    }
  }

  return (
    <Router>
      {!audioStarted && (
        <button
  onClick={() => {
    if (!audioStarted) {
      startAudio()
    } else {
      const audio = audioRef.current
      audio.muted = !audio.muted
      setAudioMuted(audio.muted)
    }
  }}
  className="fixed top-6 right-6 z-50 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg transition"
>
  {!audioStarted
    ? '🔊 Tap to Start Music'
    : audioMuted
    ? '🔇 Unmute'
    : '🔊 Mute'}
</button>
      )}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/story" element={<Story />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/slideshow" element={<Slideshow />} />
        <Route path="/ending" element={<Ending />} />
      </Routes>
    </Router>
  )
}
