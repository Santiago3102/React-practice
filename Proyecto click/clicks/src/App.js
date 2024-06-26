
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import bootCampLogo from './imagenes/Bootcamp.jpeg';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='bootcamp-logo-contenedor'>
        <img 
          className='bootcamp-logo'
          src={bootCampLogo}
          alt='Logo de bootCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Click'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
