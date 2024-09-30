import React from 'react';
import styled from 'styled-components';

// Componente BurguerButton que devuelve la estructura del botón de hamburguesa
function BurguerButton(props) {
  return (
    <Burguer>
      {/* Aquí está la estructura del botón hamburguesa con tres líneas */}
      <div onClick={props.handleClick} className={`icon nav-icon-4 ${props.clicked ? 'open' : ''}`}>
        <span></span> {/* Primera línea del icono */}
        <span></span> {/* Segunda línea del icono */}
        <span></span> {/* Tercera línea del icono */}
      </div>
    </Burguer>
  );
}

export default BurguerButton;

// Definición de los estilos para el botón hamburguesa
const Burguer = styled.div`
  /* Estilos para el contenedor del icono hamburguesa */
  .nav-icon-4 {
    width: 35px;          /* Ancho del icono hamburguesa */
    height: 30px;         /* Alto del icono hamburguesa */
    margin: 10px 10px;    /* Margen alrededor del icono */
    position: relative;   /* Posiciona el contenido en relación a este contenedor */
    cursor: pointer;      /* Cambia el cursor al pasar sobre el icono */
    display: inline-block;/* Alinea el contenedor del icono de forma horizontal */
  }

  /* Estilos para cada una de las tres líneas del botón hamburguesa */
  .nav-icon-4 span {
    background-color: #FFF; /* Color blanco de las líneas del icono */
    position: absolute;     /* Permite posicionar las líneas de manera absoluta dentro del icono */
    border-radius: 2px;     /* Bordes redondeados de las líneas */
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4); /* Transición suave al hacer hover o abrir el menú */
  }

  /* Estilo específico para la primera línea del botón hamburguesa */
  .nav-icon-4 span:nth-child(1) {
    width: 100%;     /* Ancho completo de la línea */
    height: 4px;     /* Alto de la línea */
    display: block;  /* Se muestra como bloque */
    top: 0px;        /* Posiciona la línea en la parte superior del contenedor */
    left: 0px;       /* Alinea la línea a la izquierda del contenedor */
  }

  /* Estilo específico para la segunda línea del botón hamburguesa */
  .nav-icon-4 span:nth-child(2) {
    width: 100%;     /* Ancho completo de la línea */
    height: 4px;     /* Alto de la línea */
    display: block;  /* Se muestra como bloque */
    top: 13px;       /* Posiciona la línea en el centro vertical del contenedor */
    left: 0px;       /* Alinea la línea a la izquierda del contenedor */
  }

  /* Estilo específico para la tercera línea del botón hamburguesa */
  .nav-icon-4 span:nth-child(3) {
    width: 100%;     /* Ancho completo de la línea */
    height: 4px;     /* Alto de la línea */
    display: block;  /* Se muestra como bloque */
    bottom: 0px;     /* Posiciona la línea en la parte inferior del contenedor */
    left: 0px;       /* Alinea la línea a la izquierda del contenedor */
  }

  /* Efectos de hover cuando el botón NO está abierto */
  .nav-icon-4:not(.open):hover span:nth-child(1) {
    top: -2px;       /* Mueve ligeramente la primera línea hacia arriba */
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4); /* Añade una animación suave */
  }

  .nav-icon-4:not(.open):hover span:nth-child(2) {
    transition: 0.4s cubic-bezier(0.8, 0.5, 0.2, 1.4); /* Añade una animación suave sin cambiar la posición */
  }

  .nav-icon-4:not(.open):hover span:nth-child(3) {
    bottom: -2px;    /* Mueve ligeramente la tercera línea hacia abajo */
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4); /* Añade una animación suave */
  }

  /* Estilos cuando el botón hamburguesa está en estado "abierto" (clase .open) */
  .nav-icon-4.open {
    transform: rotate(90deg); /* Rota todo el icono 90 grados */
  }

  /* Estilos para la primera línea cuando el botón está abierto */
  .nav-icon-4.open span:nth-child(1) {
    left: 3px;       /* Desplaza la línea un poco a la derecha */
    top: 12px;       /* Mueve la línea al centro vertical del icono */
    width: 30px;     /* Reduce el ancho de la línea */
    transform: rotate(90deg); /* Rota la línea 90 grados */
    transition-delay: 150ms;  /* Añade un pequeño retraso antes de aplicar el cambio */
  }

  /* Estilos para la segunda línea cuando el botón está abierto */
  .nav-icon-4.open span:nth-child(2) {
    left: 2px;       /* Desplaza la línea un poco a la derecha */
    top: 20px;       /* Mueve la línea hacia abajo */
    width: 20px;     /* Reduce el ancho de la línea */
    transform: rotate(45deg); /* Rota la línea 45 grados */
    transition-delay: 50ms;   /* Añade un pequeño retraso antes de aplicar el cambio */
  }

  /* Estilos para la tercera línea cuando el botón está abierto */
  .nav-icon-4.open span:nth-child(3) {
    left: 14px;      /* Desplaza la línea bastante hacia la derecha */
    top: 20px;       /* Mueve la línea hacia abajo */
    width: 20px;     /* Reduce el ancho de la línea */
    transform: rotate(-45deg); /* Rota la línea -45 grados */
    transition-delay: 100ms;   /* Añade un pequeño retraso antes de aplicar el cambio */
  }
`;
