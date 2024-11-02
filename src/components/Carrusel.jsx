// src/components/Carrusel.jsx
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import clasicas from '../components/image/clasicas.jpeg';
import hibridas from '../components/image/hibridas.jpeg';
import hybridwet from '../components/image/hybridwet.jpeg';
import volumenruso from '../components/image/volumenruso.jpeg';
import weteffect from '../components/image/weteffect.jpeg';

const Carrusel = React.forwardRef((props, ref) => {
  const initialPrices = {
    'Pestañas Clásicas': 100,
    'Pestañas Híbridas': 120,
    'Pestañas Hybrid Wet': 150,
    'Pestañas Volumen Ruso': 180,
    'Pestañas Wet Effect': 200,
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Container ref={ref}>
      <Title>Servicios</Title>
      <CarruselWrapper>
        <Slider {...settings}>
          {Object.keys(initialPrices).map((service) => (
            <ImageContainer key={service}>
              <img src={getImage(service)} alt={service} />
              <ImageLabel>{service}</ImageLabel>
              <Price>${initialPrices[service]}</Price>
            </ImageContainer>
          ))}
        </Slider>
      </CarruselWrapper>
    </Container>
  );
});

const getImage = (service) => {
  switch (service) {
    case 'Pestañas Clásicas':
      return clasicas;
    case 'Pestañas Híbridas':
      return hibridas;
    case 'Pestañas Hybrid Wet':
      return hybridwet;
    case 'Pestañas Volumen Ruso':
      return volumenruso;
    case 'Pestañas Wet Effect':
      return weteffect;
    default:
      return '';
  }
};

export default Carrusel;

// Estilización de componentes
const Container = styled.div`
  padding: 20px;
  border-radius: 8px;
`;

const CarruselWrapper = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 20px auto;
  padding: 0.1rem;

  .slick-list {
    padding: 5px;
    height: 400px;
  }

  .slick-slide {
    padding: 5px;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  color: #9d5a4d;
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const ImageContainer = styled.div`
  text-align: center;
  padding: 5px;
`;

const ImageLabel = styled.div`
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

const Price = styled.div`
  font-size: 16px;
  color: #9d5a4d;
  font-weight: bold;
  margin-top: 5px;
`;

const Arrow = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  cursor: pointer;
`;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      style={{ ...style, display: 'block', right: '10px' }}
      onClick={onClick}
    >
      ➡️
    </Arrow>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      style={{ ...style, display: 'block', left: '10px' }}
      onClick={onClick}
    >
      ⬅️
    </Arrow>
  );
}
