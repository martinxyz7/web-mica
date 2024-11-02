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
  height: 86vh;
  background: #F1E0DB;
  padding-top: 5.5rem; /* Ajusta el padding superior para mover el contenido hacia abajo */

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding-top: 7.5rem; /* Ajuste menor en pantallas pequeñas */
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  overflow: hidden;
`;

const ChiquisImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  margin-top: 1rem; /* Ajuste de margen superior para desplazar el texto hacia abajo */
  color: #9D5A4D;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;
