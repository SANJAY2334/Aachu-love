import { useEffect } from 'react'

export default function Ending() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div
      className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://th.bing.com/th/id/R.300ed77fb60d9d8b06d622bdddba0f3c?rik=SPwvmpTOsxfEwA&riu=http%3a%2f%2fwww.textures4photoshop.com%2ftex%2fthumbs%2fpaper-texture-with-high-resolution-free-thumb39.jpg&ehk=jYvHKGGfSy5Qanaf5r0nQ9pCto3uw6JpGLKnaHFu07c%3d&risl=&pid=ImgRaw&r=0')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        fontFamily: `'Dancing Script', cursive`,
      }}
    >
      {/* Overlay for soft tint */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Love Letter Content */}
      <div
        className="relative z-10 max-w-3xl w-full text-left text-black text-xl md:text-2xl tracking-wide leading-loose"
        style={{
          whiteSpace: 'pre-wrap',
          animation: 'fadeInLetter 3s ease-out forwards',
          opacity: 0,
          backgroundColor: 'rgba(255,255,255,0.75)',
          padding: '3rem',
          borderRadius: '12px',
          boxShadow: '0 0 10px rgba(0,0,0,0.2)',
        }}
      >
        {`
From: Aachu
To: My dearest Chai

My Love,

As I sit down to write these words, my heart overflows with memories, moments, and the silent promises we've shared.

You walked into my life like a soft breeze unseen but deeply felt. With your smile, you healed pieces of me I never knew were broken. With your silence, you spoke the loudest comfort. And with your love, you gave me a world I never dreamed of asking for.

Every glance, every laugh, every time you said my name Ajay and sometimes Aachu they are chapters of a story I want to write forever.

I don’t know what life holds for us in the years ahead, but I know one thing that you will always be there for me to create more memeories. I promise i will always be there in hardest situations holding your hand and understanding you better. 

Chai, you showed me what love is, what honesty is, what trust is, you are a complete package of love, care, respect, honesty, and trust. You are MY EVERYTHING, MY SOULEMATE, MY FOREVER, MY LOVE, MY CHAI YOU ARE MY LIFE.

I want to write our stories together and there should be happiness, trust, understanding, care, support, sadness, love ... Only with you and i have dreamed lots of things which i want to bring into reality.

Forever yours,  
Aachu ❤️
        `}
      </div>

      {/* Static Rose Wax Seal (Transparent PNG) */}
      <img
        src="https://img.freepik.com/premium-psd/rose-wax-seal-isolated-transparent-background_838900-59010.jpg" // transparent rose wax seal
        alt="Rose Seal"
        className="w-25 mt-10 z-10"
        style={{ filter: 'drop-shadow(0 0 6px crimson)' }}
      />

      {/* Animation for letter fade-in */}
      <style>
        {`
          @keyframes fadeInLetter {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');
        `}
      </style>
    </div>
  )
}
