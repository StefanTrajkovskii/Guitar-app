import React from 'react';

const GuitarBackground: React.FC = () => {
  // Create wave layers
  const waves = Array.from({ length: 3 }, (_, i) => ({
    opacity: 0.1 - i * 0.02,
    delay: i * 1.5,
    duration: 7 + i * 2
  }));

  // Create geometric dots pattern
  const dots = Array.from({ length: 20 }, (_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 4
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Waves */}
      <div className="absolute inset-0">
        {waves.map((wave, i) => (
          <div
            key={i}
            className="absolute inset-x-0 h-[50vh] bottom-0"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, rgba(99, 102, 241, 0.03) 100%)',
              animation: `wave ${wave.duration}s ease-in-out infinite`,
              animationDelay: `${wave.delay}s`,
              opacity: wave.opacity,
              transform: 'translateY(50%)'
            }}
          />
        ))}
      </div>

      {/* Geometric Dots */}
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            top: dot.top,
            left: dot.left,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(99, 102, 241, 0.1))',
            animation: `pulse ${dot.duration}s ease-in-out infinite`,
            animationDelay: `${dot.delay}s`
          }}
        />
      ))}

      {/* Light Beam */}
      <div 
        className="absolute -top-1/4 left-1/4 w-1/2 h-[150vh] rotate-45 opacity-[0.02]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent)',
          animation: 'beam 8s ease-in-out infinite'
        }}
      />

      {/* Subtle Grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: 0.5
        }}
      />
    </div>
  );
};

export default GuitarBackground;
