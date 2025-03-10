import React from 'react';

const GuitarBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Guitar strings */}
      <div className="absolute inset-0 flex flex-col justify-between">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-full h-[3px] bg-purple-300"
            style={{
              opacity: 0.9 - i * 0.1,
              animation: `vibrate${i + 1} ${3 + i * 0.5}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Floating music notes */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl text-purple-400"
            style={{
              left: `${(i * 100) / 12}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.6,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {i % 2 === 0 ? '♪' : '♫'}
          </div>
        ))}
      </div>

      {/* Guitar fretboard markers */}
      <div className="absolute inset-0 flex justify-around items-center">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-6 h-6 rounded-full bg-purple-300"
            style={{
              opacity: 0.7,
              transform: `translateY(${(i % 2) * 50 - 25}px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GuitarBackground; 