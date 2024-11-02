import React, { forwardRef } from 'react';
import styled from 'styled-components';
import MimiImage from './image/lam.jpeg'; 

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  padding: 40px; /* Reduje el padding para pantallas más pequeñas */
  min-width: 100vw; 
  min-height: 80vh; 
  background-color: #pink; /* Cambié el color para evitar que sea inválido */
  
  @media (max-width: 768px) {
    flex-direction: column; /* Cambia a columna en pantallas pequeñas */
    padding: 20px; /* Menos padding en pantallas pequeñas */
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px; 
  width: 100%; 
`;

const Description = styled.div`
  max-width: 500px; 
  margin-right: 50px; 
  text-align: left; 
  color: #000; 
  font-size: 1.5rem; 

  @media (max-width: 768px) {
    margin-right: 0; /* Elimina el margen en pantallas pequeñas */
    text-align: center; /* Centra el texto en pantallas pequeñas */
    font-size: 1.2rem; /* Reduce el tamaño de la fuente en pantallas pequeñas */
  }
`;

const Image = styled.img`
  width: 350px; 
  height: 350px; 
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 100%; /* La imagen ocupará el 100% del ancho en pantallas pequeñas */
    height: auto; /* Mantiene la proporción de la imagen */
    max-width: 300px; /* Establece un ancho máximo para la imagen */
  }
`;

const SobreMi = forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <Content>
        <Description>
          <h1 style={{ margin: '0', fontSize: '2.5rem' }}>Hola, soy Mica</h1>
          <p>
            Lashista apasionada por realzar la belleza de cada mirada.<br />
            Ofrezco extensiones de pestañas personalizadas que se adaptan a tu estilo.<br />
            Me encanta crear un ambiente relajante para que disfrutes de cada sesión.
          </p>
        </Description>
        <Image src={MimiImage} alt="Mica" />
      </Content>
    </Container>
  );
});

export default SobreMi;
