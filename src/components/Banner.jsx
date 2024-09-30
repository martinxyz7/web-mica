import React from 'react';
import styled from 'styled-components';
import chiquis from '../components/image/chiquis.png'; 

const Banner = () => {
  return (
    <BannerContainer>
      <ImageContainer>
        <ChiquisImage src={chiquis} alt='chiquis' />
      </ImageContainer>
      <TextContainer>
        <h1>Micaela Herrera</h1>
        <h2>Aplicación Profesional de Extensiones de Pestañas</h2>
        <h2>Buenos Aires, Berisso</h2>
      </TextContainer>
    </BannerContainer>
  );
};

export default Banner;

// Estilos usando styled-components
const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 400px;
  background: #F1E0DB;
  /*background: linear-gradient(to right, rgba(0, 0, 0, 0.7), transparent); Degradado negro */
  
  @media (max-width: 768px) {
    flex-direction: column; /* Cambia a columna en pantallas pequeñas */
    height: auto; /* Altura automática */
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  overflow: hidden; /* Esto evita que la imagen sobresalga del contenedor */
`;

const ChiquisImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ajusta la imagen al tamaño del contenedor */
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: #9D5A4D; /* Texto en blanco */
  text-align: center; /* Centramos el texto */

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem; /* Tamaño de fuente más pequeño en pantallas pequeñas */
    }
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem; /* Espacio entre líneas */

    @media (max-width: 768px) {
      font-size: 1.2rem; /* Tamaño de fuente más pequeño en pantallas pequeñas */
    }
  }
`;
