"use client"

import { useState } from 'react';
import ItemPicker from '../components/ItemPicker';
import ShoppingList from '../components/ShoppingList';
import Total from '../components/Total';
import Factura from '../components/Factura';

export default function Home() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(i => i.nombre === item.nombre);
      if (existingItem) {
        return prevItems.map(i =>
          i.nombre === item.nombre ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const handleRemoveItem = (itemName) => {
    setItems(prevItems => prevItems.filter(i => i.nombre !== itemName));
  };

  const handleUpdateQuantity = (itemName, quantity) => {
    setItems(prevItems =>
      prevItems.map(i =>
        i.nombre === itemName ? { ...i, quantity: Math.max(1, quantity) } : i
      )
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Lista de Compras</h1>
      <ItemPicker onAddItem={handleAddItem} />
      <ShoppingList items={items} onRemoveItem={handleRemoveItem} onUpdateQuantity={handleUpdateQuantity} />
      <Total items={items} />
      <Factura items={items} />
    </div>
  );
}
