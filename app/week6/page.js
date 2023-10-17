"use client";
import React, { useState, useEffect } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import items from './items.json';

export default function Page() {
  const [sortBy, setSortBy] = useState('name');
  const [itemList, setItemList] = useState(items);

  const handleSortByClick = (value) => {
    setSortBy(value);
  };

  const handleAddItem = (newItem) => {
    setItemList((prevItems) => [...prevItems, { ...newItem, id: Date.now().toString() }]);
  };

  useEffect(() => {
    const fetchData = async () => {
      
    };
    fetchData();
  }, []);

  return (
    <main className="p-4">
      <h1 className='text-5xl mb-4'>Shopping List</h1>
      <div className="flex mb-4">
        <button
          onClick={() => handleSortByClick('name')}
          className={`bg-${sortBy === 'name' ? 'blue' : 'white'}-500 text-white hover:bg-blue-700 font-bold py-2 px-4 rounded mr-2`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => handleSortByClick('category')}
          className={`bg-${sortBy === 'category' ? 'blue' : 'white'}-500 text-white hover:bg-blue-700 font-bold py-2 px-4 rounded`}
        >
          Sort by Category
        </button>
      </div>
      <p>Add New Item</p>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={itemList} sortBy={sortBy} />
    </main>
  );
}

