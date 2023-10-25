import React, { useState, useRef, useEffect  } from "react";
import '../styles/art.css'
import Slider from "./slider.jsx";



let conditional = false;


//Main part of the page
const Main = (props) => {
    return (
        <main>
            <article className="container-fluid">
                <section className="row sectionContainer">
                    <div className="col-sm-0 col-md-6">
                    </div>
                    <div className="col-sm-12 col-md-6 titulo">
                    <div class='wrapper'>
                        <h2 class="text-center"> ART </h2>
                    </div>
                        <p>Acá iría un texto súper inspirador que defina tu visión como artista y lo que buscas transmitir, onda manifiesto. Acá iría un texto súper inspirador que defina tu visión como artista y lo que buscas transmitir, onda manifiesto. Acá iría un texto súper inspirador que defina tu visión como artista y lo que buscas transmitir, onda manifiesto. Acá iría un texto súper inspirador que defina tu visión como artista y lo que buscas transmitir, onda manifiesto.</p>
                    </div>
                    <picture>
                        <source media="(max-width:650px)" srcSet="imagenes/videofondo/degradado-fondo2-cel.png" />
                        <img alt="" srcSet="imagenes/videofondo/degradado-fondo2.png" className="img-fluid" id="art1" />
                    </picture>
                </section>
            </article>
        </main>
    );
}


//Initial view of the pictures
const GaleriaGrande = (props) => {

    //For render the slider
    const [showSliderContent, setShowSliderContent] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const handleClick = (number) => {
        console.log(number, showSliderContent)
        setShowSliderContent(true);
        setSelectedNumber(number);
    };

    const Column = (props) => {
        const startCount = props.inicio || 1;
        const imageCount = props.fin || 3; // Default value is 3 if no prop is provided

        // Creamos un array con números del 1 al imageCount
        const imageNumbers = Array.from({ length: imageCount - startCount + 1 }, (_, index) => startCount + index);

        return (
            <div>
                
                <div className="row text-center pt-5 m-1">
                    {imageNumbers.map((number) => (
                    <div
                        key={number}
                        onClick={() => handleClick(number)}
                        toggle="lightbox"
                        data-caption="Poner nombre"
                        data-gallery="example-gallery"
                        className="col-sm-4"
                    >
                        <img
                        alt=""
                        src={`imagenes/digitalArt/chicas/${number}_chica.png`}
                        className="img-fluid"
                        />
                    </div>
                    ))}
                </div>
                {showSliderContent && <ModalSlider number={selectedNumber} />}
            </div>
        );

        
    }
    return (
        <div id="galeriagrande" class="galerias">
            <h2 class="text-center"> DIGITAL ART </h2>
            <Column inicio={1} fin={3} />
            <Column inicio={4} fin={6} />
            <Column inicio={7} fin={9} />
            <Column inicio={10} fin={12} />
        </div>
    )
}

//

const GaleriaChica = (props) => {
    const Column = (props) => {
        const startCount = props.inicio || 1;
        const imageCount = props.fin || 3; // Default value is 3 if no prop is provided

        // Creamos un array con números del 1 al imageCount
        const imageNumbers = Array.from({ length: imageCount - startCount + 1 }, (_, index) => startCount + index);

        return (
            <div class="carousel-inner">
                <div class="carousel-item active">
                    {imageNumbers.map((number) => (
                    <a
                        key={number}
                        href={`imagenes/digitalArt/${number}.jpg`}
                        data-toggle="lightbox"
                        data-caption="Poner nombre"
                        data-gallery="example-gallery"
                        className="col-12"
                    >
                        <img
                        alt=""
                        src={`imagenes/digitalArt/chicas/${number}_chica.png`}
                        className="d-block w-100"
                        />
                    </a>
                    ))}
                </div>
            </div>
        );

        
    }
    return (
        <div id="galeriachica" class="galerias">
        <h2 class="text-center"> DIGITAL ART </h2>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <Column inicio={1} fin={3} />
                <Column inicio={4} fin={6} />
                <Column inicio={7} fin={9} />
                <Column inicio={10} fin={12} />
            </div>
        </div>
    )
}

// const SliderContent = () => {
//     return (
//     <div className='sliderContainer'>
//         <div className='slider'>
//             <Slider />
//         </div>
//     </div>
//     )
// }
const SliderContent = ({ onClose }) => {
    const modalRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {

        if (modalRef.current === event.target) {
          // Si el clic ocurrió fuera del modal, llama a la función onClose
            onClose();
        }
      };
  
      // Agrega un evento de escucha para clics en el documento
      document.addEventListener("click", handleClickOutside);
  
      // Limpia el evento cuando el componente se desmonta
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [onClose]);
  
    return (
      <div ref={modalRef} className="sliderContainer">
        <div className="slider">
          <Slider />
        </div>
      </div>
    );
  };
//Galery with carrousel
function ModalSlider(props) {
    return (
        <div className='sliderContainer' >
            <div className='slider'>
                <Slider />
            </div>
        </div>        
    );
}


class ModalControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleModalClick = this.handleModalClick.bind(this);
      this.handleModal2Click = this.handleModal2Click.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleModalClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleModal2Click() {
      this.setState({isLoggedIn: false});
    }
    
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
          button = <ModalSlider onClick={this.handleModal2Click} />;
        } else {
        }
        button = <ModalSlider />;
    
        return (
            <>
                <Main />
                <GaleriaGrande />
                <GaleriaChica />
            </>
        );
      }
}

function Art() {

  return (
    <div>
        <Main />
        <GaleriaGrande />
        <GaleriaChica />
        <SliderContent />
    </div>
  );
}

export default Art;