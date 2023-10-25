import React from 'react';
import '../styles/proyects.css'

const Main = (props) => {
    return (
        <article className="container-fluid firstArticle">
            <section class="row">
                <div class="col-sm-0 col-md-6">
                </div>
                <div class="col-sm-12 col-md-6 tituloProjects">
                    <h2>PROJECTS</h2>
                    <p>Acá iría un texto qué explique que va a ver el expectador en esta pagina, explicar que son proyectos multimedia, con más gente, etc.</p>
                </div>
                <picture className='degrad'>
                    <source media="(max-width:650px )" srcset="imagenes/videofondo/degradado-fondo1-cel.png" />
                    <img src="imagenes/videofondo/degradado-fondo1.png" alt="" class="img-fluid" id="art1" />
                </picture>
            </section>
        </article>
    )
}
const VideoZone = (props) => {
    return (
        <div>

        <article className="container-fluid">
            <section class="row p-5">
                <div class="col-sm-0 col-md-6">
                    <iframe className='videoLife' title='hi'
                        src="https://www.youtube.com/embed/tgbNymZ7vqY?mute=1">
                    </iframe>
                </div>
                <div class="col-sm-12 col-md-6">
                    <p className='titleSigh'>SIGH OF LIFE​</p>
                    <p className='subTitleSigh'>VideoArte. Junio 2020.</p>
                    <p className='text'>Inspirado en las memorias más atesoradas de una bailarina.</p>
                    <p className='text'>Música: "Intro" - Kygo Music.</p>
                </div>
            </section>
        </article>
        <article className="container-fluid">
            <section class="row p-5">
            <div class="col-sm-12 col-md-6">
                    <p className='titleSigh'>Sweet Hypnosis.​</p>
                    <p className='subTitleSigh'>VideoArte. Diciembre 2019.​​​​</p>
                    <p className='text'>Producción artística realizada exclusivamente para la Exposición de Performances "YOEAR", inaugurada en Espacio Cabrera, Buenos Aires, Argentina. </p>
                    <p className='text'>Créditos: Colaboración de Lucía Saravia de Los Heros.</p>
                </div>
                <div class="col-sm-0 col-md-6">
                    <iframe className='videoLife' title='hi'
                        src="https://www.youtube.com/embed/tgbNymZ7vqY?mute=1">
                    </iframe>
                </div>
            </section>
        </article>
        </div>
    )
}

const ImagesBottom = (props) =>{
    let imageNumber = props.number;
    let imageArray = Array.from({ length: imageNumber }, (_, index) => index + 1);

    return (
        <div>
            <section className="row container-fluid p-5">
                    {imageArray.map((index) => (
                        <div key={index} className="col-3">
                            <img className='imagesBottom' src={`SweetHipnosis/${index}.png`} alt={`imagen ${index}`} />
                        </div>
                    ))}
            </section>
        </div>
    )
}
function Projects() {
    return (
      <div>
          <Main />
          <VideoZone />
          <ImagesBottom number={4} />
      </div>
    );
  }
  
  export default Projects;