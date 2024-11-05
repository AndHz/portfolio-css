

import './globals.scss'; // Asegúrate de importar tu archivo SASS
import Image from 'next/image';

export default function Home() {
  
  return (

    <div>
      <section className="contenido">
        <p className="c1">Software Developer</p>
        <h1 className="c12">Hola soy André</h1>
        <p className="c13"> Soy un desarrollador de software apasionado por la tecnología y el diseño. Con experiencia en &quot;Next.js, Spring Boot, SCSS, Java&quot;, me encanta construir soluciones innovadoras y optimizadas para mejorar la experiencia del usuario. A lo largo de mi carrera, he trabajado en proyectos de aplicaciones web y sistemas de gestión, siempre buscando implementar las mejores prácticas en eficiencia, calidad y diseño.</p>
        <a href="https://github.com/AndHz" className="download-cv">Descargar CV</a>
        <Image src="../llamas.png" alt="Imagen de contenido"className="perfil-image"/>
      </section>

      <div className="barra">
      <div className="texto">✦ ACCESIBILIDAD <span className="separador">✦</span> CALIDAD <span className="separador">✦</span> DESIGN THINKING <span className="separador">✦</span> INTEGRIDAD ✦</div>
      </div>


      <section className="projects">
        <p className="uptitle2">Software Developer</p>
        <h2 className="title2">Proyectos</h2>
        <p className="subtitle2">&quot;¡Echa un vistazo y descubre lo que puedo crear!&quot;</p>
        <div className="project-block">
          <div className="project-info">
            <h3>Título del Proyecto 1</h3>
            <p>Este proyecto es una tienda online que la empresa tal requeria Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, iste. Esse magnam, consectetur repellat culpa dicta officia recusandae! Voluptate rerum ducimus repellendus ipsum distinctio blanditiis, quidem asperiores voluptas mollitia omnis?</p>
            <p className='lenguajes'><strong>Lenguajes:</strong> JavaScript | HTML | CSS5</p>
            <a href="https://github.com/AndHz/portfolio-css" className="project-button"><strong>Revisar</strong></a>
            <Image src="../llamas.png" alt="Imagen del Proyecto 1" className="project-image" /> 
          </div>
        </div>
        
        <div className="project-block">
          <div className="project-info">
            <h3>Título del Proyecto 2</h3>
            <p>Descripción del proyecto 2.</p>
            <p className='lenguajes'><strong>Lenguaje:</strong> Python</p>
            <a href="https://github.com/AndHz/portfolio-css" className="project-button"><strong>Revisar</strong></a>
          </div>
          <Image src="../llamas.png" alt="Imagen del Proyecto 2" className="project-image" />
        </div>
        
        <div className="project-block">
          <div className="project-info">
            <h3>Título del Proyecto 1</h3>
            <p>Este proyecto es una tienda online que la empresa tal requeria Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, iste. Esse magnam, consectetur repellat culpa dicta officia recusandae! Voluptate rerum ducimus repellendus ipsum distinctio blanditiis, quidem asperiores voluptas mollitia omnis?</p>
            <p className='lenguajes'><strong>Lenguajes:</strong> JavaScript | HTML | CSS5</p>
            <a href="https://github.com/AndHz/portfolio-css" className="project-button"><strong>Revisar</strong></a>
            <Image src="../llamas.png" alt="Imagen del Proyecto 1" className="project-image" /> 
          </div>
        </div>

        <div className="project-block">
          <div className="project-info">
            <h3>Título del Proyecto 1</h3>
            <p>Este proyecto es una tienda online que la empresa tal requeria Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, iste. Esse magnam, consectetur repellat culpa dicta officia recusandae! Voluptate rerum ducimus repellendus ipsum distinctio blanditiis, quidem asperiores voluptas mollitia omnis?</p>
            <p className='lenguajes'><strong>Lenguajes:</strong> JavaScript | HTML | CSS5</p>
            <a href="https://github.com/AndHz/portfolio-css" className="project-button"><strong>Revisar</strong></a>
            <Image src="../llamas.png" alt="Imagen del Proyecto 1" className="project-image" /> 
          </div>
        </div>

      </section>

      <div className="barra2">
        <div className="texto">✦ ACCESIBILIDAD <span className="separador">✦</span> CALIDAD <span className="separador">✦</span> DESIGN THINKING <span className="separador">✦</span> INTEGRIDAD ✦</div>
      </div>

      <section className="about">
        <h2>Acerca de mí</h2>
        <h1>SKILLS</h1>
        <div className="skills">
          <div className='skillstec'>
            <h3>Habilidades Técnicas</h3>
            <p>JavaScript: 70%</p>
            <p>HTML y CSS: 70%</p>
            <p>Java: 70%</p>
          </div>
          <div className='skillspro'>
            <h3>Habilidades Profesionales</h3>
            <p>Comunicación: 70%</p>
            <p>Trabajo en Equipo: 70%</p>
            <p>Creatividad: 70%</p>
          </div>
        </div>
      </section>

      <div className="linea">
      </div>

      <section className='valoraciones-section'>
        <h2>VALORACIONES</h2>
        <p>Algunas observaciones de los proyectos realizados</p>
        <div className="linea2">  </div>
        <div className='valoraciones'>
          <div className='valoraciones-block'>
            <div className='imagen-perfil'>
              <Image src="../llamas.png" alt='imagen de usuario' className='imagen-perfil' /> 
            </div>
            <div className='parrafo-valoracion'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.”</p>
              <p className='name-perfil'> Jack Smith </p>
              <p className='name-perfil'>★★★★★</p>
            </div>
          </div>
          <div className='valoraciones-block'>
            <div className='imagen-perfil'>
              <Image src="../llamas.png" alt='imagen de usuario' className='imagen-perfil' /> 
            </div>
            <div className='parrafo-valoracion'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.”</p>
              <p className='name-perfil'> Jack Smith </p>
              <p className='name-perfil'>★★★★★</p>
            </div>
          </div>
          <div className='valoraciones-block'>
            <div className='imagen-perfil'>
              <Image src="../llamas.png" alt='imagen de usuario' className='imagen-perfil' /> 
            </div>
            <div className='parrafo-valoracion'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.”</p>
              <p className='name-perfil'> Jack Smith </p>
              <p className='name-perfil'>★★★★★</p>
            </div>
          </div>
        </div>  
      </section>

      <div className='contacto'>
        <div className='contac-parrafo'>
          <h3>Comentame tu idea y hagamos ese proyecto realidad!</h3>
          <p>Comuníquese conmigo para colaboraciones, consultas o simplemente para saludar.</p>
        </div>
        <div className='div-contact'>
          <a href="#" className='contact'>Contactarme➜</a>
        </div>
      </div>

  
          <div className="footer">
            <div>
              <p>Creado por @Andre_Hz</p>
            </div>
            <div >
              <div className="socials">
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
                <a href="#">GitHub</a>
                <a href="#">YouTube</a> 
              </div>
            </div>
          </div>       
    </div>
  );
}
