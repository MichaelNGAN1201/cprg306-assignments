import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || quantity < 1) {
      setErrorMessage('Please provide a valid name and quantity.');
      return;
    }

    const item = {
      id: Date.now().toString(),
      name,
      quantity,
      category,
    };

    onAddItem(item);

    setName('');
    setQuantity(1);
    setCategory('produce');
    setErrorMessage('');
  };

  return (
    <div className='flex items-center mb-4'>
      <div className='bg-cyan-800 p-4 rounded-lg shadow-lg w-80'>
        {/* Name Field */}
        <div className='mb-4'>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='p-2 w-full border rounded focus:outline-none focus:border-blue-500 text-black'
            autoComplete='off'
          />
        </div>

        {/* Quantity Field */}
        <div className='flex justify-between mb-4'>
          <input
            type='number'
            id='quantity'
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min='1'
            max='99'
            required
            className='w-1/2 p-2 border rounded focus:outline-none focus:border-blue-500 text-black'
          />
          <select
            id='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='w-1/2 p-2 border rounded focus:outline-none focus:border-blue-500 text-black'
          >
            <option value='produce'>Produce</option>
            <option value='meat'>Meat</option>
            <option value='dairy'>Dairy</option>
            <option value='bakery'>Bakery</option>
            <option value='canned goods'>Canned Goods</option>
            <option value='dry goods'>Dry Goods</option>
            <option value='household'>Household</option>
          </select>
        </div>

        {/* Error Message */}
        {errorMessage && <div className='text-red-500 text-sm mb-2'>{errorMessage}</div>}

        {/* Submit Button */}
        <button
          type='submit'
          onClick={handleSubmit}
          className='bg-blue-500 text-white p-2 rounded-full w-12 h-12 text-2xl flex items-center justify-center hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50'
        >
          +
        </button>
      </div>
    </div>
  );
};

export default NewItem;

