import React from 'react';

const TextSection = () => {
    return (
        <section class="container-fluid p-4">
                <div class="row">
                <div class="col-sm-12 col-md-5 col-lg-6 ">
                <h2>
                    María Victoria Bearzi, Vic
                </h2>
                
                <p>Buenos Aires, 2001. </p>
                <p>Con solo 4 años de edad comenzó su formación en la disciplina de Ballet. Mientras a la par realizaba sus estudios primarios y secundarios, esta disciplina la acompañó durante toda su vida, e incluso continúa hasta el día de hoy.
                En el 2014 inició la temporada de seminarios certificados en La Fundación Julio Bocca y en el Instituto Superior de Arte del Teatro Colón. Una vez finalizada su formación, comenzó a ejercer como Profesora de Danza Clásica. Actualmente dirige el programa de "Composición Coreográfica" dictado en la Escuela de Ballet de "Estudio Ensayo".
                En el 2019 inició la Licenciatura de Artes Multimediales en la Universidad de Palermo; durante ese año, participó con distintas obras como "Sweet Hypnosis" y "Realidad infinita" en el marco de exposiciones realizadas en "Espacio Cabrera". Como artista visual experimenta mayoritariamente las técnicas de videoarte y fotografía.</p>              
            </div>
                
                <div class="textl-lg-end text-center col-sm-12 col-md-7 col-lg-6 pt-5 ">
                    <picture >
                        <img src="imagenes/fotosobremi.png" alt="Maria Victoria Bearzi" class="img-fluid " />
                    </picture>
                </div>

                <div class="container-fluid">
                <div class="row">
                    <div class="col-11 text-md-end text-sm-center">
                    <section class="pt-2" >
                    <a class="btn btn-floating p-1" href="a" target="_blank">
                        <img src="imagenes/redes/youtube.png" alt="youtube" class="img-fluid" /></a>
            
                    <a class="btn btn-floating p-1" href="a" target="_blank"><img
                        src="imagenes/redes/behance.png" alt="behance" class="img-fluid"/> </a>
            
                    <a class="btn btn-floating p-1" href="a" target="_blank"><img
                        src="imagenes/redes/linkedin.png" alt="linkedin" class="img-fluid" /></a>

                    <a class="btn btn-floating p-1" href="a" target="_blank"><img
                            src="imagenes/redes/instagram.png" alt="instagram" class="img-fluid" /></a>
                    </section>
                </div>
                </div>
            
                </div>
            </div>    
            </section>
        )
}

const Form = () =>{
    return (
        <div class="container-fluid pb-5" id="fondo">
        <h2 class="text-start pt-5 m-3">CONTACT</h2>
        <div class="container-fluid py-4">
          <form action="recursos/enviar_formulario.php" method="post" enctype="application/x-www-form-urlencoded">
            <div class="col-sm-12 col-md-5 mb-3">
              <label class="form-label" for="nombrecompleto">NOMBRE COMPLETO/ FULL NAME</label>
              <input class="form-control" name="nombrecompleto" type="text" />
            </div>
    
    
            <div class="col-sm-12 col-md-5 mb-3">
              <label class="form-label" for="email">E-MAIL</label>
              <input class="form-control" name="email" type="email" />
            </div>
    
            <div class="col-sm-12 col-md-5 mb-3">
              <label class="form-label" for="mensaje">MENSAJE/MESSAGE</label>
              <textarea class="form-control" name="mensaje" type="text"  cols="30"
                rows="5"></textarea>
            </div>
    
            <div class="col-sm-6 col-md-2 d-grid" >
              <input type="submit" value="ENVIAR" id="boton"/>
            </div>
          </form>
        </div>
      </div>
    )
}

function About() {
    return (
      <div>
          <TextSection />
          <Form />
      </div>
    );
  }
  
  export default About;