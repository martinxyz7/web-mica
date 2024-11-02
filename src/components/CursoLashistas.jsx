import React from 'react';
import cursoImage from './image/curso.png';
import estudioImage from './image/estudio.jpg';
import curImage from './image/cur.jpeg';

const CursoLashistas = React.forwardRef((props, ref) => {
  const images = [cursoImage, estudioImage, curImage];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div ref={ref} style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>Curso de Pestañas</h1>
        <ul style={styles.featuresList}>
          {[
            "Capacitación para futuras Lashistas",
            "Materiales Incluidos",
            "Clases Personalizadas",
            "Cursos Presenciales/Online",
            "Temario completo",
            "Inicia tu carrera como lashista profesional."
          ].map((item, index) => (
            <li key={index} style={styles.featureItem}>{item}</li>
          ))}
        </ul>
      </div>
      <div style={styles.carouselContainer}>
        <img
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          style={styles.carouselImage}
        />
        <button 
          onClick={prevImage} 
          style={styles.carouselButtonLeft}>
          ❮
        </button>
        <button 
          onClick={nextImage} 
          style={styles.carouselButtonRight}>
          ❯
        </button>
      </div>
    </div>
  );
});

// Estilos en línea para el componente
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '100px',
    flexWrap: 'wrap', // Permite que los elementos se alineen en varias filas
  },
  textContainer: {
    flex: 1,
    textAlign: 'center',
    marginRight: '20px',
  },
  title: {
    fontSize: '2em',
    marginTop: '50px',
  },
  featuresList: {
    listStyleType: 'none',
    padding: 0,
  },
  featureItem: {
    fontSize: '1.2em',
  },
  carouselContainer: {
    flex: 1,
    position: 'relative',
    maxWidth: '300px',
    marginLeft: '100px',
  },
  carouselImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    objectFit: 'cover',
    maxHeight: '400px',
  },
  carouselButtonLeft: {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateX(-100%)',
    border: 'none',
    fontSize: '24px',
    color: 'black',
    cursor: 'pointer',
    zIndex: 10,
  },
  carouselButtonRight: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateX(100%)',
    border: 'none',
    fontSize: '24px',
    color: 'black',
    cursor: 'pointer',
    zIndex: 10,
  },
};

// Estilos responsivos (media queries)
const mediaQueries = `
@media (max-width: 768px) {
  .curso-lashistas {
    flex-direction: column; /* Cambia la dirección del flex a columna */
    align-items: center; /* Centra los elementos */
    padding: 20px; /* Reduce el padding en pantallas pequeñas */
  }

  .text-container {
    margin-right: 0; /* Elimina el margen en pantallas pequeñas */
    margin-bottom: 20px; /* Agrega un margen inferior para separar del carrusel */
  }

  .carousel-container {
    margin-left: 0; /* Elimina el margen en pantallas pequeñas */
  }
}
`;

// Aplicar estilos responsivos en el documento
const styleElement = document.createElement('style');
styleElement.innerHTML = mediaQueries;
document.head.appendChild(styleElement);

export default CursoLashistas;
