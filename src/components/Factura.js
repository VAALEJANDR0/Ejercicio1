"use client"

export default function Factura({ items }) {
  const generateInvoice = () => {
    const invoice = {
      items: items.map(item => ({
        nombre: item.nombre,
        precio: item.precio,
        cantidad: item.quantity,
        total: item.precio * item.quantity,
      })),
      total: items.reduce((acc, item) => acc + item.precio * item.quantity, 0),
    };

    const blob = new Blob([JSON.stringify(invoice, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Factura.json';
    link.click();
  };

  return (
    <button className="btn btn-success mt-3" onClick={generateInvoice} disabled={items.length === 0}>
      Generar Factura
    </button>
  );
}
