import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BurguerButton from './BurguerButton';
import Logo from './image/logo3.png';

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
  }
`;

const Button = styled.button`
  background: transparent;
  border: none;
  color: white;
  text-align: center;
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

function Navbar({ onSobreMiClick, onCursoClick, onResenasClick, onCarruselClick, onFAQClick }) {
  const [clicked, setClicked] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleClick = () => setClicked(!clicked);
  const toggleServicesMenu = () => setServicesOpen(!servicesOpen);

  return (
    <>
      <GlobalStyle />
      <NavContainer>
        <div className='logo'>
          <Link to="/"> {/* Cambia aquí para redirigir a la parte superior de la página */}
            <LogoImage src={Logo} alt='Logo' />
          </Link>
        </div>

        <div className={`links ${clicked ? 'active' : ''}`}>
          <Button onClick={onSobreMiClick}>Sobre mí</Button>
          <div className="services" onMouseEnter={toggleServicesMenu} onMouseLeave={toggleServicesMenu}>
            <Button onClick={onCarruselClick}>Servicios</Button>
            {servicesOpen && (
              <ServicesMenu>
                <Link to="/formulario">
                  <Button>Formulario</Button>
                </Link>
              </ServicesMenu>
            )}
          </div>
          <Button onClick={onCursoClick}>Curso</Button>
          <Button onClick={onFAQClick}>Preg.F</Button>
          <Button onClick={onResenasClick}>Reseñas</Button>
          <a href='https://www.instagram.com/micaelaherreralashes/' target='_blank' rel='noopener noreferrer'>
            <FaInstagram /> Instagram
          </a>
          <a href='https://wa.me/5493777828494' target='_blank' rel='noopener noreferrer'>
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

const ServicesMenu = styled.div`
  position: absolute;
  background: #9D5A4D;
  border: 1px solid #ccc;
  border-radius: 4px;
  top: 110%;
  left: 100;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  z-index: 10;

  a {
    color: white;
    padding: 0.5rem;
    text-decoration: none;
    &:hover {
      background-color: #c28e84;
    }
  }
`;

const NavContainer = styled.nav`
  position: relative;
  padding: 0.4rem;
  background-color: #9D5A4D;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;

  .logo {
    margin-left: 1rem;
  }
      position: fixed; /* Mantener la barra siempre fija */
  top: 0; /* Mantener en la parte superior */
  width: 100%; /* Ancho total */
  padding: 0.4rem 1rem; /* Espaciado alrededor */
  background-color: #9D5A4D;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000; /* Asegurarse de que esté por encima de otros elementos */
  transition: background-color 0.3s ease; /* Transición suave para el cambio de fondo */

  /* Para evitar el "saltito" */
  &::after {
    height: 60px; /* Altura de la barra para evitar "saltitos" al hacer scroll */
    width: 100%;
  }

  .links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-grow: 1;
    position: relative;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
      background: #9D5A4D;
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s ease;
    }

    &.active {
      opacity: 1;
      pointer-events: all;
    }
  }

  a, button {
    color: white;
    text-decoration: none;
    text-align: center;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
      padding: 1rem;
    }
  }

  .burguer {
    margin-right: 1rem;

    @media (min-width: 769px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  position: absolute;
  background-color: #C28E84;
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
  border-radius: 150px;
`;
