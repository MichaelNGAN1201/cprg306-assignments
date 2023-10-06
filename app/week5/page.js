"use client";
import React, { useState } from 'react';
import ItemList from "./item-list";

export default function Page() {
  const [sortBy, setSortBy] = useState("name"); // Initialize sortBy state

 
  const handleSortByClick = (value) => {
    setSortBy(value);
  };

  return (
    <main>
  <h1 className='text-5xl'>Shopping List</h1>
    <div>
        <button
        onClick={() => handleSortByClick("name")}
        className={`bg-${sortBy === "name" ? "blue" : "white"}-500 text-white hover:bg-blue-700 font-bold py-2 px-4 rounded`}
        >
        Sort by Name
        </button>
        <button
        onClick={() => handleSortByClick("category")}
        className={`bg-${sortBy === "category" ? "blue" : "white"}-500 text-white hover:bg-blue-700 font-bold py-2 px-4 rounded`}
        >
        Sort by Category
        </button>
    </div>
    <ItemList sortBy={sortBy} /> 
    </main>
    );
}
