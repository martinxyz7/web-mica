import React, { useState, forwardRef } from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: ##9D5A4D;
  border-radius: 8px;
  font-family: 'Arial', sans-serif; /* Cambia la fuente a una más bonita */
`;

const Title = styled.h2`
  text-align: center;
  color: #5d5d5d;
  margin-bottom: 20px;
  font-family: 'Georgia', serif; /* Fuente más elegante para el título */
`;

const FAQItem = styled.div`
  border-bottom: 1px solid #e0e0e0;
  padding: 15px 0;
`;

const FAQQuestion = styled.h3`
  font-size: 20px; /* Aumenta el tamaño de la fuente */
  color: #333;
  cursor: pointer;
  transition: color 0.3s;
  font-weight: 500; /* Aumenta el grosor de la fuente */

  &:hover {
    color: #ff69b4; /* Cambia a rosa al pasar el mouse */
  }

  &.active {
    color: #ff69b4; /* Cambia a rosa cuando está activo */
    font-weight: bold;
  }
`;

const FAQAnswer = styled.p`
  font-size: 16px;
  color: #555;
  margin-top: 5px;
  transition: max-height 0.3s ease-in-out;
  line-height: 1.5; /* Aumenta el espacio entre líneas para mejorar la legibilidad */
`;

const FAQ = forwardRef((props, ref) => {
  const faqs = [
    {
      question: '¿Cómo funcionan los turnos y la seña?',
      answer: 'Los turnos se pueden reservar a través de nuestro sitio web o por teléfono. La seña se abona al momento de confirmar la cita.'
    },
    {
      question: '¿Después de hacerme un lifting, cuándo puedo ponerme extensiones?',
      answer: 'Se recomienda esperar al menos dos semanas después del lifting para asegurarte de que tus pestañas estén completamente curadas.'
    },
    {
      question: '¿Cómo saber si me hicieron las pestañas bien o no?',
      answer: 'Las pestañas bien aplicadas deben verse naturales y no deberían causar incomodidad. Si hay mucha acumulación de pegamento o si sientes tirantez, puede que no estén bien.'
    },
    {
      question: '¿Cuánto durarán las pestañas?',
      answer: 'La duración de las extensiones de pestañas puede variar entre 3 a 6 semanas, dependiendo del cuidado y del ciclo de crecimiento natural de tus pestañas.'
    },
    {
      question: '¿Cuáles son los cuidados posteriores de las extensiones de pestañas?',
      answer: 'Evita mojar tus pestañas durante las primeras 24 horas y usa productos libres de aceite para desmaquillarlas. También es recomendable no frotar los ojos.'
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer ref={ref}>
      <Title>Preguntas Frecuentes</Title>
      {faqs.map((faq, index) => (
        <FAQItem key={index}>
          <FAQQuestion className={openIndex === index ? 'active' : ''} onClick={() => toggleFAQ(index)}>
            {faq.question}
          </FAQQuestion>
          {openIndex === index && <FAQAnswer>{faq.answer}</FAQAnswer>}
        </FAQItem>
      ))}
    </FAQContainer>
  );
});

export default FAQ;
