
import './globals.scss'; // Asegúrate de importar tu archivo SASS
import Image from 'next/image';


export default function Home() {
  
  return (

    <div>
      <section className="contenido">
        <p className="c1">Software Developer</p>
        <h1 className="c12">Hola soy André</h1>
        <p className="c13"> Soy un desarrollador de software apasionado por la tecnología y el diseño. Con experiencia en &quot;Next.js, Spring Boot, SCSS, Java&quot;, me encanta construir soluciones innovadoras y optimizadas para mejorar la experiencia del usuario. A lo largo de mi carrera, he trabajado en proyectos de aplicaciones web y sistemas de gestión, siempre buscando implementar las mejores prácticas en eficiencia, calidad y diseño.</p>
        <a href="/CV.pdf" className="download-cv" download="Curriculum.pdf">Descargar CV</a>
        <Image src="/llamas.png" alt="Imagen de contenido"className="perfil-image" width={500} height={300}/>
      </section>

      <div className="barra" >
      <div className="texto">✦ ACCESIBILIDAD <span className="separador">✦</span> CALIDAD <span className="separador">✦</span> DESIGN THINKING <span className="separador">✦</span> INTEGRIDAD ✦</div>
      </div>


      <section className="projects" id="projects">
        <p className="uptitle2">Software Developer</p>
        <h2 className="title2">Proyectos</h2>
        <p className="subtitle2">&quot;¡Echa un vistazo y descubre lo que puedo crear!&quot;</p>
        <div className="project-block">
          <div className="project-info">
            <h3>Portfolio Personal</h3>
            <p>Este proyecto de portafolio personal, desarrollado con Next.js, muestra las habilidades y proyectos en un formato visualmente atractivo e intuitivo. Incluye una navegación fluida que permite a los usuarios explorar secciones como &quotProyectos&quot, &quotAcerca de mí&quot y &quotContacto&quot. Utilizando SCSS para el diseño, el portafolio destaca un perfil profesional y facilita el acceso a su experiencia y logros en desarrollo de software</p>
            <p className='lenguajes'><strong>Lenguajes:</strong> HTML | SCSS | JavaScript</p>
            <a href="https://github.com/AndHz/portfolio-css" className="project-button" target="_blank" rel="noopener noreferrer"><strong>Revisar</strong></a>
            <div className='image-container'>
              <Image src="/imagen-proyecto.jpg" alt="Imagen del Proyecto 1" className="project-image" width={500} height={300}/> 
            </div>
          </div>
        </div>
        
        <div className="project-block">
          <div className="project-info">
            <h3>Portfolio Personal</h3>
            <p>Este proyecto de portafolio personal, desarrollado con Next.js, muestra las habilidades y proyectos en un formato visualmente atractivo e intuitivo. Incluye una navegación fluida que permite a los usuarios explorar secciones como &quotProyectos&quot, &quotAcerca de mí&quot y &quotContacto&quot. Utilizando SCSS para el diseño, el portafolio destaca un perfil profesional y facilita el acceso a su experiencia y logros en desarrollo de software</p>
            <p className='lenguajes'><strong>Lenguajes:</strong> HTML | SCSS | JavaScript</p>
            <a href="https://github.com/AndHz/portfolio-css" className="project-button" target="_blank" rel="noopener noreferrer"><strong>Revisar</strong></a>
          </div>
          <div className='image-container'>
              <Image src="/imagen-proyecto.jpg" alt="Imagen del Proyecto 2" className="project-image" width={500} height={300}/> 
            </div>
        </div>
        
        <div className="project-block">
          <div className="project-info">
            <h3>Portfolio Personal</h3>
            <p>Este proyecto de portafolio personal, desarrollado con Next.js, muestra las habilidades y proyectos en un formato visualmente atractivo e intuitivo. Incluye una navegación fluida que permite a los usuarios explorar secciones como &quotProyectos&quot, &quotAcerca de mí&quot y &quotContacto&quot. Utilizando SCSS para el diseño, el portafolio destaca un perfil profesional y facilita el acceso a su experiencia y logros en desarrollo de software</p>
            <p className='lenguajes'><strong>Lenguajes:</strong> HTML | SCSS | JavaScript</p>
            <a href="https://github.com/AndHz/portfolio-css" className="project-button" target="_blank" rel="noopener noreferrer"><strong>Revisar</strong></a>
            <div className='image-container'>
              <Image src="/imagen-proyecto.jpg" alt="Imagen del Proyecto 3" className="project-image" width={500} height={300}/> 
            </div>
          </div>
        </div>

        <div className="project-block">
          <div className="project-info">
            <h3>Portfolio Personal</h3>
            <p>Este proyecto de portafolio personal, desarrollado con Next.js, muestra las habilidades y proyectos en un formato visualmente atractivo e intuitivo. Incluye una navegación fluida que permite a los usuarios explorar secciones como &quotProyectos&quot, &quotAcerca de mí&quot y &quotContacto&quot. Utilizando SCSS para el diseño, el portafolio destaca un perfil profesional y facilita el acceso a su experiencia y logros en desarrollo de software</p>
            <p className='lenguajes'><strong>Lenguajes:</strong> HTML | SCSS | JavaScript</p>
            <a href="https://github.com/AndHz/portfolio-css" className="project-button" target="_blank" rel="noopener noreferrer"><strong>Revisar</strong></a> 
            <div className='image-container'>
              <Image src="/imagen-proyecto.jpg" alt="Imagen del Proyecto 4" className="project-image" width={500} height={300}/> 
            </div>
          </div>
        </div>

      </section>

      <div className="barra2" >
        <div className="texto">✦ ACCESIBILIDAD <span className="separador">✦</span> CALIDAD <span className="separador">✦</span> DESIGN THINKING <span className="separador">✦</span> INTEGRIDAD ✦</div>
      </div>

      <section className="about" id='Acercademi'>
        <h2>Acerca de mí</h2>
        <h1>SKILLS</h1>
        <div className="skills">
          <div className='skillstec'>
            <h3>Habilidades Técnicas</h3>
            <p>JavaScript: 50%</p>
            <p>HTML y CSS: 60%</p>
            <p>Java: 80%</p>
          </div>
          <div className='skillspro'>
            <h3>Habilidades Profesionales</h3>
            <p>Comunicación: 60%</p>
            <p>Trabajo en Equipo: 70%</p>
            <p>Creatividad: 80%</p>
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
              <Image src="/llamas.png" alt='imagen de usuario' className='imagen-perfil' width={500} height={300}/> 
            </div>
            <div className='parrafo-valoracion'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className='name-perfil'> Jack Smith </p>
              <p className='name-perfil'>★★★★★</p>
            </div>
          </div>
          <div className='valoraciones-block'>
            <div className='imagen-perfil'>
              <Image src="/llamas.png" alt='imagen de usuario' className='imagen-perfil' width={500} height={300}/> 
            </div>
            <div className='parrafo-valoracion'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className='name-perfil'> Jack Smith </p>
              <p className='name-perfil'>★★★★★</p>
            </div>
          </div>
          <div className='valoraciones-block'>
            <div className='imagen-perfil'>
              <Image src="/llamas.png" alt='imagen de usuario' className='imagen-perfil' width={500} height={300}/> 
            </div>
            <div className='parrafo-valoracion'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
                <a href="https://www.linkedin.com/in/andre-haziel-91a168237" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/AndHz" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="#">YouTube</a> 
              </div>
            </div>
          </div>       
    </div>
  );
}
