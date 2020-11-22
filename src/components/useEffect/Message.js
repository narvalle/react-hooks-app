import React, { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });

  const { x, y } = coords;

  const mouseMove = ({x, y}) => {
    setCoords({
        x: x,
        y: y,
      });
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseMove);
    return () =>{
        window.removeEventListener('mousemove', mouseMove);
    };
  }, [coords]);

  return (
    <h3>
      X: {x}, Y: {y}
    </h3>
  );
};
