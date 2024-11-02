// src/components/AdminPanel.jsx
import React, { useState } from 'react';

const AdminPanel = () => {
  const [prices, setPrices] = useState([
    { id: '1', price: 100 },
    { id: '2', price: 200 },
    { id: '3', price: 300 },
  ]);
  const [newPrices, setNewPrices] = useState({}); // Almacenar nuevos precios por id
  const [loading, setLoading] = useState(false); // Estado de carga

  const handleUpdatePrice = (id) => {
    if (!newPrices[id]) return; // Evitar actualizar si no hay nuevo precio
    setLoading(true); // Establecer estado de carga

    // Simulación de actualización (puedes reemplazar esto con una API real)
    setTimeout(() => {
      setPrices((prevPrices) =>
        prevPrices.map((price) =>
          price.id === id ? { ...price, price: newPrices[id] } : price
        )
      );
      setNewPrices((prev) => ({ ...prev, [id]: '' })); // Restablecer el nuevo precio
      setLoading(false); // Restablecer el estado de carga
    }, 1000); // Simulando un retraso de 1 segundo para la actualización
  };

  return (
    <div>
      <h2>Panel de Administración</h2>
      <h3>Actualizar Precios</h3>
      {prices.map((price) => (
        <div key={price.id}>
          <p>Precio Actual: {price.price}</p>
          <input
            type="text"
            placeholder="Nuevo Precio"
            value={newPrices[price.id] || ''} // Usar nuevo precio por id
            onChange={(e) => setNewPrices({ ...newPrices, [price.id]: e.target.value })}
          />
          <button onClick={() => handleUpdatePrice(price.id)} disabled={loading}>
            {loading ? 'Actualizando...' : 'Actualizar'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
