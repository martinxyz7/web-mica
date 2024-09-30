import React from 'react';

const CursoLashistas = () => {
  const images = [
    'https://via.placeholder.com/300x200.png?text=Imagen+1',
    'https://via.placeholder.com/300x200.png?text=Imagen+2',
    'https://via.placeholder.com/300x200.png?text=Imagen+3',
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <div style={{ flex: 1 }}>
        <h1 style={{ textAlign: 'left' }}>Curso de Pestañas</h1>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>Capacitación para futuras Lashistas</li>
          <li>Materiales Incluidos</li>
          <li>Clases Personalizadas</li>
          <li>Cursos Presenciales/Online</li>
          <li>Temario completo</li>
          <li>Inicia tu carrera como lashista profesional.</li>
        </ul>
      </div>
      <div style={{ flex: 1, position: 'relative' }}>
        <img
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
        <button onClick={prevImage} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>
          ❮
        </button>
        <button onClick={nextImage} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default CursoLashistas;
