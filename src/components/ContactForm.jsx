// src/components/ContactForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { db } from '../firebase-config.jsx';  // Asegúrate de que la ruta sea correcta
import { collection, addDoc } from 'firebase/firestore';

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    servicio: '',
    fecha: null,
    hora: '',
  });

  // Horarios ocupados por día
  const horariosOcupados = {
    '2024-11-01': ['09:00', '13:00', '16:00'],
    '2024-11-02': ['10:00', '14:00', '17:00'],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Datos del formulario:", formData); // Agrega esto para depurar

    try {
      const docRef = await addDoc(collection(db, 'turnos'), formData); // Cambia 'turnos' según tu colección
      console.log("Documento escrito con ID: ", docRef.id);
      
      // Limpia el formulario después de enviar
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        servicio: '',
        fecha: null,
        hora: '',
      });

      alert('Turno reservado con éxito!'); // Mensaje de éxito

    } catch (e) {
      console.error("Error añadiendo documento: ", e);
      alert('Hubo un error al reservar el turno.'); // Mensaje de error
    }
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({ ...prevData, fecha: date, hora: '' }));
  };

  const handleHourChange = (e) => {
    const selectedHora = e.target.value;
    const selectedDate = formData.fecha ? formData.fecha.toISOString().split('T')[0] : '';

    // Verifica si la hora seleccionada ya está ocupada
    if (horariosOcupados[selectedDate]?.includes(selectedHora)) {
      alert('La hora seleccionada ya está ocupada. Por favor, elige otra hora.');
      setFormData((prevData) => ({ ...prevData, hora: '' }));
    } else {
      setFormData((prevData) => ({ ...prevData, hora: selectedHora }));
    }
  };

  return (
    <Container>
      <CalendarContainer>
        <h2>Seleccione una fecha para su turno</h2>
        <DatePicker
          selected={formData.fecha}
          onChange={handleDateChange}
          minDate={new Date()}
          dateFormat="yyyy-MM-dd"
          placeholderText="Elige una fecha"
        />
      </CalendarContainer>

      <FormContainer>
        <h2>Formulario de turno</h2>
        <Form onSubmit={handleSubmit}>
          <Label>Nombre</Label>
          <Input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <Label>Apellido</Label>
          <Input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />

          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Label>Teléfono</Label>
          <Input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />

          <Label>Servicio</Label>
          <Select
            name="servicio"
            value={formData.servicio}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un servicio</option>
            <option value="pestanasClasicas">Pestañas Clásicas</option>
            <option value="pestanasHibridas">Pestañas Híbridas</option>
            <option value="pestanasHybridWet">Pestañas Hybrid Wet</option>
            <option value="pestanasVolumenRuso">Pestañas Volumen Ruso</option>
            <option value="pestanasWetEffect">Pestañas Wet Effect</option>
          </Select>

          <Label>Hora</Label>
          <Input
            type="time"
            name="hora"
            value={formData.hora}
            onChange={handleHourChange}
            required
            disabled={!formData.fecha}
          />

          <NoteContainer>
            <NoteTitle>Tener en cuenta</NoteTitle>
            <NotePoint>• La seña se abona al momento de confirmar la cita.</NotePoint>
            <NotePoint>• No vengas maquillada el día que tienes el turno.</NotePoint>
            <NotePoint>• No vengas acompañada.</NotePoint>
            <NotePoint>• No llegar tarde.</NotePoint>
          </NoteContainer>

          <SubmitButton type="submit">Enviar</SubmitButton>
        </Form>
      </FormContainer>
    </Container>
  );
}

// Estilos (los estilos no cambian)

export default ContactForm;

// Estilos
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CalendarContainer = styled.div`
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background-color: #9D5A4D;
  border-radius: 8px;
  color: white;

  h2 {
    text-align: center;
    color: #fff;
  }
`;

const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #9D5A4D;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: white;

  h2 {
    text-align: center;
    color: #fff;
    margin-bottom: 1rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #f8f8f8;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #c28e84;
  }
`;

const Select = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #c28e84;
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  color: #9D5A4D;
  background-color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c28e84;
    color: white;
  }
`;

const NoteContainer = styled.div`
  margin: 1rem 0;
`;

const NoteTitle = styled.h3`
  font-size: 1.1rem;
  color: #f8f8f8;
  margin-bottom: 0.5rem;
`;

const NotePoint = styled.p`
  margin: 0;
  color: #f8f8f8;
  font-weight: bold;
`;
