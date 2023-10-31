import React from 'react';
import Item from './item';

const ItemList = ({ sortBy, items, onItemSelect }) => {
  let sortedItems = [];
  if (items && Array.isArray(items)) {
    sortedItems = [...items].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
  }

  const itemElements = sortedItems.map((item) => (
    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={onItemSelect} />
  ));

  return <ul>{itemElements}</ul>;
};

export default ItemList;

