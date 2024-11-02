import React from 'react';
import styled from 'styled-components';
import ReviewImage1 from './image/r1.jpeg'; // Asegúrate de que la ruta sea correcta
import ReviewImage2 from './image/r2.jpeg'; // Asegúrate de que la ruta sea correcta
import ReviewImage3 from './image/r3.jpeg'; // Asegúrate de que la ruta sea correcta

const Reviews = React.forwardRef((_, ref) => {
  return (
    <ReviewsContainer ref={ref}>
      <PhraseContainer>
        <h2>Gracias por todo su apoyo 💖</h2>
        <p>
          Me encanta escucharlos y recibir todo el amor que me brindan. Sus reseñas significan el mundo para mí.
        </p>
      </PhraseContainer>

      <ImagesContainer>
        <Image src={ReviewImage1} alt="Reseña 1" />
        <Image src={ReviewImage2} alt="Reseña 2" />
        <Image src={ReviewImage3} alt="Reseña 3" />
      </ImagesContainer>
    </ReviewsContainer>
  );
});

export default Reviews;

// Estilos con styled-components
const ReviewsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Centra todo en el medio */
  padding: 40px; /* Aumenta el padding para centrar más */
  background-color: #pink; /* Fondo claro */
  
  @media (max-width: 768px) {
    flex-direction: column; /* Cambia a columna en pantallas más pequeñas */
    padding: 20px; /* Reduce el padding en pantallas más pequeñas */
  }
`;

const PhraseContainer = styled.div`
  max-width: 400px; /* Limita el ancho del texto */
  margin-right: 50px; /* Aumenta el margen a la derecha para espacio */
  text-align: center; /* Alinea el texto al centro */
  color: #000; /* Color del texto en negro */

  h2 {
    font-size: 2.2rem; /* Tamaño del título */
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 1.8rem; /* Reduce el tamaño del título en pantallas más pequeñas */
    }
  }

  p {
    font-size: 1.4rem; /* Tamaño del párrafo */
    
    @media (max-width: 768px) {
      font-size: 1.2rem; /* Reduce el tamaño del párrafo en pantallas más pequeñas */
    }
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column; /* Coloca las imágenes en columna */
  align-items: center; /* Centra las imágenes */
  gap: 20px; /* Espacio entre las imágenes */

  @media (max-width: 768px) {
    gap: 15px; /* Reduce el espacio entre las imágenes en pantallas más pequeñas */
  }
`;

const Image = styled.img`
  width: 300px; /* Ancho de las imágenes */
  height: auto; /* Mantiene la proporción */
  border-radius: 15px; /* Bordes redondeados */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Sombra sutil */
  
  @media (max-width: 768px) {
    width: 80%; /* Ajusta el ancho de las imágenes a un porcentaje en pantallas más pequeñas */
    max-width: 300px; /* Limita el ancho máximo para que no sea demasiado grande */
  }
`;
