import { useEffect, useState } from "react";

// id, size, x, y, opacity, duration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
      generateMeteors();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerHeight * window.innerWidth) / 10000
    );

    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      const size = Math.random() * 3 + 1; // Random size between 1 and 3
      const x = Math.random() * 100; // Random x position in percentage
      const y = Math.random() * 100; // Random y position in percentage
      const opacity = Math.random() * 0.5 + 0.5; // Random opacity between 0 and 1
      const duration = Math.random() * 4 + 2; // Random duration between 5 and 10 seconds

      newStars.push({
        id: i,
        size,
        x,
        y,
        opacity,
        duration,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;

    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      const size = Math.random() * 2 + 1; // Random size between 1 and 3
      const x = Math.random() * 100; // Random x position in percentage
      const y = Math.random() * 20; // Random y position in percentage
      const opacity = Math.random() * 15; // Random opacity between 0 and 1
      const duration = Math.random() * 3 + 3; // Random duration between 5 and 10 seconds

      newMeteors.push({
        id: i,
        size,
        x,
        y,
        opacity,
        duration,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 50}px`,
            height: `${meteor.size * 3}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: meteor.opacity,
            animationDuration: `${meteor.duration}s`,
          }}
        />
      ))}
    </div>
  );
};
