"use client"

import { useState, useEffect } from 'react';

export default function ItemPicker({ onAddItem }) {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    fetch('/movies.json')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error al cargar el JSON:', error));
  }, []);

  const handleAddItem = () => {
    const item = items.find(i => i.nombre === selectedItem);
    if (item) {
      onAddItem(item);
      setSelectedItem('');  // Limpia select luego de agregar item
    }
  };

  return (
    <div className="input-group mb-3">
      <select className="form-select" value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)}>
        <option value="">Agregar elemento</option>
        {items.map((item, index) => (
          <option key={index} value={item.nombre}>
            {item.nombre}
          </option>
        ))}
      </select>
      <button className="btn btn-primary" onClick={handleAddItem} disabled={!selectedItem}>Agregar</button>
    </div>
  );
}
