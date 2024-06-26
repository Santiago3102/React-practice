import React from 'react';
import '../hoja-de-estilos/testimonio.css';

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../imagenes/${props.imagen}.jpeg`)}
        alt='Foto de Lawrence'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}, {props.pais}</strong>
        </p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;