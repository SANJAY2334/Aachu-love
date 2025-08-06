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
      title: 'Our First meet🧑‍🤝‍🧑',
      text: "It all started with a first meet at jspider and then I got feelings when we both were in the same team, we used do the presentation and that time I got that comfort, vibe and I just fell for you. my love you changed everything.",
    },
    {
      title: 'Our First date🫂',
      text: 'One heart, two souls, and infinite memories. We spoke lots of things and you just made my day sooo special and will always cherish forever. Secret Spot Caféನಲ್ಲಿ coffee ಶುರುವಾದ ಪ್ರೀತಿ… ಇಂದು ನನ್ನ ಬದುಕಿನ ಅರ್ಥವಾಗಿದೆಯೆನಿಸುತ್ತೆ  ನೀನು ❤ The first hug in jaynagar metro station, that feelings only was next level dear. Forever with you, Chai.'
    },
    {
      title: 'Our First Kiss😘',
      text: 'It was not planned. It was not grand. We did not think of anything and we just did it. It was just special and memorable which i will never forget. You just made me feel like I was in heaven chai.',
    },
    {
      title: 'Our First video call📞',
      text: 'We just started randomly and exactly on june 2nd night at 11:16pm which lasted for 47m and 57s. These memories are priceless and unforgettable. Our video call is very unique where we used to not talk only our actions used to speak😁 Defenitely we are a unique couple for a reason💏',
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
