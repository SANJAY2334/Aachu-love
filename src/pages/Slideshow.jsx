import { useState, useEffect } from 'react'

const slides = [
  {
    image: '/photos/first-date.jpg',
    memory: 'Our first coffee date — I still remember your nervous smile.',
  },
  {
    image: '/photos/beach.jpg',
    memory: 'The sea breeze, your laughter, and that perfect sunset.',
  },
  {
    image: '/photos/travel.jpg',
    memory: 'Lost in a new city, but found home in your eyes.',
  },
  {
    image: '/photos/birthday.jpg',
    memory: 'You made my birthday unforgettable — your love was the best gift.',
  },
  {
    image: '/photos/best.jpg',
    memory: 'This one… my favorite. Us. In our purest joy.',
    highlight: true,
  },
]

export default function Slideshow() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const current = slides[index]

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden flex flex-col justify-center items-center text-white px-4">
      {/* Sparkle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGIybjNsOGJqdnZkeWtzNnljOHR2Z2R3ZjBsYXNwZXk2aW4ya2t5ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IjmMzurYulKEw/giphy.gif')] bg-cover opacity-20" />
      </div>

      {/* Polaroid Card */}
      <div
        className={`relative z-10 bg-white text-black rounded-lg shadow-2xl p-4 transition-all duration-1000 ${
          current.highlight ? 'scale-105 border-4 border-pink-300' : 'border-2 border-gray-200'
        }`}
        style={{
          width: '300px',
          maxWidth: '80vw',
          height: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          transform: 'rotate(-1.5deg)',
          animation: 'fadeIn 1s ease-in-out',
        }}
      >
        <img
          src={current.image}
          alt="memory"
          className="w-full h-[320px] object-fit rounded-md border border-gray-300"
        />
        <p className="text-center mt-2 italic font-medium text-pink-600 text-sm px-2">
          {current.memory}
        </p>
      </div>

      {/* Replay and Ending Buttons */}
      {index === slides.length - 1 && (
        <div className="mt-10 flex gap-4 z-10">
          <button
            onClick={() => setIndex(0)}
            className="px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-lg"
          >
            🔁 Replay the Slideshow
          </button>

          <button
            onClick={() => (window.location.href = '/ending')}
            className="px-5 py-2 bg-white/10 border border-white/20 text-white rounded-full hover:bg-white/20 transition"
          >
            ✉️ Love Letter Ending
          </button>
        </div>
      )}

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  )
}
