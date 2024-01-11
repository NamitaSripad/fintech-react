import React, { useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', isChecked: false },
    { id: 2, name: 'Item 2', isChecked: false },
    { id: 3, name: 'Item 3', isChecked: false },
    // Add more items as needed
  ]);

  const handleCheckboxChange = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const handleToggleAll = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, isChecked: !areAllChecked }))
    );
  };

  const areAllChecked = items.every((item) => item.isChecked);

  return (
    <div>
      <button onClick={handleToggleAll}>
        Toggle All {areAllChecked ? 'Uncheck All' : 'Check All'}
      </button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => handleCheckboxChange(item.id)}
            />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
