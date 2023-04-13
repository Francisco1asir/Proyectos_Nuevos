import React from 'react'
import './Home.css'


export const Home = () => {
  return (
    <section id='homepage'>
      <h1 id='tittle'> Home Page</h1>
      <p id='intro'>En este portfolio el cuál ha sido creado mediante el framework "ReactJS" a parte del uso de typescript un poco de javascript y obviamente html y css se mostrarán los diferentes proyectos que ha realizado Francisco a lo largo de su trayectoria, los cuáles han sido creados con diferentes lenguajes.</p>
      <p>También se presentará la formación que ha obtenido Francisco a lo largo de su trayectoria para una mayor información de Francisco y conocerle un poco mejor y conocer tanto sus estudios como cursos ajenos. </p>
      <p>A continuación, se presenta en formato de porcentaje la cantidad de sabiduría que posee Francisco sobre cada lenguaje:</p>
      <br />
      <h2>HTML</h2>
      <div className="progress-html">
        <div className="progress-bar-html">
          <span className="progress-bar-text-html">75%</span>
        </div>
      </div>
      <h2>CSS</h2>
      <div className="progress-css">
        <div className="progress-bar-css">
          <span className="progress-bar-text-css">70%</span>
        </div>
      </div>
      <h2>JS</h2>
      <div className="progress-js">
        <div className="progress-bar-js">
          <span className="progress-bar-text-js">13%</span>
        </div>
      </div>
      <h2>React</h2>
      <div className="progress-react">
        <div className="progress-bar-react">
          <span className="progress-bar-text-react">21%</span>
        </div>
      </div>
      <h2>PHP</h2>
      <div className="progress-php">
        <div className="progress-bar-php">
          <span className="progress-bar-text-php">34%</span>
        </div>
      </div>

    </section>
  )
}
