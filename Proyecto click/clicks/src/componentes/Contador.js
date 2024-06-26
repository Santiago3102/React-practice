import React, { useEffect, useState } from 'react';
import '../hojas-de-estilo/Contador.css';

function Contador({ numClics }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (numClics > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 300); // Duración de la animación
      return () => clearTimeout(timer);
    }
  }, [numClics]);

  return (
    <div className={`contador ${animate ? 'animate' : ''}`}>
      {numClics}
    </div>
  );   
}

export default Contador;
