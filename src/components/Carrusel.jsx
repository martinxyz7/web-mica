import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import clasicas from '../components/image/clasicas.jpeg'; 
import hibridas from '../components/image/hibridas.jpeg'; 
import hybridwet from '../components/image/hybridwet.jpeg'; 
import volumenruso from '../components/image/volumenruso.jpeg'; 
import weteffect from '../components/image/weteffect.jpeg'; 

const Carrusel = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    nextArrow: <SampleNextArrow />, 
    prevArrow: <SamplePrevArrow /> 
  };

  return (
    <CarruselContainer>
      <Slider {...settings}>
        <ImageContainer>
          <img src={clasicas} alt='Clásicas' />
          <ImageLabel>Pestañas Clásicas</ImageLabel>
        </ImageContainer>
        <ImageContainer>
          <img src={hibridas} alt='hibridas' />
          <ImageLabel>Pestañas hibridas</ImageLabel>
        </ImageContainer>
        <ImageContainer>
          <img src={hybridwet} alt='hybridwet' />
          <ImageLabel>Pestañas hybridwet</ImageLabel>
        </ImageContainer>
        <ImageContainer>
          <img src={volumenruso} alt='volumenruso' />
          <ImageLabel>Pestañas volumenruso</ImageLabel>
        </ImageContainer>
        <ImageContainer>
          <img src={weteffect} alt='weteffect' />
          <ImageLabel>Pestañas weteffect</ImageLabel>
        </ImageContainer>
      </Slider>
    </CarruselContainer>
  );
};

export default Carrusel;

// Contenedor estilizado para el carrusel
const CarruselContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f9f9f9;
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

// Contenedor para la imagen y el nombre
const ImageContainer = styled.div`
  text-align: center;
  padding: 10px;
`;

const ImageLabel = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

// Flechas personalizadas para el carrusel
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '10px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '10px' }}
      onClick={onClick}
    />
  );
}
