// src/pages/Landing.jsx
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Landing() {
  const navigate = useNavigate()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  const fadeIn = (delay = 0) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  })

  return (
    <div className="relative h-screen w-full bg-gradient-to-br from-black via-purple-900 to-black flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Floating Hearts */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '20px',
            height: '20px',
            background: 'url(https://cdn-icons-png.flaticon.com/512/833/833472.png)',
            backgroundSize: 'contain',
            opacity: 0.4 + Math.random() * 0.3,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `floatUp ${5 + Math.random() * 5}s ease-in-out infinite`,
            transform: 'translateY(0)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
      ))}

      {/* Sparkle Dust Overlay */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `radial-gradient(white 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          opacity: 0.05,
          animation: 'sparkleShift 60s linear infinite',
          zIndex: 0,
        }}
      />

      {/* Fade-in Content */}
      <h1
        className="text-4xl md:text-6xl text-white font-light z-10"
        style={fadeIn(0)}
      >
        Some stories don't begin with once upon a time.
      </h1>

      <h2
        className="text-xl md:text-3xl text-gray-300 mt-4 z-10"
        style={fadeIn(0.5)}
      >
        They begin with a smile... a glance... and a feeling you can never explain.
      </h2>

      <p
        className="text-md md:text-xl text-pink-400 italic mt-6 z-10"
        style={fadeIn(1)}
      >
        This is ours.
      </p>

      <button
        onClick={() => navigate('/story')}
        className="mt-12 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full shadow-xl transition-all z-10"
        style={fadeIn(1.5)}
      >
        Begin Our Story ❤️
      </button>

      {/* Keyframes injected inline */}
      <style>
        {`
          @keyframes floatUp {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0.2;
            }
            50% {
              transform: translateY(-50vh) scale(1.2);
              opacity: 0.5;
            }
            100% {
              transform: translateY(-100vh) scale(1);
              opacity: 0;
            }
          }

          @keyframes sparkleShift {
            0% { background-position: 0 0; }
            100% { background-position: 100px 100px; }
          }
        `}
      </style>
    </div>
  )
}
