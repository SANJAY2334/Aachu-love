import { useState } from 'react'
import confetti from 'canvas-confetti'
import emailjs from '@emailjs/browser'

export default function Proposal() {
  const [accepted, setAccepted] = useState(false)
  const [loveMessage, setLoveMessage] = useState('')

  // 🌹 Create rose petals
  const createPetals = () => {
    for (let i = 0; i < 20; i++) {
      const petal = document.createElement('div')
      petal.innerText = '🌹'
      petal.style.position = 'fixed'
      petal.style.left = `${Math.random() * 100}vw`
      petal.style.top = `-5vh`
      petal.style.fontSize = `${24 + Math.random() * 16}px`
      petal.style.animation = `fall ${5 + Math.random() * 5}s linear ${Math.random()}s forwards`
      document.body.appendChild(petal)

      setTimeout(() => petal.remove(), 10000)
    }
  }

  const handleAccept = () => {
    confetti({
      particleCount: 300,
      spread: 160,
      origin: { y: 0.6 },
      colors: ['#ff69b4', '#ffccff', '#ffffff'],
    })

    const now = new Date()
    const formatted = now.toLocaleString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

    const loveNote = `She said yes on ${formatted} — a moment I’ll cherish forever.`
    setLoveMessage(loveNote)

    // 💌 Send Email via EmailJS
    emailjs.send(
      'service_cnaxq5r',     // 🔁 Replace this
      'template_s5u203o',    // 🔁 Replace this
      {
        to_name: 'Aachu',
        from_name: 'Chai',
        message: loveNote,
      },
      'T5hVLxSox5GPRSxzK'      // 🔁 Replace this
    ).then(
      (response) => {
        console.log('✅ Email sent!', response)
      },
      (error) => {
        console.error('❌ Email failed:', error)
      }
    )

    createPetals()
    setAccepted(true)
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #000000 100%)',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '1rem',
      }}
      className="text-white"
    >
      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(120vh) rotate(360deg); opacity: 0; }
          }

          @keyframes soulRing {
            0% { box-shadow: 0 0 0 0 rgba(255,192,203,0.6); }
            70% { box-shadow: 0 0 60px 30px rgba(255,192,203,0); }
            100% { box-shadow: 0 0 0 0 rgba(255,192,203,0); }
          }

          @keyframes buttonPulse {
            0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(255,105,180,0.5); }
            50% { transform: scale(1.05); box-shadow: 0 0 40px rgba(255,105,180,0.8); }
          }
        `}
      </style>

      {!accepted ? (
        <>
          <h1 className="text-4xl md:text-5xl font-light mb-6">
            I have one last question...
          </h1>

          <h2 className="text-3xl md:text-4xl text-pink-400 font-semibold mb-12">
            Will you marry me? 💍
          </h2>

          <button
            onClick={handleAccept}
            style={{
              backgroundColor: '#ff69b4',
              color: 'white',
              fontSize: '1.3rem',
              padding: '0.75rem 2rem',
              borderRadius: '999px',
              boxShadow: '0 0 20px rgba(255,105,180,0.4)',
              animation: 'buttonPulse 2s infinite',
            }}
          >
            Yes ❤️
          </button>
        </>
      ) : (
        <div
          style={{
            animation: 'soulRing 1.5s ease-out',
            padding: '2rem',
            borderRadius: '20px',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 50px rgba(255,192,203,0.3)',
            zIndex: 2,
          }}
        >
          <h1 className="text-5xl font-bold text-pink-400 mb-6">
            She said YES! 💖
          </h1>

          <p className="text-xl text-gray-300 max-w-xl mx-auto leading-relaxed mb-6">
            This is not the end.<br />
            This is the beginning of forever...<br />
            And I can't wait to live every second of it with you. 🌹
          </p>

          {loveMessage && (
            <p className="text-md text-pink-300 italic mb-4">
              {loveMessage}
            </p>
          )}

          <button
            onClick={() => (window.location.href = '/slideshow')}
            className="mt-6 px-6 py-2 bg-white/10 text-white border border-white/20 rounded-full hover:bg-white/20 transition"
          >
            Memories🤳
          </button>
        </div>
      )}
    </div>
  )
}
