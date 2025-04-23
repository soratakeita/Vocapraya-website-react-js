import React from "react";

const Background = () => {
  const dots = Array.from({ length: 80 });
  const animations = ["animate-floating1", "animate-floating2", "animate-floating3"];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      {dots.map((_, i) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const size = Math.random() * 10 + 5;
        const color = Math.random() > 0.5 ? "bg-pink-300" : "bg-blue-300";
        const blur = Math.random() > 0.1 ? "blur-sm" : "blur-md";
        const animation = animations[Math.floor(Math.random() * animations.length)];

        return (
          <div
            key={i}
            className={`absolute rounded-full ${color} ${animation}`}
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: 0.2,
            }}
          />
        );
      })}
    </div>
  );
};

export default Background;
