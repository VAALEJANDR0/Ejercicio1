"use client"

export default function ShoppingList({ items, onRemoveItem, onUpdateQuantity }) {
  const handleQuantityChange = (itemName, quantity) => {
    onUpdateQuantity(itemName, quantity);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="d-flex justify-content-between align-items-center mb-3 p-2 border-bottom">
          <div>
            <div>{item.nombre}</div>
            <div>${item.precio}</div>
          </div>
          <div className="d-flex align-items-center">
            <button className="btn btn-outline-secondary me-2" onClick={() => handleQuantityChange(item.nombre, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
            <input type="number" className="form-control d-inline-block me-2" style={{ width: '60px' }} value={item.quantity} readOnly />
            <button className="btn btn-outline-secondary me-2" onClick={() => handleQuantityChange(item.nombre, item.quantity + 1)}>+</button>
            <button className="btn btn-danger" onClick={() => onRemoveItem(item.nombre)}>X</button>
          </div>
        </div>
      ))}
    </div>
  );
}
