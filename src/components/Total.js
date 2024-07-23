export default function Total({ items }) {
    const total = items.reduce((acc, item) => acc + item.precio * item.quantity, 0);
  
    return (
      <div className="text-end mt-4">
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    );
  }
  