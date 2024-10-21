import React, { useState } from 'react';

const BillCalculator = () => {
  const [items, setItems] = useState([{ name: '', quantity: '', price: '' }]);
  const [total, setTotal] = useState(0);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const newItems = [...items];
    newItems[index][name] = value;
    setItems(newItems);
  };

  const calculateTotal = (e) => {
    e.preventDefault();
    const totalCost = items.reduce((acc, item) => {
      const cost = parseFloat(item.quantity) * parseFloat(item.price);
      return acc + (isNaN(cost) ? 0 : cost);
    }, 0);
    setTotal(totalCost);
  };

  const addItem = () => {
    setItems([...items, { name: '', quantity: '', price: '' }]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Bill Calculator</h2>
        <form onSubmit={calculateTotal} className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="grid grid-cols-3 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Item Name"
                value={item.name}
                onChange={(e) => handleInputChange(index, e)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={item.quantity}
                onChange={(e) => handleInputChange(index, e)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <input
                type="number"
                name="price"
                placeholder="Price per Unit"
                value={item.price}
                onChange={(e) => handleInputChange(index, e)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addItem}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Add Another Item
          </button>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200"
          >
            Calculate Total
          </button>
        </form>

        {total > 0 && (
          <div className="mt-6 bg-green-100 p-4 rounded-md">
            <p className="text-xl font-semibold">Total Cost: ${total.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BillCalculator;
