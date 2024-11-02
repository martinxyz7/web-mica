import React from 'react';
import styled from 'styled-components';
import logo from './image/logo4.png'; // Ruta corregida para la imagen

const ContactCard = () => {
  // Función para desplazarse a la parte superior de la página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Desplazamiento suave
    });
  };

  return (
    <Container>
      <LogoSection>
        <Logo src={logo} alt="Micaela Herrera Lashes Logo" />
      </LogoSection>
      <ContactDetails>
        <ContactItem>
          <Icon>🏠</Icon>
          <p>Dirección: Berisso, Los Talas</p>
        </ContactItem>
        <ContactItem>
          <Icon>📱</Icon>
          <p>Celular: +54 9 3777 82-8494</p>
        </ContactItem>
        <ContactItem>
          <Icon>📸</Icon>
          <p>Instagram: micaelaherreralashes</p>
        </ContactItem>
        <ContactItem>
          <Icon>✉️</Icon>
          <p>Email: micaelaherreralashes@gmail.com</p>
        </ContactItem>
      </ContactDetails>

      {/* Botón para ir a la parte superior con el texto "Inicio" */}
      <ScrollButton onClick={scrollToTop}>
        Inicio <Arrow>↑</Arrow>
      </ScrollButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column; /* Cambiado a columna para mejor adaptabilidad en pantallas pequeñas */
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  height: calc(100vh - 40px); /* Ajustar la altura al 100% de la ventana menos el padding */
  position: relative;

  @media (min-width: 600px) {
    flex-direction: row; /* Cambiar a fila en pantallas más grandes */
    justify-content: space-between;
  }
`;

const LogoSection = styled.div`
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 600px) {
    margin-bottom: 0; /* Eliminar margen en pantallas más grandes */
  }
`;

const Logo = styled.img`
  width: 100%; /* Ajusta el tamaño de la imagen al contenedor */
  max-width: 400px; /* Tamaño máximo de la imagen */
  height: auto;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #000; /* Agregué un borde solo a la sección de contactos */
  padding: 10px;
  width: 100%; /* Ajusta el tamaño al 100% del contenedor */
  flex: 1; /* Permite que este contenedor ocupe el espacio restante */

  @media (min-width: 600px) {
    align-items: flex-start; /* Alinear al inicio en pantallas grandes */
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (min-width: 600px) {
    margin-bottom: 5px; /* Ajustar margen en pantallas más grandes */
  }
`;

const Icon = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;

// Estilo del botón para ir al inicio
const ScrollButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px; /* Ajustado para moverlo más a la derecha */
  padding: 10px 20px;
  background-color: transparent; /* Fondo transparente */
  color: black; /* Letra en negro */
  border: none;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;

  &:hover {
    color: #444; /* Efecto hover en el texto */
  }

  @media (min-width: 600px) {
    right: 60px; /* Volver a la posición original en pantallas más grandes */
  }
`;

// Flecha que apunta hacia arriba al lado del texto
const Arrow = styled.span`
  margin-left: 5px;
  font-size: 20px;
`;

export default ContactCard;
