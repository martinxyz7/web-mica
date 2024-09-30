import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Importa los íconos
import BurguerButton from './BurguerButton';
import Logo from '../components/image/Logo.png';

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden; /* Oculta el scroll horizontal */
  }
`;

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <GlobalStyle />
      <NavContainer>
        <div className='logo'>
          <LogoImage src={Logo} alt='Logo' />
        </div>

        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href='/'>pestañas</a>
          <a onClick={handleClick} href='/'>reseñas</a>
          <a onClick={handleClick} href='/'>curso</a>
          <a onClick={handleClick} href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
            <FaInstagram /> Instagram
          </a>
          <a onClick={handleClick} href='https://wa.me/' target='_blank' rel='noopener noreferrer'>
            <FaWhatsapp /> WhatsApp
          </a>
        </div>

        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        
        <BgDiv className={`initial ${clicked ? 'active' : ''}`} />
      </NavContainer>
    </>
  );
}

export default Navbar;

// Estilos
const NavContainer = styled.nav`
  position: relative;
  padding: 0.4rem;
  background-color: #9D5A4D;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Espacio entre logo y botón hamburguesa */
  z-index: 10;

  .logo {
    margin-left: 1rem; /* Margen del logo */
  }

  .links {
    display: flex; /* Enlaces uno al lado del otro */
    justify-content: center; /* Centra los enlaces */
    gap: 1.5rem;
    flex-grow: 1; /* Permite que el contenedor crezca */

    @media (max-width: 768px) {
      flex-direction: column; /* Cambia a columna en pantallas pequeñas */
      align-items: center; /* Centra los enlaces verticalmente */
      position: absolute; /* Posición absoluta para menú desplegable */
      top: 60px; /* Ajusta según la altura de la Navbar */
      left: 0;
      right: 0;
      background: #9D5A4D; /* Fondo para el menú desplegable */
      opacity: 0;
      pointer-events: none; /* Evita interacciones cuando no está visible */
      transition: all 0.3s ease;
    }

    &.active {
      opacity: 1; /* Hace visible el menú */
      pointer-events: all; /* Permite interacciones */
    }
  }

  a {
    color: white;
    text-decoration: none;
    text-align: center; /* Centra el texto dentro del enlace */
    display: flex; /* Permite alinear íconos y texto */
    align-items: center; /* Centra verticalmente el texto y el ícono */
    gap: 0.5rem; /* Espaciado entre el ícono y el texto */

    @media (max-width: 768px) {
      font-size: 2rem; /* Tamaño más grande en móvil */
      padding: 1rem; /* Espaciado para facilitar el clic */
    }
  }

  .burguer {
    margin-right: 1rem; /* Margen a la derecha del botón hamburguesa */
    
    @media (min-width: 769px) {
      display: none; /* Oculta el botón hamburguesa en pantallas grandes */
    }
  }
`;

const BgDiv = styled.div`
  position: absolute;
  background-color: #C28E84; /* Fondo oscuro semitransparente */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    opacity: 0.7;
  }
`;

const LogoImage = styled.img`
  width: 70px;
  height: auto;
  cursor: pointer;
`;
