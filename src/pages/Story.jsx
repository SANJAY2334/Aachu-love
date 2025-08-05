import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Story() {
  const navigate = useNavigate()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  const fadeIn = (delay = 0) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(50px)',
    transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
  })

  const moments = [
    {
      title: 'The First kiss',
      text: "It all started wit0 65w6d4as6d4h a simple 'Hi' that changed everything.",
    },
    {
      title: 'The First Laugh',
      text: 'That moment we laughed together — I knew something was different.',
    },
    {
      title: 'The Long Talks',
      text: 'Midnight conversations turned into memories I never want to lose.',
    },
    {
      title: 'The First Touch',
      text: 'When your hand touched mine... the world felt quiet.',
    },
    {
      title: 'The Promise',
      text: 'From strangers to soulmates — this is our journey.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white py-16 px-6 relative overflow-hidden font-sans">

      {/* Floating Heart Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-vector/red-hearts-scattered-white-background_174187-23406.jpg')`,
          opacity: 0.02,
          animation: 'floatHearts 50s linear infinite',
        }}
      />

      <style>
        {`
          @keyframes floatHearts {
            0% { background-position: 0 0; }
            100% { background-position: 200px 200px; }
          }

          @keyframes pulseHeart {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.08); }
          }

          .glow-card:hover {
            box-shadow: 0 0 40px rgba(255,192,203,0.3);
            background: rgba(255,255,255,0.05);
            transform: scale(1.05);
          }
        `}
      </style>

      {/* Title */}
      <div className="z-10 relative text-center mb-16">
        <h1
          className="text-5xl md:text-6xl font-bold text-pink-400 mb-2"
          style={{ animation: 'pulseHeart 2.5s ease-in-out infinite' }}
        >
          ❤️ Our Story
        </h1>
        <p className="text-lg text-gray-300 italic">
          Every great love story begins with a moment worth remembering...
        </p>
      </div>

      {/* Moments Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto z-10 relative">
        {moments.map((moment, index) => (
          <div
            key={index}
            style={fadeIn(index * 0.2)}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg transition-all duration-500 glow-card"
          >
            <h2 className="text-2xl md:text-3xl text-pink-300 mb-3 font-semibold font-serif">
              {moment.title}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {moment.text}
            </p>
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <div style={fadeIn(moments.length * 0.2 + 0.5)} className="text-center mt-20 z-10 relative">
        <button
          onClick={() => navigate('/proposal')}
          className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-3 rounded-full shadow-2xl text-xl transition transform hover:scale-105"
        >
          Continue to the Big Question ❤️
        </button>
      </div>
    </div>
  )
}
