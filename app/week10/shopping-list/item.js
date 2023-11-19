import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li className="bg-slate-700 shadow-md p-4 mb-4" onClick={() => onSelect(name)}>
      <div className="text-white font-semibold text-lg">{name}</div>
      <div className="text-white">Buy {quantity} in {category}</div>
    </li>
  );
};

export default Item;