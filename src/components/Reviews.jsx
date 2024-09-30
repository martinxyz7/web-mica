import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick'; // Importa react-slick para el carrusel

// Importa los estilos de slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Reviews = () => {
  // Configuración del slider para desplazarse verticalmente
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Muestra 3 fotos a la vez
    slidesToScroll: 1,
    vertical: true,  // Desplazamiento vertical
    verticalSwiping: true,  // Permitir swipe hacia arriba y abajo
  };

  return (
    <ReviewsContainer>
      {/* Columna izquierda con la frase */}
      <PhraseContainer>
        <h2>Gracias por todo su apoyo 💖</h2>
        <p>Me encanta escucharlos y recibir todo el amor que me brindan. Sus reseñas significan el mundo para mí.</p>
      </PhraseContainer>

      {/* Columna derecha con el carrusel de reseñas */}
      <CarouselContainer>
        <Slider {...settings}>
          {/* Aquí agregas las imágenes de tus reseñas */}
          <div><img src="https://via.placeholder.com/400x300" alt="Reseña 1" /></div>
          <div><img src="https://via.placeholder.com/400x300" alt="Reseña 2" /></div>
          <div><img src="https://via.placeholder.com/400x300" alt="Reseña 3" /></div>
          <div><img src="https://via.placeholder.com/400x300" alt="Reseña 4" /></div>
          <div><img src="https://via.placeholder.com/400x300" alt="Reseña 5" /></div>
          <div><img src="https://via.placeholder.com/400x300" alt="Reseña 6" /></div>
        </Slider>
      </CarouselContainer>
    </ReviewsContainer>
  );
};

export default Reviews;

// Estilos con styled-components
const ReviewsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: #f8f8f8; /* Fondo claro */
`;

const PhraseContainer = styled.div`
  flex: 1;  /* Ocupa la mitad izquierda */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  text-align: left;
  color: #333; /* Color del texto */

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;

const CarouselContainer = styled.div`
  flex: 1;  /* Ocupa la mitad derecha */
  height: 400px;  /* Altura del contenedor */
  overflow: hidden;  /* Esconde el desbordamiento de las imágenes */
  
  .slick-slide img {
    width: 100%;
    height: auto;
  }
`;
