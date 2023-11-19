"use client";
import React, { useState, useEffect } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas'; 
import { getItems, addItem} from "../_services/shopping-list-service";

export default function Page() {
  const [sortBy, setSortBy] = useState('name');
  const [itemList, setItemList] = useState(items);
  const [selectedItemName, setSelectedItemName] = useState('');

  async function loadItems() {
    try {
      const items = await getItems(user.uid);
      console.log("Retrieved items:", items);
      setItems(items);

      
    } catch (error) {
      console.error("Error loading items:", error);
    }
  }

  const handleSortByClick = (value) => {
    setSortBy(value);
  };

  async function handleAddItem(newItem) {
    try {
      const newItemId = await addItem(user.uid, newItem);

      newItem.id = newItemId;

      setItems((prevItems) => [...prevItems, newItem]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  }

  function handleItemSelect(item) {
    console.log("handleItemSelect called");
    console.log("Received item:", item);
    console.log("Received item name:", item.data.name);

    const cleanedName = item.data.name

    setSelectedItemName(cleanedName);
    console.log("cleanedName:", cleanedName);
  }

  useEffect(() => {
    const fetchData = async () => {
      
    };
    fetchData();
  }, []);

  if (!user) {
    return (
      <div>
        <p>Please log in to access the shopping list.</p>
        <Link href="/">Back to front Page</Link>
      </div>
    );
  }


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
      <div className="flex">
        <div className="w-1/2 pr-2">
          <ItemList items={itemList} sortBy={sortBy} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-1/2 pl-2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
