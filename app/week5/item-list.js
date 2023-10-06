import React from 'react';
import Item from './item.js';
import ItemListData from "./items.json";

function ItemList({ sortBy }) {
  const sortedItems = [...ItemListData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  
  const itemElements = sortedItems.map((item) => (
    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
  ));

  return (
    <div>
      <ul>{itemElements}</ul>
    </div>
  );
}

export default ItemList;
