import './App.css';
import Testimonio from './componentes/testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>CONOCE EL TESTIMONIO DE 3 ATLETAS QUE SE BENEFICIARON DEL PROGRAMA ATHLETE365 CAREER+</h1>
        <Testimonio
          nombre='LAWRENCE NDLOVU OLY'
          pais='SUDÁFRICA'
          imagen='lawrence'
          testimonio='Lawrence, medallista de oro en remo ligero a cuatro sin timonel en Londres 2012, asistió a un taller Career+ en Johannesburgo que le impulsó a planificar su vida tras la retirada del deporte.

«La sesión trataba sobre cómo desarrollar una trayectoria profesional tras la retirada de la competición de élite y fue una auténtica revelación. Nunca había pensado ni planeado mi futuro más allá del remo. Me aportó una visión y perspectiva nuevas de la vida», comenta Lawrence.

«Los ejercicios del taller también me permitieron aprender competencias decisivas, como hacer contactos y las técnicas para realizar entrevistas».'/>
        <Testimonio
          nombre='VERONICA DAY '
          pais='EE. UU.'
          imagen='Unknown'
          testimonio='Verónica, que practicó el salto de longitud y triple salto antes de dedicarse al skeleton, quiso asegurar sus perspectivas profesionales a largo plazo. Gracias a Athlete365 Career+, encontró una actividad flexible en marketing y organización de eventos que le permite trabajar a distancia, ideal para una atleta que viaja con frecuencia.

«Quiero asegurarme de que, cuando me retire del deporte, mi formación esté a la altura de la de cualquier otra persona en el mercado de trabajo», dice Verónica.

«Athlete365 Career+ me ha ayudado a conseguir un gran trabajo y a desarrollar mis habilidades profesionales mientras entreno y compito a nivel de élite».'/>
        <Testimonio 
          nombre='SUSANA FEITOR OLY'
          pais='PORTUGAL'
          imagen='susana'
          testimonio='Susana, marchadora veterana con cinco participaciones en los Juegos Olímpicos, estaba preocupada por la transición del deporte al mundo laboral hasta que encontró ayuda en Athlete365 Career+.

«Iba a dejar una carrera de 20 años y empezar otra, y eso era abrumador. El programa me ayudó a conocerme fuera del contexto deportivo y descubrir aptitudes útiles para mi vida profesional», afirma Susana.

«También me ayudó a conciliar la competición, el entrenamiento, los estudios, las amistades y la familia, y a crear una red de contactos para el éxito profesional. Valoro mucho el programa para los deportistas que buscan una carrera después del deporte».'/>
      </div>
    </div>
  );
}

export default App;
