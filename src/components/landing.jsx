import React from 'react';
import '../styles/landing.css'
const Landing = (props)=> {
  return (

    <main>
      <div className="video-background">
      <video autoPlay loop muted>  
        <source src="imagenes/videofondo/espacio 5 move.mp4" type="video/mp4" />
      </video>
      <div className="overlay">
        <div class="row text-center">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <div class="fade-in-text1">
                <h2 class="pb-5">Welcome to my universe</h2>
              </div>
              <div class="fade-in-text2">
                <h2 class="pb-5">Hope you like it</h2>
              </div>
              <div class="fade-in-text3">
                <h2 class="pt-2">Vic.</h2>
              </div>
            </div>
          </div>
      </div>
    </div>
    </main>
  )
}
<div className="video-background">
      <video autoPlay loop muted>
        <source src="imagenes/videofondo/espacio 5 move.mp4" type="video/mp4" />
      </video>
      <div className="overlay">
        <h1>Título del video</h1>
        <p>Texto de descripción</p>
      </div>
    </div>
export default Landing